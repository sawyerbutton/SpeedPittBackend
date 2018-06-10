import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationModule } from './app/app.module';
require("reflect-metadata")

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);

  app.enableCors({
    origin: 'http://localhost:4200'
  });
  const options = new DocumentBuilder()
    .setTitle('SpeedIn Pittsburgh Backend')
    .setDescription('The SpeedIn API description')
    .setVersion('1.0')
    .addTag('SpeedIn')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api', app, document);
  await app.listen(3000);
}
bootstrap();
