import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import metadata from './metadata';

export async function getOpenApiDocument(app: INestApplication<any>) {
  const config = new DocumentBuilder()
    .setTitle('Service a')
    .setDescription('The service a API description')
    .setVersion('0.0.1')
    .addTag('hello')
    .build();
  await SwaggerModule.loadPluginMetadata(metadata);
  return SwaggerModule.createDocument(app, config);
}
