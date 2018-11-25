import {Deserializable} from './deserializable';

export class Episode implements Deserializable {
  id: number;
  title: string;
  season: number;
  episode: number;
  code: string;
  description: string;
  date: string;

  constructor() {
    this.id = null;
    this.title = null;
    this.season = null;
    this.episode = null;
    this.code = null;
    this.description = null;
    this.date = null;
  }

  deserialize(input: any): this {
    Object.keys(this).forEach(k => this[k] = input[k]);
    return this;
  }
}
