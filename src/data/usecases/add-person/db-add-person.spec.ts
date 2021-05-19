import { mockAddPersonParams } from './../../../domain/test/mock-person';
import { AddPersonRepositorySpy } from './../../test/mock-db-person';
import DbAddPerson from "./db-add-person"

type SutTypes = {
  sut: DbAddPerson
  addPersonRepositorySpy: AddPersonRepositorySpy
}

const makeSut = (): SutTypes => {
  const addPersonRepositorySpy = new AddPersonRepositorySpy()
  const sut = new DbAddPerson(addPersonRepositorySpy)
  return {
    sut,
    addPersonRepositorySpy
  }
}

describe('DbAddPerson', () => {
  test('should call AddPersonRepository with correct value', async () => {
    const { sut, addPersonRepositorySpy } = makeSut()
    const personData = mockAddPersonParams()
    await sut.add(personData)
    expect(addPersonRepositorySpy.person).toEqual(personData)
  });
});