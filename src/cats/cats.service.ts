import { Injectable } from '@nestjs/common';
import { Cat } from 'src/models/cat.model';

@Injectable()
export class CatsService {
  private cats: Cat[] = [
    {
      id: 1,
      name: 'Tom',
      age: 3,
    },
    {
      id: 2,
      name: 'Jerry',
      age: 4,
    },
  ];
  findAll(): Cat[] {
    return this.cats;
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
