import { mockAddPersonParams } from './../../domain/test/mock-person';
import request from 'supertest';
import { MongoHelper } from './../../infra/db/mongodb/helpers/mongo-helper';
import { Collection } from 'mongodb';
import app from '../config/app';

let personCollection: Collection

describe('Survey Routes', () => {
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

  describe('POST /persons', () => {
    test('should return 400 on add person without a required field', async () => {
      await request(app)
        .post('/api/persons')
        .send({
          cpf: '71821165020',
          dataNascimento: '2021-01-01',
          paisNascimento: 'any_paisNascimento',
          estadoNascimento: 'any_estadoNascimento',
          cidadeNascimento: 'any_cidadeNascimento',
          email: 'any_email@email.com',
          nomePai: 'any_nomePai',
          nomeMae: 'any_nomeMae'
        })
        .expect(400)
    })

    test('should return 409 on add an existing person', async () => {
      await personCollection.insertOne({
        nome: 'any_nome',
        cpf: '71821165020',
        dataNascimento: '2021-01-01',
        paisNascimento: 'any_paisNascimento',
        estadoNascimento: 'any_estadoNascimento',
        cidadeNascimento: 'any_cidadeNascimento',
        email: 'any_email@email.com',
        nomePai: 'any_nomePai',
        nomeMae: 'any_nomeMae'
      })
      await request(app)
        .post('/api/persons')
        .send({
          nome: 'any_nome',
          cpf: '71821165020',
          dataNascimento: '2021-01-01',
          paisNascimento: 'any_paisNascimento',
          estadoNascimento: 'any_estadoNascimento',
          cidadeNascimento: 'any_cidadeNascimento',
          email: 'any_email@email.com',
          nomePai: 'any_nomePai',
          nomeMae: 'any_nomeMae'
        })
        .expect(409)
    })

    test('should return 201 on success', async () => {
      await request(app)
        .post('/api/persons')
        .send({
          nome: 'any_nome',
          cpf: '71821165020',
          dataNascimento: '2021-01-01',
          paisNascimento: 'any_paisNascimento',
          estadoNascimento: 'any_estadoNascimento',
          cidadeNascimento: 'any_cidadeNascimento',
          email: 'any_email@email.com',
          nomePai: 'any_nomePai',
          nomeMae: 'any_nomeMae'
        })
        .expect(201)
    })
  })

  describe('GET /persons', () => {
    test('should return 200 on success', async () => {
      await personCollection.insertOne({
        nome: 'any_nome',
        cpf: '71821165020',
        dataNascimento: '2021-01-01',
        paisNascimento: 'any_paisNascimento',
        estadoNascimento: 'any_estadoNascimento',
        cidadeNascimento: 'any_cidadeNascimento',
        email: 'any_email@email.com',
        nomePai: 'any_nomePai',
        nomeMae: 'any_nomeMae'
      })
      await request(app)
        .get('/api/persons')
        .send({})
        .expect(200)
    });
  });
})