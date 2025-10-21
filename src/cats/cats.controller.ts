import { Controller, Delete, Get, Patch, Post, Put, Req } from '@nestjs/common';
import type { Request } from 'express';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findAll(@Req() request: Request): string {
    return this.catsService.findAll();
  }
  @Get('/:id')
  findDetail(): string {
    return this.catsService.findAll();
  }
  @Post()
  create(): string {
    return this.catsService.create();
  }
  @Patch()
  updateSomething(): string {
    return this.catsService.updateSomething();
  }
  @Put()
  update(): string {
    return this.catsService.update();
  }
  @Delete()
  del(): string {
    return this.catsService.del();
  }
}
