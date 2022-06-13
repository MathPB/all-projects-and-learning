const client = require("../client");

client.delete({ id: "b243b880-d23e-11eb-92df-79bfb9a70245" }, (error, _) => {
  if (!error) {
    console.log("Coffee has been successfully deleted");
  } else {
    console.error(error);
  }
});
