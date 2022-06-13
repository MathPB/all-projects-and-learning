const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

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

const CoffeeService = grpc.loadPackageDefinition(packageDefinition)
  .CoffeeService;

const client = new CoffeeService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

module.exports = client;
