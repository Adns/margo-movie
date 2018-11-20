import {Result} from './result';
import {Deserializable} from './deserializable';
import {Media} from './media';

export class Shows extends Result implements Deserializable {
  shows: Show[];

  deserialize(input: Shows): this {
    Object.assign(this, input);

    this.shows = input.shows.map(s => new Show().deserialize(s));
    return this;
  }
}

export class Show extends Media {
  seasons: number;
  episodes: number;
  network: string;

  constructor() {
    super();
    this.seasons = null;
    this.episodes = null;
    this.network = null;
  }

  deserialize(input: Show): this {
    super.deserialize(input);
    this.poster = input['images'].poster || input['images'].show;
    this.resume = input['description'];

    return this;
  }

  getIconType(): string {
    return 'tv';
  }
}
