import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs-extra';
import { resolve } from 'path';
import { version } from '../package.json';
import { SwaggerTitle, SwaggerDescription, SwaggerTags, SwaggerServers } from './config/swagger';
import { AppModule } from './models/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const builder = new DocumentBuilder()
    .setTitle(SwaggerTitle)
    .setDescription(SwaggerDescription)
    .setVersion(version)
    .addBearerAuth();
  SwaggerTags.forEach((tag) => {
    builder.addTag(...tag);
  });
  SwaggerServers.forEach((server) => {
    builder.addServer(...server);
  });
  const options = builder.build();
  const document = SwaggerModule.createDocument(app, options, {
    deepScanRoutes: true
  });

  writeFileSync(resolve(__dirname, '../../api.json'), JSON.stringify(document, null, 2), {
    encoding: 'utf-8'
  });
  process.exit(0);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
