import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';

interface IRegister {
  email: string;
  password: string;
}
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

  @Post('register')
  postRegister(@Body() payload: IRegister) {
    console.log('payload', payload);

    return JSON.stringify(payload);
  }
}
