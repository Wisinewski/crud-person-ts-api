import { MongoIdValidatorAdapter } from './mongo-id-validator-adapter';
import validator from 'validator'

jest.spyOn(validator, 'isMongoId').mockReturnValueOnce(true)

type SutTypes = {
  sut: MongoIdValidatorAdapter
}

const makeSut = (): SutTypes => {
  const sut = new MongoIdValidatorAdapter()
  return {
    sut
  }
}

describe('MongoIdValidatorAdapter', () => {
  test('should call validator with correct value', () => {
    const { sut } = makeSut()
    const isEmailSpy = jest.spyOn(validator, 'isMongoId')
    sut.isValid('any_value')
    expect(isEmailSpy).toHaveBeenCalledWith('any_value')
  });
});