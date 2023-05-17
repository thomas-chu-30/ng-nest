/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { INestApplication, Logger } from '@nestjs/common';

import { AppModule } from './app/app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  // 建立 swagger 文件
  const app = await NestFactory.create(AppModule);
  const appSwagger = await NestFactory.create(AppModule);
  setupSwagger(appSwagger);
  await appSwagger.listen(3000);
  //
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

function setupSwagger(app: INestApplication) {
  const builder = new DocumentBuilder();
  const config = builder
    .setTitle('TodoList')
    .setDescription('This is a basic Swagger document.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const options: SwaggerCustomOptions = {
    explorer: true, // 開啟搜尋列
    // explorer：是否開啟搜尋列，預設為 false。
    // swaggerOptions：Swagger 其他配置項目，可以參考官方文件。
    // customCss：自定義 Swagger UI 的 CSS。
    // customCssUrl：給予自定義 Swagger UI 的 CSS 資源位址。
    // customJs：透過自訂 JavaScript 來操作 Swagger UI。
    // customfavIcon：自訂 Swagger UI icon。
    // swaggerUrl：給予 Swagger JSON 資源位址。
    // customSiteTitle：自訂義 Swagger UI 的標題。
    // validatorUrl：給予 Swagger 的 Validator 資源位址。
  };
  SwaggerModule.setup('api-doc', app, document, options);
}

bootstrap();
