export class BsResult {
  errors: Error[];
}

export class Error {
  code: number;
  text: string;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}
