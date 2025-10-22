import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
// import type { Request } from 'express'
import { CatsService } from './cats.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpStatusEnum, ResponseMessageEnum } from 'src/global/globalEnum';
import { Cat } from 'src/models/cat.model';
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
  @Get('/:id')
  findDetail(): ResponseData<string> {
    try {
      return new ResponseData<string>(
        this.catsService.findDetail(),
        HttpStatusEnum.SUCCESS,
        ResponseMessageEnum.SUCCESS,
      );
    } catch (error) {
      console.log(error);
      return new ResponseData<string>(
        null,
        HttpStatusEnum.NOT_FOUND,
        ResponseMessageEnum.NOT_FOUND,
      );
    }
  }
  @Post()
  create(): ResponseData<string> {
    try {
      return new ResponseData<string>(
        this.catsService.create(),
        HttpStatusEnum.SUCCESS,
        ResponseMessageEnum.SUCCESS,
      );
    } catch (error) {
      console.log(error);
      return new ResponseData<string>(
        null,
        HttpStatusEnum.NOT_FOUND,
        ResponseMessageEnum.NOT_FOUND,
      );
    }
  }
  @Patch()
  updateSomething(): ResponseData<string> {
    try {
      return new ResponseData<string>(
        this.catsService.updateSomething(),
        HttpStatusEnum.SUCCESS,
        ResponseMessageEnum.SUCCESS,
      );
    } catch (error) {
      console.log(error);
      return new ResponseData<string>(
        null,
        HttpStatusEnum.NOT_FOUND,
        ResponseMessageEnum.NOT_FOUND,
      );
    }
  }
  @Put()
  update(): ResponseData<string> {
    try {
      return new ResponseData<string>(
        this.catsService.update(),
        HttpStatusEnum.SUCCESS,
        ResponseMessageEnum.SUCCESS,
      );
    } catch (error) {
      console.log(error);
      return new ResponseData<string>(
        null,
        HttpStatusEnum.NOT_FOUND,
        ResponseMessageEnum.NOT_FOUND,
      );
    }
  }
  @Delete()
  del(): ResponseData<string> {
    try {
      return new ResponseData<string>(
        this.catsService.del(),
        HttpStatusEnum.SUCCESS,
        ResponseMessageEnum.SUCCESS,
      );
    } catch (error) {
      console.log(error);
      return new ResponseData<string>(
        null,
        HttpStatusEnum.NOT_FOUND,
        ResponseMessageEnum.NOT_FOUND,
      );
    }
  }
}
