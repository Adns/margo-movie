export class Result {
  errors: Error[];

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}

export class Error {
  code: number;
  text: string;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}
