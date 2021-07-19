import { ArticleDto } from './../dto/req/article.dto';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { PostService } from '../services/post.service';
import { Post as PostModel } from '@prisma/client';

@ApiTags('文章管理')
@Controller('article')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @ApiOperation({ summary: '新建文章' })
  @Post()
  async createDraft(@Body() data: ArticleDto): Promise<PostModel> {
    const { title, content, authorEmail } = data;
    return this.postService.createPost({
      title,
      content,
      author: {
        connect: { email: authorEmail }
      }
    });
  }

  @Get()
  @ApiOperation({ summary: '显示文章列表' })
  async getPublishedPosts(): Promise<PostModel[]> {
    return this.postService.posts({
      where: { published: true }
    });
  }

  @Get(':id')
  @ApiOperation({ summary: '显示文章详情' })
  async getPostById(@Param('id') id: string): Promise<PostModel> {
    return this.postService.post({ id });
  }

  // @ApiOperation({ summary: '搜索文章' })
  // @Get('search/:keyWord')
  // async getFilteredPosts(@Param('keyWord') keyWord: string): Promise<PostModel[]> {
  //   return this.postService.posts({
  //     where: {
  //       OR: [
  //         {
  //           title: { contains: keyWord }
  //         },
  //         {
  //           content: { contains: keyWord }
  //         }
  //       ]
  //     }
  //   });
  // }

  @ApiOperation({ summary: '发布文章' })
  @Put('publish/:id')
  async publishPost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.updatePost({
      where: { id },
      data: { published: true }
    });
  }

  @ApiOperation({ summary: '删除文章' })
  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<PostModel> {
    return this.postService.deletePost({ id });
  }
}
