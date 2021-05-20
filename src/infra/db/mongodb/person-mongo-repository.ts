import { AddPersonParams } from './../../../domain/usecases/add-person';
import { AddPersonRepository } from './../../../data/protocols/db/add-person-repository';
import { MongoHelper } from './helpers/mongo-helper';
import { PersonModel } from '../../../domain/models/person';
import { LoadPersonByCpfRepository } from '../../../data/protocols/db/load-person-by-cpf-repository';

export class PersonMongoRepository implements LoadPersonByCpfRepository, AddPersonRepository {
  async loadByCpf (cpf: String): Promise<PersonModel> {
    const personCollection = await MongoHelper.getCollection('persons')
    const person = await personCollection.findOne({ cpf })
    return person && MongoHelper.map(person)
  }

  async add (personData: AddPersonParams): Promise<PersonModel> {
    const personCollection = await MongoHelper.getCollection('persons')
    const result = await personCollection.insertOne(personData)
    const person = result.ops[0]
    return MongoHelper.map(person)
  }
}