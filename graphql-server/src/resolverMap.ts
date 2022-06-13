import { IResolvers } from "graphql-tools";

import { Register } from "./types/register";
import { registers } from "./mocks/register";
const resolverMap: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `👋 Hello world! 👋`;
    },
    getRegister(_: void, { id }: { id: string }): Register {
      const [result] = registers.filter((register) => {
        return register.id === id;
      });
      return result;
    },
  },
};
export default resolverMap;
