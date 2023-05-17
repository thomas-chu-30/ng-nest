import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { Message } from '@ng-nest/api-interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getHomeData(): Message {
    return this.appService.getData();
  }

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
}
