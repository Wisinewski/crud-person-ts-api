import { CpfInUseError } from './../../errors/cpf-in-use-error';
import { ServerError } from './../../errors/server-error';
import { serverError, forbidden, ok } from './../../helpers/http-helper';
import { throwError } from './../../../domain/test/test-helper';
import { AddPersonSpy } from './../../test/mock-person';
import { AddPersonController } from './add-person-controller';
import { HttpRequest } from './../../protocols/http';
import { mockAddPersonParams, mockPersonModel } from './../../../domain/test/mock-person';

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

  test('should call AddPerson with correct values', async () => {
    const { sut, addPersonSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(addPersonSpy.person).toEqual(mockRequest().body)
  });

  test('should return 403 if AddPerson returns null', async () => {
    const { sut, addPersonSpy } = makeSut()
    addPersonSpy.result = null
    const httpRequest = mockRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(forbidden(new CpfInUseError()))
  });

  test('should return 200 if valid data is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = mockRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(ok(mockPersonModel()))
  });
});