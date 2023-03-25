import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // localhost:4200 -> localhost:3000 (Backend): CORS Error
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
