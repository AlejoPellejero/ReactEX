const characters = ["Goku", "Vegeta", "Trunks"];

const [, , p3] = characters;

//console.log(p3);

const returnsArrays = () => {
  return ["ABC", 123] as const; //It will always return these types
};

const [letrtas, numeros] = returnsArrays();

//This is a task:
const useState = (name: string) => {
  return [name, (newName: string) => console.log(newName)] as const;
};

const [name, setName] = useState("Goku");

console.log(name);
setName("Vegeta");
