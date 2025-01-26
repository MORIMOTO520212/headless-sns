import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as express from 'express';
import * as functions from 'firebase-functions';

const server = express();

export const createNestServer = async (expressInstance: any) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  // ここにセキュリティについての設定を追加する
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  // バリデーションパイプラインの追加
  app.useGlobalPipes(
    new ValidationPipe({ transform: true, enableDebugMessages: true }),
  );

  console.log('the server is starting @ firebase');
  return app.init();
};

createNestServer(server)
  .then(() => console.log('Nest Ready'))
  .catch((err: string) => console.error('Nest broken', err));

export const api = functions.https.onRequest(server);
