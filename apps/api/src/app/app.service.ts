import { Injectable } from '@nestjs/common';
import { Message } from '@ng-nest/api-interfaces';

@Injectable()
export class AppService {
  getHome(): Message {
    return { message: 'Welcome to home-api!' };
  }
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
