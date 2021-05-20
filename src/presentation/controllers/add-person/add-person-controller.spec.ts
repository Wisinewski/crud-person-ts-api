import { ServerError } from './../../errors/server-error';
import { serverError } from './../../helpers/http-helper';
import { throwError } from './../../../domain/test/test-helper';
import { AddPersonSpy } from './../../test/mock-person';
import { AddPersonController } from './add-person-controller';
import { HttpRequest } from './../../protocols/http';
import { mockAddPersonParams } from './../../../domain/test/mock-person';

const mockRequest = (): HttpRequest => ({
  body: mockAddPersonParams()
})

type SutTypes = {
  sut: AddPersonController
  addPersonSpy: AddPersonSpy
}

const makeSut = (): SutTypes => {
  const addPersonSpy = new AddPersonSpy()
  const sut = new AddPersonController(addPersonSpy)
  return {
    sut,
    addPersonSpy
  }
}

describe('AddPersonController', () => {
  test('should return 500 if AddPerson throws', async () => {
    const { sut, addPersonSpy } = makeSut()
    jest.spyOn(addPersonSpy, 'add').mockImplementationOnce(throwError)
    const httpRequest = mockRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(serverError(new ServerError(null)))
  });
});