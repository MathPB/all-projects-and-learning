console.log("producer...");

import Kafka from "node-rdkafka";
import eventType from "../eventType.js";

const stream = Kafka.Producer.createWriteStream(
  {
    "metadata.broker.list": "localhost:9092",
  },
  {},
  { topic: "test" }
);

const getRandomCoin = () => {
  const coins = ["CAZELLICOIN", "BITCOIN", "ETHERIUM", "DOGE"];
  return coins[Math.floor(Math.random() * coins.length)];
};

const getRandomTransaction = () => {
  return Math.floor(Math.random() * 1000).toString();
};

const queueMessage = () => {
  const coin = getRandomCoin();
  const transaction = getRandomTransaction();
  const event = { coin, transaction };
  const success = stream.write(eventType.toBuffer(event));
  if (success) {
    console.log("Transação realizada com sucesso!");
  } else {
    console.log("Algo deu errado!");
  }
};

setInterval(() => {
  queueMessage();
}, 3000);
