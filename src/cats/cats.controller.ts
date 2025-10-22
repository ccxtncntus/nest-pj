import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
// import type { Request } from 'express'
import { CatsService } from './cats.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpStatusEnum, ResponseMessageEnum } from 'src/global/globalEnum';
import { Cat } from 'src/models/cat.model';
import { CatDto } from 'src/dto/cat.dto';
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get()
  findAll(): ResponseData<Cat[]> {
    try {
      return new ResponseData<Cat[]>(
        this.catsService.findAll(),
        HttpStatusEnum.SUCCESS,
        ResponseMessageEnum.SUCCESS,
      );
    } catch (error) {
      console.log(error);
      return new ResponseData<Cat[]>(
        null,
        HttpStatusEnum.NOT_FOUND,
        ResponseMessageEnum.NOT_FOUND,
      );
    }
  }
  @Get(':id')
  findDetail(@Param('id') id: number): ResponseData<Cat> {
    try {
      return new ResponseData<Cat>(
        this.catsService.findDetail(id),
        HttpStatusEnum.SUCCESS,
        ResponseMessageEnum.SUCCESS,
      );
    } catch (error) {
      console.log(error);
      return new ResponseData<Cat>(
        null,
        HttpStatusEnum.NOT_FOUND,
        ResponseMessageEnum.NOT_FOUND,
      );
    }
  }
  @Post()
  create(@Body() catDto: CatDto): ResponseData<Cat> {
    try {
      return new ResponseData<Cat>(
        this.catsService.create(catDto),
        HttpStatusEnum.SUCCESS,
        ResponseMessageEnum.SUCCESS,
      );
    } catch (error) {
      console.log(error);
      return new ResponseData<Cat>(
        null,
        HttpStatusEnum.NOT_FOUND,
        ResponseMessageEnum.NOT_FOUND,
      );
    }
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() catDto: CatDto): ResponseData<Cat> {
    try {
      return new ResponseData<Cat>(
        this.catsService.update(id, catDto),
        HttpStatusEnum.SUCCESS,
        ResponseMessageEnum.SUCCESS,
      );
    } catch (error) {
      console.log(error);
      return new ResponseData<Cat>(
        null,
        HttpStatusEnum.NOT_FOUND,
        ResponseMessageEnum.NOT_FOUND,
      );
    }
  }
  @Delete(':id')
  del(@Param('id') id: number): ResponseData<Cat> {
    try {
      return new ResponseData<Cat>(
        this.catsService.del(id),
        HttpStatusEnum.SUCCESS,
        ResponseMessageEnum.SUCCESS,
      );
    } catch (error) {
      console.log(error);
      return new ResponseData<Cat>(
        null,
        HttpStatusEnum.NOT_FOUND,
        ResponseMessageEnum.NOT_FOUND,
      );
    }
  }
}
