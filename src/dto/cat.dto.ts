/* eslint-disable @typescript-eslint/no-unsafe-call */
import { MinLength, IsNotEmpty } from 'class-validator';

export class CatDto {
  @MinLength(5, { message: 'Tên 5 kí tự' })
  @IsNotEmpty({ message: 'Không bỏ trống tên' })
  name?: string;
  age?: number;
}
