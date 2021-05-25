import { mockAddPersonParams } from './../../../domain/test/mock-person';
import { Collection, ObjectId } from 'mongodb';
import { MongoHelper } from './helpers/mongo-helper';
import { PersonMongoRepository } from './person-mongo-repository';

type SutTypes = {
  sut: PersonMongoRepository
}

const makeSut = (): SutTypes => {
  const sut = new PersonMongoRepository()
  return {
    sut
  }
}

let personCollection: Collection

describe('PersonMongoRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    personCollection = await MongoHelper.getCollection('persons')
    await personCollection.deleteMany({})
  })

  describe('loadByCpf', () => {
    test('should return a person on loadByCpf success', async () => {
      const { sut } = makeSut()
      const personParams = mockAddPersonParams()
      await personCollection.insertOne(personParams)
      const person = await sut.loadByCpf(personParams.cpf)
      expect(person).toBeTruthy()
      expect(person.id).toBeTruthy()
      expect(person.nome).toBe(personParams.nome)
      expect(person.email).toBe(personParams.email)
      expect(person.cpf).toBe(personParams.cpf)
      expect(person.dataNascimento).toBe(personParams.dataNascimento)
      expect(person.paisNascimento).toBe(personParams.paisNascimento)
      expect(person.estadoNascimento).toBe(personParams.estadoNascimento)
      expect(person.cidadeNascimento).toBe(personParams.cidadeNascimento)
      expect(person.nomeMae).toBe(personParams.nomeMae)
      expect(person.nomePai).toBe(personParams.nomePai)
    });

    test('should return null if loadByCpf fails', async () => {
      const { sut } = makeSut()
      const personParams = mockAddPersonParams()
      const person = await sut.loadByCpf(personParams.cpf)
      expect(person).toBeFalsy()
    });
  });

  describe('add', () => {
    test('should return a person on add success', async () => {
      const { sut } = makeSut()
      const personParams = mockAddPersonParams()
      const person = await sut.add(personParams)
      expect(person).toBeTruthy()
      expect(person.id).toBeTruthy()
      expect(person.nome).toBe(personParams.nome)
      expect(person.email).toBe(personParams.email)
      expect(person.cpf).toBe(personParams.cpf)
      expect(person.dataNascimento).toBe(personParams.dataNascimento)
      expect(person.paisNascimento).toBe(personParams.paisNascimento)
      expect(person.estadoNascimento).toBe(personParams.estadoNascimento)
      expect(person.cidadeNascimento).toBe(personParams.cidadeNascimento)
      expect(person.nomeMae).toBe(personParams.nomeMae)
      expect(person.nomePai).toBe(personParams.nomePai)
    });
  });

  describe('deleteById', () => {
    test('should not return a person on deleteById success', async () => {
      const { sut } = makeSut()
      const result = await personCollection.insertOne(mockAddPersonParams())
      const person = MongoHelper.map(result.ops[0])
      await sut.deleteById(person.id)
      const deletedPerson = await personCollection.findOne({ _id: new ObjectId(person.id) })
      expect(deletedPerson).toBe(null)
    });
  });

  describe('updateById', () => {
    test('should update a person on updateById success', async () => {
      const { sut } = makeSut()
      const personData = mockAddPersonParams()
      const result = await personCollection.insertOne(personData)
      const person = MongoHelper.map(result.ops[0])
      const email = 'other_email@email.com'
      person.email = email
      const updatedPerson = await sut.updateById(person)
      expect(updatedPerson).toBeTruthy()
      expect(updatedPerson.email).toBe(email)
    });
  });
});