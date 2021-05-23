import { makeLoadPersonByCpfController } from './../factories/controllers/load-person-by-cpf/load-person-by-cpf-controller-factory';
import { makeAddPersonController } from './../factories/controllers/add-person/add-person-controller-factory';
import { adaptRoute } from './../adapters/express-route-adapter';
import { Router } from "express";

export default (router: Router): void => {
  router.post('/persons', adaptRoute(makeAddPersonController()))
  router.get('/persons/:cpf', adaptRoute(makeLoadPersonByCpfController()))
}