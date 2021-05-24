# Deletar uma pessoa pelo ID

> ## Caso de sucesso

1. Recebe uma requisição do tipo **DELETE** na rota **/api/persons**
2. Retorna **204**

> ## Exceções

1. Retorna erro **404** se a API não existir
2. Retorna erro **400** se o campo CPF for um CPF inválido
3. Retorna erro **403** se não encontrar uma pessoa com o CPF fornecido
4. Retorna erro **500** se der erro ao tentar deletar a pessoa