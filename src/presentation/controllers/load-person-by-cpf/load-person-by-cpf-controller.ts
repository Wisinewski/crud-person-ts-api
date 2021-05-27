import { InvalidParamError } from './../../errors/invalid-param-error';
import { badRequest, serverError, ok, notFound } from './../../helpers/http-helper';
import { LoadPersonByCpf } from './../../../domain/usecases/load-person-by-cpf';
import { Validation } from './../../protocols/validation';
import { HttpRequest, HttpResponse } from './../../protocols/http';
import { Controller } from './../../protocols/controller';

export class LoadPersonByCpfController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly loadPersonByCpf: LoadPersonByCpf
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.params)
      if (error) {
        return badRequest(error)
      }
      const { cpf } = httpRequest.params
      const person = await this.loadPersonByCpf.load(cpf)
      return person ? ok(person) : notFound(new InvalidParamError('cpf'))
    } catch (error) {
      return serverError(error)
    }
  }
}