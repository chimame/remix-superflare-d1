import { Schema } from 'superflare';

export default function () {
  return Schema.update("users", (table) => {
    table.text("name").nullable();
  });
}