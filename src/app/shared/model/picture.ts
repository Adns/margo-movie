import {Result} from './result';
import {Deserializable} from './deserializable';

export class Pictures extends Result implements Deserializable {
  pictures: Picture[];

  deserialize(input: Pictures): this {
    Object.assign(this, input);

    this.pictures = input.pictures.map(p => new Picture().deserialize(p));
    return this;
  }
}

export class Picture {
  url: string;
  date: string;

  constructor() {
    this.url = null;
    this.date = null;
  }

  deserialize(input: Picture): this {
    Object.keys(this).forEach(k => this[k] = input[k]);
    return this;
  }

}


