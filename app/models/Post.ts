import { Model } from "superflare";

export class Post extends Model {
  toJSON(): PostRow {
    return super.toJSON();
  }
}

Model.register(Post);

export interface Post extends PostRow {}
