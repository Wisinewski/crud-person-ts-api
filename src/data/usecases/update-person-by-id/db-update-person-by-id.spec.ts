import { UpdatePersonByIdRepositorySpy } from './../../test/mock-db-person';
import { mockUpdatePersonParams } from './../../../domain/test/mock-person';
import { DbUpdatePersonById } from './db-update-person-by-id';

type SutTypes = {
  sut: DbUpdatePersonById
  updatePersonByIdRepositorySpy: UpdatePersonByIdRepositorySpy
}

const makeSut = (): SutTypes => {
  const updatePersonByIdRepositorySpy = new UpdatePersonByIdRepositorySpy()
  const sut = new DbUpdatePersonById(updatePersonByIdRepositorySpy)
  return {
    sut,
    updatePersonByIdRepositorySpy
  }
}

describe('DbUpdatePersonById', () => {
  test('should call UpdatePersonByIdRepository with correct values', async () => {
    const { sut, updatePersonByIdRepositorySpy } = makeSut()
    const personData = mockUpdatePersonParams()
    await sut.update(personData)
    expect(updatePersonByIdRepositorySpy.person).toEqual(personData)
  });
});