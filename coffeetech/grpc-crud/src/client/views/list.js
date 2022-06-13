const client = require("../client");

client.list({}, (error, coffees) => {
  if (!error) {
    console.log("Successfully fetch List Coffee");
    console.log("All Coffeetech");
    console.log(coffees);
    console.log("Only Coffeetech");
    console.log(coffees.coffees[1]);
  } else {
    console.error(error);
  }
});
