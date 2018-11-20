import {Deserializable} from './deserializable';

export abstract class Media implements Deserializable {

  id: number;
  title: string;
  resume: string;
  genres: string[];
  length: number;
  notes: Note;
  poster: string;
  creation: string;

  constructor() {
    this.id = null;
    this.title = null;
    this.resume = null;
    this.genres = null;
    this.length = null;
    this.notes = null;
    this.poster = null;
    this.creation = null;
  }

  deserialize(input: any): this {
    Object.keys(this).forEach(k => this[k] = input[k]);
    this.notes = new Note().deserialize(input.notes);
    return this;
  }

  abstract getIconType(): string;

}

export class Note {
  mean: number;
  total: number;

  constructor() {
    this.mean = null;
    this.total = null;
  }

  deserialize(input: any): this {
    Object.keys(this).forEach(k => this[k] = input[k]);
    return this;
  }
}
