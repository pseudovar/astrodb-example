import { defineDb, defineTable, column } from 'astro:db';
import { sql } from 'drizzle-orm';

const Pets = defineTable({
  columns: {
    id: column.number({ primaryKey: true, required: true }),
    name: column.text({ required: true }),
    species: column.text({ required: true }),
    createdAt: column.number({
      default: sql`(STRFTIME('%s', 'now'))`,
    }),
    updatedAt: column.number({
      default: sql`(STRFTIME('%s', 'now'))`,
    }),
  },
});

export default defineDb({
  tables: { Pets },
});
