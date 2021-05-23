# Carregar uma pessoa pelo CPF

> ## Caso de sucesso

1. Recebe uma requisição do tipo **GET** na rota **/api/persons/{cpf}**
2. Retorna **200** com os dados da pessoa

> ## Exceções

1. Retorna erro **404** se a API não existir
2. Retorna erro **400** se o campo CPF for um CPF inválido
3. Retorna erro **403** se não encontrar uma pessoa com o CPF fornecido
4. Retorna erro **500** se der erro ao tentar retornar os dados da pessoa