import { badRequest } from './../../helpers/http-helper';
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
    const error = this.validation.validate(httpRequest.params)
    if (error) {
      return badRequest(error)
    }
    return null
  }
}