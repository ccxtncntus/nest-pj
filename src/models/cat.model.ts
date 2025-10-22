export class Cat {
  id?: number;
  name?: string;
  age?: number;

  constructor(name?: string, age?: number, id?: number) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
}
