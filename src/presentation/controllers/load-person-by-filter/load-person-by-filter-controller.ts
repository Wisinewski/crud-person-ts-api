import { serverError, noContent } from './../../helpers/http-helper';
import { LoadPersonByFilter } from './../../../domain/usecases/load-person-by-filter';
import { HttpRequest, HttpResponse } from './../../protocols/http';
import { Controller } from './../../protocols/controller';

export class LoadPersonByFilterController implements Controller {
  constructor (
    private readonly loadPersonByFilter: LoadPersonByFilter
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const persons = await this.loadPersonByFilter.load(httpRequest.query)
      if (persons.length === 0) {
        return noContent()
      }
      return null
    } catch (error) {
      return serverError(error)
    }
  }
}