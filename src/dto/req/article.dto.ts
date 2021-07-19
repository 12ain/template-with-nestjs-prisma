import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsObject, IsOptional, IsString, Min, MinLength } from 'class-validator';

export class ArticleDto {
  title: string;
  content?: string;
  authorEmail: string;
}
