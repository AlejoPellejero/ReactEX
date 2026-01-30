interface Person {
  firstName: string;
  lastName: string;
  age: number;
  mail: string;
  address?: Address;
}

interface Address {
  postalCode: string;
  city: string;
  state?: string;
}

//Thius is happening in memory
const objectPerson: Person = {
  //Properties
  firstName: "Clark",
  lastName: "Kent",
  age: 30,
  mail: "test@test.co",
  //powers: ["Super fuerza", "Volar"],
  //address: {
  //  postalCode: "12345",
  //  city: "New York",
  //  state: "NY",
  //},
};

//const spiderman = { ...objectPerson }; //is a copy
const spiderman = structuredClone(objectPerson);

objectPerson.age = 22;
//objectPerson.name = "Bruce";
//spiderman.name = "Peter";
//spiderman.address.city = "Queens";

console.log(objectPerson);
console.log(spiderman);
