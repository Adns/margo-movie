import {BsResult} from './bs-result';
import {Deserializable} from './deserializable';
import {Media} from './media';

export class Shows extends BsResult implements Deserializable {
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
  status: string;

  constructor() {
    super();
    this.seasons = null;
    this.episodes = null;
    this.network = null;
    this.status = null;
  }

  deserialize(input: Show): this {
    super.deserialize(input);
    this.poster = input['images'].poster || input['images'].show;
    this.resume = input['description'];

    return this;
  }

  getType(): string {
    return 'show';
  }

  getIconType(): string {
    return 'tv';
  }
}
