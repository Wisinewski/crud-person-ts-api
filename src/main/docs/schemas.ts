import { addPersonParamsSchema, personSchema, errorSchema, deletePersonByIdParamsSchema } from './schemas/index';

export default {
  person: personSchema,
  addPersonParams: addPersonParamsSchema,
  deletePersonByIdParams: deletePersonByIdParamsSchema,
  error: errorSchema
}