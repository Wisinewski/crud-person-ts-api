import { updatePersonByIdParamsSchema } from './schemas/update-person-params-schema';
import { addPersonParamsSchema, personSchema, errorSchema, deletePersonByIdParamsSchema } from './schemas/index';

export default {
  person: personSchema,
  addPersonParams: addPersonParamsSchema,
  deletePersonByIdParams: deletePersonByIdParamsSchema,
  updatePersonByIdParams: updatePersonByIdParamsSchema,
  error: errorSchema
}