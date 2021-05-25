import { UpdatePersonById } from './../../../domain/usecases/update-person-by-id';
import { badRequest } from './../../helpers/http-helper';
import { HttpRequest, HttpResponse } from './../../protocols/http';
import { Validation } from './../../protocols/validation';
import { Controller } from './../../protocols/controller';

export class UpdatePersonByIdController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly updatePersonById: UpdatePersonById
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.body)
    if (error) {
      return badRequest(error)
    }
    const { id, nome, dataNascimento, paisNascimento, estadoNascimento, cidadeNascimento, email, nomePai, nomeMae } = httpRequest.body
    await this.updatePersonById.update({
      id, 
      nome, 
      dataNascimento, 
      paisNascimento, 
      estadoNascimento, 
      cidadeNascimento, 
      email, 
      nomePai, 
      nomeMae
    })
    return null
  }
}