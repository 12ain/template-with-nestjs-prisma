import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

class PostDto {
  @ApiProperty({ description: '标题' })
  title: string;
  @ApiProperty({ description: '内容' })
  content: string;
}

@ApiTags('文章列表')
@Controller('posts')
export class PostsController {
  @Get()
  @ApiOperation({ summary: '显示文章列表' })
  index() {
    return 'hello,posts';
  }

  @Get(':id')
  @ApiOperation({ summary: '显示文章详情' })
  detail(@Param('id') id) {
    return `hello,posts ${id} `;
  }

  @Post()
  @ApiOperation({ summary: '新建文章' })
  create(@Body() PostBody: PostDto) {
    return PostBody;
  }

  @Put(':id')
  @ApiOperation({ summary: '修改文章内容' })
  edit(@Param('id') id: string) {
    return 'sucess' + id;
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除文章' })
  delete(@Param() id) {
    return id;
  }
}
