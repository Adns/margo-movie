import {Deserializable} from './deserializable';

export class Comment implements Deserializable {
  login: string;
  avatar: string;
  date: string;
  text: string;

  constructor() {
    this.login = null;
    this.avatar = null;
    this.date = null;
    this.text = null;
  }

  deserialize(input: Comment): this {
    Object.keys(this).forEach(k => this[k] = input[k]);
    return this;
  }
}
