import { HttpError } from "../HttpError/HttpError"
import { HandleHttpErrorMiddleware } from "./HandleHttpErrorMiddleware"

describe('Handle http error middleware', () => {
    const handleHttpErrorMiddleware = new HandleHttpErrorMiddleware()
    const request: any = {}
    const response: any = {
        status: jest.fn((code: number) => response),
        json: jest.fn((data: object) => data)
    }
    const next: any = () => {}
    const error = new HttpError('Hello World', 500)

    it('should call "json" with http error params', () => {
        handleHttpErrorMiddleware.handle(error, request, response, next)

        expect(response.status).toHaveBeenCalledWith(error.code)
        expect(response.json).toHaveBeenCalledWith({
            message: error.message
        })
    })

    it('should not call "json" with http error params', () => {
        handleHttpErrorMiddleware.handle(new Error(), request, response, next)

        expect(response.status).toHaveBeenCalledWith(500)
        expect(response.json).toHaveBeenCalledWith()
    })
})