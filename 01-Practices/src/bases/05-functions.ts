interface User {
  userId: number;
  username: string;
}

function greet(name: string): string {
  return `Hello, ${name}!`;
  //return 222;
}

//const greet2 = (name: string): string => {
//return `Hello, ${name}!`;
//};
//Now Simplified
const greet2 = (name: string) => `Hello, ${name}!`;

const message = greet("Gokuuu");

function getUserInfo(): User {
  return {
    userId: 123,
    username: "goku123",
  };
}

const getUserInfo2 = (): User => {
  return {
    userId: 123,
    username: "goku123",
  };
};

const user = getUserInfo();
console.log(user);

//Return Implicit object
const getUserInfo3 = () => ({
  userId: 123,
  username: "goku123",
});

const myNumbers: number[] = [1, 2, 3, 4, 5];
//myNumbers.forEach(function (value) {
//  console.log({ value });
//});

myNumbers.forEach((value) => console.log({ value }));
