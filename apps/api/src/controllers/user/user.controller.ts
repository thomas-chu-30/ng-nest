import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getAuth(@Query() params: { id: string }) {
    console.log('id', JSON.stringify(params));

    return {
      id: `${params.id}`,
      name: 'thomas',
      age: '',
    };
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return {
      id: id,
      name: 'HAO',
    };
  }
}
