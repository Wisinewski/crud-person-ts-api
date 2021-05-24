export const personPath = {
  post: {
    tags: ['Pessoa'],
    summary: 'API para criar uma pessoa',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/addPersonParams'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/person'
            }
          }
        }
      },
      400: {
        $ref: '#/components/badRequest'
      },
      403: {
        $ref: '#/components/forbidden'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  },

  delete: {
    tags: ['Pessoa'],
    summary: 'API para remover uma pessoa pelo ID',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/deletePersonByIdParams'
          }
        }
      }
    },
    responses: {
      204: {
        $ref: '#/components/noContent'
      },
      400: {
        $ref: '#/components/badRequest'
      },
      403: {
        $ref: '#/components/forbidden'
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