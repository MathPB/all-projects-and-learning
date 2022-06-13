const client = require("../client");

let newCoffee = {
  title: "Graphql",
  members: [
    { id: "1", name: "Matheus" },
    { id: "2", name: "Vini" },
  ],
};

client.insert(newCoffee, (err, coffee) => {
  if (!err) {
    console.log("New Coffe created successfully", coffee);
  } else {
    console.error(error);
  }
});
