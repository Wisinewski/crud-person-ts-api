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
});