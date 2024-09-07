import '@multi-service-repro/sdk-polyfill';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { getOpenApiDocument } from './openapi';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = await getOpenApiDocument(app);
  SwaggerModule.setup('api', app, document);

  await app.listen(3003);
}
bootstrap();
