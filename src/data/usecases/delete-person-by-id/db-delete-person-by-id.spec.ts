import { throwError } from './../../../domain/test/test-helper';
import { DeletePersonByIdRepositorySpy } from './../../test/mock-db-person';
import { DbDeletePersonById } from './db-delete-person-by-id';

type SutTypes = {
  sut: DbDeletePersonById
  deletePersonByIdRepositorySpy: DeletePersonByIdRepositorySpy
}

const makeSut = (): SutTypes => {
  const deletePersonByIdRepositorySpy = new DeletePersonByIdRepositorySpy()
  const sut = new DbDeletePersonById(deletePersonByIdRepositorySpy)
  return {
    sut,
    deletePersonByIdRepositorySpy
  }
}

describe('DbDeletePersonById', () => {
  test('should call DeletePersonByIdRepository with correct value', async () => {
    const { sut, deletePersonByIdRepositorySpy } = makeSut()
    const id = 'any_id'
    await sut.delete(id)
    expect(deletePersonByIdRepositorySpy.id).toBe(id)
  });

  test('should throw if DeletePersonByIdRepository throws', async () => {
    const { sut, deletePersonByIdRepositorySpy } = makeSut()
    jest.spyOn(deletePersonByIdRepositorySpy, 'deleteById').mockImplementationOnce(throwError)
    const promise = sut.delete('any_id')
    expect(promise).rejects.toThrow()
  });
});