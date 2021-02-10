//task 1
const prod1 = {
  name: "",
  price: "",
  weight: "",
};

prod1.name = "Wardrobe";
prod1.price = 20;
prod1.weight = 4;

const prod2 = {
  name: "",
  price: "",
  weight: "",
};

(prod2.name = "Table"), (prod2.price = 30), (prod2.weight = 3);

const sum = prod1.price + prod2.price;
const totalWeight = prod1.weight + prod2.weight;

console.log("Object1:", prod1, "Object2:", prod2);

console.log(`Produkt numer jeden to : ${prod1.name}`);

console.log(`Produkt numer dwa to : ${prod2.name}`);

console.log(`Produkty kosztuja razem : ${sum} euro`);

console.log(`Produkty waza razem : ${totalWeight} kg`);

//task 2

const currentUser = {
  name: "John",
  surname: "Doe",
  email: "johndoe@gmail.com",
  www: "www.john_doe.pl",
  userType: "human",

  show() {
    console.log(`My full name is ${this.name} ${this.surname}. `);
    console.log(`My email is ${this.email}.`);
    console.log(`My website is ${this.www}.`);
    console.log(`I am ${this.userType}.`);
  },
};

currentUser.show();

//task 3

const book = {
  title: "Harry Potter",
  author: "J.K.Rowling",
  pageCount: 400,
  publisher: "Insygnia",

  showDetails() {
    for (const [key, value] of Object.entries(book)) {
      console.log(`${key}: ${value}`);
    }
  },
};

console.log(book);
