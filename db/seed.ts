import { db, Pets } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Pets).values([
    { id: 1, name: 'Pogo', species: 'dog' },
    { id: 2, name: 'Abu', species: 'Monkey' },
    { cuid: 3, name: 'Nemo', species: 'fish' },
    { cuid: 4, name: 'Rex', species: 'dinosaur' },
    { cuid: 5, name: 'Lady', species: 'dog' },
  ]);
}
