import { Request, Response } from "express";
import { randomResponse } from "../../helpers/randomResponse";

class UserController {
  async list(req: Request, res: Response) {
    res.send(
      `<span style="font-size:40px">Para utilizar a aplicação digite após a "/" o seu nome</span>`
    );
  }

  async choices(req: Request, res: Response) {
    try {
      const { name } = req.params;

      if (!name || name.length < 3 || name.length > 16) {
        const error = new Error(`Invalid Parms!`);
        throw error;
      }

      const result = randomResponse(name);

      return res.send(result);
    } catch (error) {
      res.send("<b>Escreve direito seu nome aí meu irmão!</b>");
    }
  }
}

export { UserController };
