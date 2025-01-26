import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModel } from './users/users.model';

@Module({
  imports: [UsersModel],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
