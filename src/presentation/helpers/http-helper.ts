import { ServerError } from './../errors/server-error';
import { HttpResponse } from './../protocols/http';

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error 
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})