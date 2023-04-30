import { Schema } from 'superflare';

export default function () {
  return Schema.create("posts", (table) => {
    table.increments("id");
    table.string("title");
    table.string("content").nullable();
    table.boolean("published");
    table.integer("userId");
    table.timestamps();
  });
}