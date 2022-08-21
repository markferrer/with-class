import { Request, Response } from "express";

export interface Handler {
  new (req: Request, res: Response): {
    handle(methodNameOverride?: string): Promise<Response>;
  };
}
