import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { writeFile } from 'fs/promises';
import { getOpenApiDocument } from './openapi';

async function generate() {
  const app = await NestFactory.create(AppModule);

  const document = await getOpenApiDocument(app);
  await writeFile('openapi.json', JSON.stringify(document));
}

generate();
