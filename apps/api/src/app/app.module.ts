import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from '../controllers/hello/hello.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AppController, HelloController],
  providers: [AppService],
})
export class AppModule {}
