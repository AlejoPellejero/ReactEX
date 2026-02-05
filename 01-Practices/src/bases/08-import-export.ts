import { heroes, type Hero } from "../data/heroes.data";
import { Owner } from "../data/heroes.data";
//To import data we must export from other files

const getHeroById = (id: number): Hero | undefined => {
  const hero = heroes.find((hero) => {
    return hero.id === id;
  });

  if (!hero) {
    throw new Error(`Hero with id ${id} not found`);
  }

  return hero;
};

export const getHeroesByOwner = (owner: Owner): Hero[] => {
  const heroesByOwner = heroes.filter((hero) => hero.owner === owner);

  return heroesByOwner;
};
