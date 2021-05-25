import { makeUpdatePersonByIdController } from './../factories/controllers/update-person-by-id/update-person-by-id-controller-factory';
import { makeLoadPersonByCpfController } from './../factories/controllers/load-person-by-cpf/load-person-by-cpf-controller-factory';
import { makeAddPersonController } from './../factories/controllers/add-person/add-person-controller-factory';
import { makeDeletePersonByIdController } from './../factories/controllers/delete-person-by-id/delete-person-by-id-controller-factory'
import { adaptRoute } from './../adapters/express-route-adapter';
import { Router } from "express";

export default (router: Router): void => {
  router.post('/persons', adaptRoute(makeAddPersonController()))
  router.delete('/persons', adaptRoute(makeDeletePersonByIdController()))
  router.put('/persons', adaptRoute(makeUpdatePersonByIdController()))
  router.get('/persons/:cpf', adaptRoute(makeLoadPersonByCpfController()))
}