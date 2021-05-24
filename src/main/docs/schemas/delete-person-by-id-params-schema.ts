export const deletePersonByIdParamsSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    }
  },
  required: ['id']
}