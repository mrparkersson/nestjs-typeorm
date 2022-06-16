import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { TransformInterceptor } from './transform.interceptor';
import { Logger } from '@nestjs/common';

console.log(process.env.MY_VARIABLE);

async function bootstrap() {
  // const logger = new Logger();
  // const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalInterceptors(new TransformInterceptor());
  // const port = 8080;
  // await app.listen(port);
  // logger.log(`Application is running on port ${port}`);
}
bootstrap();
