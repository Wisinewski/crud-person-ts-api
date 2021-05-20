import { Validation } from './../../protocols/validation';
import { CpfInUseError } from './../../errors/cpf-in-use-error';
import { serverError, forbidden, ok } from './../../helpers/http-helper';
import { AddPerson } from './../../../domain/usecases/add-person';
import { HttpRequest, HttpResponse } from './../../protocols/http';
import { Controller } from './../../protocols/controller';

export class AddPersonController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addPerson: AddPerson
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      this.validation.validate(httpRequest.body)
      const { nome, cpf, dataNascimento, paisNascimento, estadoNascimento, cidadeNascimento, email, nomePai, nomeMae } = httpRequest.body
      const person = await this.addPerson.add({
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
      if (!person) {
        return forbidden(new CpfInUseError())
      }
      return ok(person)
    } catch (error) {
      return serverError(error)
    }
  }
}