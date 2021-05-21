import { CpfValidator } from './../protocols/cpf-validator';

export class CpfValidatorSpy implements CpfValidator {
  result: boolean = true
  isValid (cpf: string): boolean {
    return this.result
  }
}