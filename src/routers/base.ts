import express, { Express, Request, Response } from "express";
import { Handler } from "../types";

type HttpMethod = "get" | "post" | "put" | "delete" | "patch" | "head";

export class App {
  public app: Express;

  constructor() {
    this.app = express();
  }

  public route(
    httpMethod: HttpMethod,
    path: string,
    handler: Handler,
    method?: string
  ) {
    this.app[httpMethod.toLowerCase()](
      path,
      async (req: Request, res: Response): Promise<Response> =>
        await new handler(req, res).handle(method)
    );
  }
}
