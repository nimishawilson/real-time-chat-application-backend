import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // app.enableCors({
  //   origin: 'http://localhost:4200', // ✅ Allow requests from Angular app
  //   credentials: true, // ✅ If using cookies or authentication tokens
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // ✅ Allowed HTTP methods
  //   allowedHeaders: 'Content-Type, Authorization', // ✅ Allowed headers
  // });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
