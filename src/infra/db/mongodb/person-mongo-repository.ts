import { MongoHelper } from './helpers/mongo-helper';
import { PersonModel } from '../../../domain/models/person';
import { LoadPersonByCpfRepository } from '../../../data/protocols/db/load-person-by-cpf-repository';

export class PersonMongoRepository implements LoadPersonByCpfRepository {
  async loadByCpf (cpf: String): Promise<PersonModel> {
    const personCollection = await MongoHelper.getCollection('persons')
    const person = await personCollection.findOne({ cpf })
    return person && MongoHelper.map(person)
  }
}