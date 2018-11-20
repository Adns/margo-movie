import {Result} from './result';
import {Deserializable} from './deserializable';
import {Media} from './media';

export class Movies extends Result implements Deserializable {
  movies: Movie[];

  deserialize(input: Movies): this {
    Object.assign(this, input);

    this.movies = input.movies.map(m => new Movie().deserialize(m));
    return this;
  }
}

export class Movie extends Media {

  constructor() {
    super();
  }

  deserialize(input: Movie): this {
    super.deserialize(input);
    this.resume = input['synopsis'];

    return this;
  }

  getIconType(): string {
    return 'film';
  }
}


