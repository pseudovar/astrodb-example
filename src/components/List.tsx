'use client';
import { useEffect, useState } from 'react';

type Pets = {
  id: string;
  name: string;
};

export function List() {
  const [pets, setPets] = useState<Pets[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/pets');

      setPets(await response.json());
    };
    fetchData();
  }, []);

  if (!pets.length) {
    return (
      <ul>
        <li>No Pets Found</li>
      </ul>
    );
  }

  return (
    <ul>
      {pets.map((pet) => {
        return <li>{pet.name}</li>;
      })}
    </ul>
  );
}
