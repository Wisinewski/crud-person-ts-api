import { serverError } from './../../helpers/http-helper';
import { AddPerson } from './../../../domain/usecases/add-person';
import { HttpRequest, HttpResponse } from './../../protocols/http';
import { Controller } from './../../protocols/controller';

export class AddPersonController implements Controller {
  constructor (
    private readonly addPerson: AddPerson
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { nome, cpf, dataNascimento, paisNascimento, estadoNascimento, cidadeNascimento, email, nomePai, nomeMae } = httpRequest.body
      await this.addPerson.add({
        nome,
        cpf,
        dataNascimento,
        paisNascimento,
        estadoNascimento,
        cidadeNascimento,
        email,
        nomePai,
        nomeMae
      })
    } catch (error) {
      return serverError(error)
    }
  }
}