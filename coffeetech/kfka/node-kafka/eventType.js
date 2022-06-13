import avro from "avsc";

export default avro.Type.forSchema({
  type: "record",
  fields: [
    {
      name: "coin",
      type: {
        type: "enum",
        symbols: ["CAZELLICOIN", "BITCOIN", "ETHERIUM", "DOGE"],
      },
    },
    { name: "transaction", type: "string" },
  ],
});
