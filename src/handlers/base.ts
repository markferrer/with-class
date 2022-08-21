import { Request, Response } from "express";

export abstract class BaseHandler {
  constructor(
    protected req: Request,
    protected res: Response,
    protected methodName?: string
  ) {}
  public async handle(methodNameOverride?: string): Promise<Response> {
    return await this[
      (this.methodName as keyof BaseHandler) ??
        (methodNameOverride as keyof BaseHandler) ??
        (this.req.method.toLowerCase() as keyof BaseHandler)
    ]();
  }
}
