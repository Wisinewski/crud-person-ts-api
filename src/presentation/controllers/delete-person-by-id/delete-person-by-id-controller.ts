import { DeletePersonById } from './../../../domain/usecases/delete-person-by-id';
import { badRequest, serverError } from './../../helpers/http-helper';
import { HttpRequest, HttpResponse } from './../../protocols/http';
import { Validation } from './../../protocols/validation';
import { Controller } from './../../protocols/controller';

export class DeletePersonByIdController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly deletePersonById: DeletePersonById
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = await this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { id } = httpRequest.body
      await this.deletePersonById.delete(id)
      return null
    } catch (error) {
      return serverError(error)
    }
  }
}