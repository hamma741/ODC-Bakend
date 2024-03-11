import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS with the correct origin
  app.enableCors({
    origin: 'http://localhost:3002',
    credentials: true,
  });

  await app.listen(3001);
}
bootstrap();
