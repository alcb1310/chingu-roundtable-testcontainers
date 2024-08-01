import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dotenv from 'dotenv';

async function bootstrap() {
  const port = process.env.PORT;
  console.info(`Running on port ${port}`);
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
