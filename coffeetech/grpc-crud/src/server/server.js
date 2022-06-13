const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const { v1: uuidv1 } = require("uuid");

const packageDefinition = protoLoader.loadSync(
  __dirname + "./../protos/coffee.proto",
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
    arrays: true,
  }
);

const coffeProto = grpc.loadPackageDefinition(packageDefinition);

const coffees = [
  {
    id: "b243b880-d23e-11eb-92df-79bfb9a70245",
    title: "Typescript",
    members: [
      { id: "0", name: "Vini" },
      { id: "1", name: "Felipe" },
      { id: "2", name: "Gustavo" },
      { id: "3", name: "Matheus" },
      { id: "4", name: "Vini" },
    ],
  },
  {
    id: "82e1a9f0-d23c-11eb-a3e0-cf13330db118",
    title: "GRPC",
    members: [
      { id: "0", name: "Vini" },
      { id: "1", name: "Felipe" },
      { id: "2", name: "Gustavo" },
      { id: "3", name: "Matheus" },
      { id: "4", name: "Vini" },
    ],
  },
];

const server = new grpc.Server();

server.addService(coffeProto.CoffeeService.service, {
  list: (_, callback) => {
    callback(null, { coffees });
  },
  insert: (call, callback) => {
    let coffee = call.request;
    coffee.id = uuidv1();
    coffees.push(coffee);
    callback(null, coffee);
  },
  delete: (call, callback) => {
    let coffeeIndex = coffees.findIndex((n) => n.id == call.request.id);
    if (coffeeIndex || coffeeIndex == 0) {
      coffees.splice(coffeeIndex, 1);
      callback(null, {});
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not Found",
      });
    }
  },
});

server.bind("localhost:50051", grpc.ServerCredentials.createInsecure());
console.log("Server running at http://localhost:50051");

server.start();
