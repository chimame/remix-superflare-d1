import { Model } from "superflare";
import { Post } from './Post';

export class User extends Model {
  toJSON(): Omit<UserRow, "password"> {
    const { password, ...rest } = super.toJSON();
    return rest;
  }
  posts!: Post[] | Promise<Post[]>;
  $posts() {
    return this.hasMany(Post);
  }
}

Model.register(User);

export interface User extends UserRow {}
