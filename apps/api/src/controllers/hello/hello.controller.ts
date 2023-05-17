import { Controller, Get } from '@nestjs/common';

@Controller('hello-test')
export class HelloController {
  @Get()
  getAll() {
    return [];
  }
}
