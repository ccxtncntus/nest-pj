import { Injectable } from '@nestjs/common';
import { CatDto } from 'src/dto/cat.dto';
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
  findDetail(id: number): Cat {
    const cat = this.cats.find((item) => item.id === Number(id));
    if (!cat) {
      throw new Error(`Cat with id ${id} not found`);
    }
    return cat;
  }
  create(catData: CatDto): Cat {
    const newCat = {
      id: Math.random(),
      ...catData,
    };
    this.cats.push(newCat);
    return newCat;
  }

  update(id: number, catDto: CatDto): Cat {
    console.log({ data: catDto });
    const index = this.cats.findIndex((item) => item.id === Number(id));
    if (index === -1) {
      throw new Error(`Cat with id ${id} not found`);
    }
    this.cats = this.cats.map((obj) =>
      obj.id === Number(id) ? { ...obj, ...catDto } : obj,
    );
    return this.cats[index];
  }
  del(id: number): Cat[] {
    const newCats = this.cats.filter((item) => item.id !== Number(id));
    this.cats = newCats;
    return this.cats;
  }
}
