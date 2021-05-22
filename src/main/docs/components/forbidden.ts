export const forbidden = {
  description: 'Operação proibida',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error'
      }
    }
  }
}