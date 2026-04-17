import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.FRONTEND_URL ?? 'http://localhost:3010',
    methods: ['GET'],
    allowedHeaders: ['Content-Type'],
    credentials: false,
  });

  const config = new DocumentBuilder()
    .setTitle('Video Hype API')
    .setDescription('API para obtener videos ordenados por nivel de hype')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
