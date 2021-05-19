import { AddPersonParams } from './../usecases/add-person';

export const mockAddPersonParams = (): AddPersonParams => ({
  nome: 'any_nome',
  cpf: 'any_cpf',
  dataNascimento: 'any_dataNascimento',
  paisNascimento: 'any_paisNascimento',
  estadoNascimento: 'any_estadoNascimento',
  cidadeNascimento: 'any_cidadeNascimento',
  email: 'any_emailNascimento',
  nomePai: 'any_nomePai',
  nomeMae: 'any_nomeMae'
})