import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  findAll(): string {
    return 'This action returns all cats';
  }
  findDetail(): string {
    return 'Get detail';
  }
  create(): string {
    return 'Create cat';
  }
  updateSomething(): string {
    return 'Update small';
  }
  update(): string {
    return 'Update Full';
  }
  del(): string {
    return 'Del';
  }
}
