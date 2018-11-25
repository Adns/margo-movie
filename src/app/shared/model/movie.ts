import {BsResult} from './bs-result';
import {Deserializable} from './deserializable';
import {Media} from './media';

export class Movies extends BsResult implements Deserializable {
  movies: Movie[];

  deserialize(input: Movies): this {
    Object.assign(this, input);

    this.movies = input.movies.map(m => new Movie().deserialize(m));
    return this;
  }
}

export class Movie extends Media {

  director: string;

  constructor() {
    super();
    this.director = null;
  }

  deserialize(input: Movie): this {
    super.deserialize(input);
    this.resume = input['synopsis'];

    return this;
  }

  getType(): string {
    return 'movie';
  }

  getIconType(): string {
    return 'film';
  }
}


