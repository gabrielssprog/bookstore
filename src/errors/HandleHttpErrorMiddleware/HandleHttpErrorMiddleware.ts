import { NextFunction, Request, Response } from "express";
import { HttpError } from "../HttpError/HttpError";

export class HandleHttpErrorMiddleware {
    public handle(error: Error | HttpError, request: Request, response: Response, next: NextFunction) {
        console.log(error)

        if (error instanceof HttpError) {
            return response.status(error.code).json({
                message: error.message
            })
        }

        response.status(500).json()
    }
}