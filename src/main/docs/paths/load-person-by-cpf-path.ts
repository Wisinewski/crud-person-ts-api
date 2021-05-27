export const loadPersonByCpfPath = {
  get: {
    tags: ['Pessoa'],
    summary: 'API para consultar os dados de uma pessoa pelo CPF',
    parameters: [{
      in: 'path',
      name: 'cpf',
      required: true,
      schema: {
        type: 'string'
      }
    }],
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              name: 'id',
              required: true,
              $ref: '#/schemas/person'
            }
          }
        }
      },
      400: {
        $ref: '#/components/badRequest'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}