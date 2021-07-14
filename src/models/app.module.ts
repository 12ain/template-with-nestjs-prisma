import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { PostService } from '../services/post.service';
import { PostModule } from '../models/post.module';
import { UserModule } from '../models/user.module';
import { PrismaService } from '../services/prisma.service';

@Module({
  imports: [PostModule, UserModule],
  controllers: [AppController],
  providers: [AppService, PostService, PrismaService]
})
export class AppModule {}
