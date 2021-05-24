import { AddPersonParams } from './../../../domain/usecases/add-person';
import { AddPersonRepository } from './../../../data/protocols/db/add-person-repository';
import { MongoHelper } from './helpers/mongo-helper';
import { PersonModel } from '../../../domain/models/person';
import { LoadPersonByCpfRepository } from '../../../data/protocols/db/load-person-by-cpf-repository';
import { DeletePersonByIdRepository } from '../../../data/protocols/db/delete-person-by-id-repository';
import { ObjectId } from 'bson';

export class PersonMongoRepository implements LoadPersonByCpfRepository, AddPersonRepository, DeletePersonByIdRepository {
  async loadByCpf (cpf: string): Promise<PersonModel> {
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

  async deleteById (id: string): Promise<boolean> {
    const personCollection = await MongoHelper.getCollection('persons')
    const response = await personCollection.deleteOne({ _id: new ObjectId(id) })
    return response.result.n === 1
  }
}