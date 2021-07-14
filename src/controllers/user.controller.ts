import { Controller, Post, Body } from '@nestjs/common';
import { ApiProperty, ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserService } from '../services/user.service';
import { User as UserModel, Post as PostModel } from '@prisma/client';

class userDto {
  @ApiProperty({ description: '用户名' })
  username: string;
  @ApiProperty({ description: '密码' })
  password: string;
  @ApiProperty({ description: '邮箱' })
  email?: string;
  @ApiProperty({ description: '手机号' })
  phone?: string;
  salt: string;
}

@ApiTags('用户管理')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiOperation({ summary: '注册用户' })
  @Post()
  async signupUser(@Body() userData: userDto): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
