const person = {
  name: "Tony",
  age: 45,
  key: "Ironman",
};

const { name, age, key } = person;

console.log(name);
console.log(age);
console.log(key);

interface Hero {
  name: string;
  age: number;
  key: string;
  power?: string | undefined;
}

const useContext = ({ key, name, age }: Hero) => {
  return {
    keyName: key,
    user: {
      name,
      age,
    },
    rank: "A",
  };
};

const context = useContext(person);

const {
  keyName,
  rank,
  user: { name: newName },
} = useContext(person);

console.log(keyName, rank, newName);
