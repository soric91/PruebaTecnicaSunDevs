import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cartelera de Hype')
    .setDescription('API de videos con ranking de hype')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  app.enableCors({
    origin: process.env.FRONTEND_URL ?? 'http://localhost:3010',
    methods: ['GET'],
    allowedHeaders: ['Content-Type'],
    credentials: false,
  });
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
