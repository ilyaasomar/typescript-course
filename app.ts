let variable = "hello";
// variable = 18

let ageNumber: number = 18;

// you can also add two datatypes

let stringOrNumber: string | number; //we call this as union types
stringOrNumber = "hello";
stringOrNumber = 12;
// stringOrNumber = [];

//ARRAY
let names = ["a", "b", "c", "d"];
names.push("ilyas");
// names.push(12)

let testStringArray: string[];
testStringArray = ["a", "b", "c"];
// testStringArray = [1,2,3];

let testNumberArray: number[];
// testNumberArray = ["a", "b", "c"];
testNumberArray = [1, 2, 3];

// union types
let testStringOrNumberArray: (string | number)[];
testStringOrNumberArray = ["a", 2, "c"];
// testStringOrNumberArray = true;

// OBJECTS
let user = {
  username: "ilyas",
  age: 24,
  isAdmin: true,
};

user.username = "halimo";
// user.age = "twenty three"

// functions
let fucntion = () => {
  console.log("first");
};
let fucnReturnString = (): string => {
  console.log("hello");
  return "hello";
};

// TYPE ALIASES
type UserType = {
  username: string;
  age: number;
  phone?: string;
};

let betterFunc = (user: UserType) => {
  console.log(user.username);
};

//
type UserType2 = {
  username: string;
  age: number;
  phone?: string;
  theme: "dark" | "light";
};

let userWithTheme: UserType2 = {
  username: "ilyas",
  age: 24,
  // theme: "green",
  theme: "dark",
};

// INTERFACES
interface IUser {
  username: string;
  email: string;
  age: number;
}

// inheritance
interface IEmployee extends IUser {
  employeeId: number;
}
//asign data to the interface
const emp: IEmployee = {
  username: "ilyas",
  email: "ilyas@gmail.com",
  age: 24,
  employeeId: 1,
};
//asign data to the interface
const client: IUser = {
  username: "ilyas",
  email: "ilyas@gmail.com",
  age: 24,
};

// GENERICS
interface IAuthor {
  id: number;
  username: string;
}
interface ICategory {
  id: number;
  title: string;
}
interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[];
}

// apply generics
interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe: IPostBetter<String> = {
  id: 1,
  title: "post title",
  desc: "post description",
  extra: ["str", "str2"],
};

//generic cont.........
interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}
// write this
// const testMe2: IPostEvenBetter<{ id: number; username: string }> = {
//   id: 1,
//   title: "post title",
//   desc: "post description",
//   extra: [{ id: 1, username: "ilyas" }],
// };
// or this
const testMe2: IPostEvenBetter<IAuthor> = {
  id: 1,
  title: "post title",
  desc: "post description",
  extra: [{ id: 1, username: "ilyas" }],
};
const testMe3: IPostEvenBetter<ICategory> = {
  id: 1,
  title: "post title",
  desc: "post description",
  extra: [{ id: 1, title: "cate" }],
};
