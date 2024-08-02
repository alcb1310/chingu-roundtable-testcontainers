import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create.cat.dto';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    const cats = this.catsService.findAll();
    return cats;
  }

  @Post()
  @HttpCode(201)
  create(@Res() res: Response, @Body() createCatDto: CreateCatDto): string {
    this.catsService.create(createCatDto);
    res.status(HttpStatus.CREATED).send('This action adds a new cat');
    return 'This action adds a new cat';
  }
}
