export class ResponseData<D> {
  data: D | D[] | null;
  message: string;
  status: number;

  constructor(data: D | D[] | null, status: number, message: string) {
    this.data = data;
    this.message = message;
    this.status = status;
    return this;
  }
}
