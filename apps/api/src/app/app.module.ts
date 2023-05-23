import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from '../controllers/hello/hello.controller';
import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user/user.controller';

@Module({
  imports: [],
  controllers: [AppController, HelloController, UserController],
  providers: [AppService],
})
export class AppModule {}
