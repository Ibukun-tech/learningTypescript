// const vale = string;
console.log("hello world");
// function greet(person: string, date: Date) {
//   console.log(`Hello ${person}, today is ${date}!`);
// }

// greet("Brendan", new Date());

let obj: any = { x: 1 };
obj.food = "think";

function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
greet("sd");
const names = ["Alice", "Bob", "Eve"];
names.forEach(function (s) {
  console.log(s.toUpperCase());
});

function printCoord(pt: { x: number; y?: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y?.toFixed(2));
}
printCoord({ x: 4 });
printCoord({ x: 3, y: 3 });

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
printId("jsj");
printId(33);
function printNo(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

type Point = {
  x: number;
  y: number;
};
function printCoords(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoords({ x: 100, y: 100 });
type ID = number | string;
let changingString = "Hello World";
changingString = "Olá Mundo";
changingString;

const constantString = "Hello World";
constantString;
// const constantString = "Hello World";
let x: "hello" = "hello";
x = "hello";
// x = "gowdy";
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "center");
const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
// handleRequest(req.url, req.method as "GET");

// const req = { url: "https://example.com", method: "GET" } as const
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
