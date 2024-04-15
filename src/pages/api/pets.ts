import type { APIRoute } from 'astro';
import { db, Pets, eq } from 'astro:db';

export const GET: APIRoute = async (ctx) => {
  const pets = await db
    .select({ cuid: Pets.id, name: Pets.name })
    .from(Pets)
    .orderBy(Pets.name);
  return new Response(JSON.stringify(pets), { status: 200 });
};
