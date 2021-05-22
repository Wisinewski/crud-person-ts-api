import { addPersonParamsSchema, personSchema, errorSchema } from './schemas/index';

export default {
  person: personSchema,
  addPersonParams: addPersonParamsSchema,
  error: errorSchema
}