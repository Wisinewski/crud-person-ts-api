import { EmailValidator } from './../protocols/email-validator';

export class EmailValidatorSpy implements EmailValidator {
  result: boolean = true
  isValid (email: string): boolean {
    return this.result
  }
}