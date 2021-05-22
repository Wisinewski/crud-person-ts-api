module.exports = {
  async up(db, client) {
    await db.collection('persons').insertMany([{
      nome: 'Eloá Emily Almeida',
      cpf: '56726002041',
      dataNascimento: '06/03/1952',
      paisNascimento: 'Brasil',
      estadoNascimento: 'MG',
      cidadeNascimento: 'Varginha',
      email: 'eloaemilyalmeida-87@diebold.com',
      nomePai: 'Theo Thales Almeida',
      nomeMae: 'Giovana Louise'
    }, {
      nome: 'Fabiana Benedita Rodrigues',
      cpf: '63887857607',
      dataNascimento: '19/01/1977',
      paisNascimento: 'Brasil',
      estadoNascimento: 'TO',
      cidadeNascimento: 'Gurupi',
      email: 'fabianabeneditarodrigues-83@igi.com.br',
      nomePai: 'Augusto Thiago Rodrigues',
      nomeMae: 'Raquel Isabelly'
    }, {
      nome: 'Beatriz Vitória da Cunha',
      cpf: '50884906663',
      dataNascimento: '10/07/1970',
      paisNascimento: 'Brasil',
      estadoNascimento: 'AP',
      cidadeNascimento: 'Macapá',
      email: 'beatrizvitoriadacunha_@bluespropaganda.com',
      nomePai: 'Ian Vicente Daniel da Cunha',
      nomeMae: 'Laura Lara'
    }, {
      nome: 'Vicente Felipe Anthony Rodrigues',
      cpf: '07104373667',
      dataNascimento: '19/10/1982',
      paisNascimento: 'Brasil',
      estadoNascimento: 'SP',
      cidadeNascimento: 'São Paulo',
      email: 'vicentefelipeanthonyrodrigues-74@orbisat.com.br',
      nomePai: 'Bernardo Benício Igor Rodrigues',
      nomeMae: 'Antonella Stefany'
    }, {
      nome: 'Aurora Cristiane Clara dos Santos',
      cpf: '38938277224',
      dataNascimento: '25/03/2003',
      paisNascimento: 'Brasil',
      estadoNascimento: 'ES',
      cidadeNascimento: 'Cariacica',
      email: 'auroracristianeclaradossantos__auroracristianeclaradossantos@yahho.com.br',
      nomePai: 'Gustavo André Benedito dos Santos',
      nomeMae: 'Priscila Laura Eloá'
    }, {
      nome: 'Cecília Luzia Assunção',
      cpf: '04612574591',
      dataNascimento: '18/03/1977',
      paisNascimento: 'Brasil',
      estadoNascimento: 'RN',
      cidadeNascimento: 'Natal',
      email: 'ccecilialuziaassuncao@negocios-de-valor.com',
      nomePai: 'Raimundo Henrique Paulo Assunção',
      nomeMae: 'Mariah Eliane'
    }, {
      nome: 'Teresinha Juliana Adriana Farias',
      cpf: '78892252291',
      dataNascimento: '14/06/1952',
      paisNascimento: 'Brasil',
      estadoNascimento: 'SP',
      cidadeNascimento: 'Piracicaba',
      email: 'tteresinhajulianaadrianafarias@vectrausinagem.com.br',
      nomePai: 'Luís Emanuel Farias',
      nomeMae: 'Elza Hadassa Luzia'
    }, {
      nome: 'Carlos Bernardo Peixoto',
      cpf: '36678191021',
      dataNascimento: '09/09/1983',
      paisNascimento: 'Brasil',
      estadoNascimento: 'TO',
      cidadeNascimento: 'Araguaína',
      email: 'ccarlosbernardopeixoto@isometro.com.br',
      nomePai: 'Calebe Tomás Nicolas Peixoto',
      nomeMae: 'Laura Gabriela Mariane'
    }, {
      nome: 'Elias Nelson Alves',
      cpf: '46462367377',
      dataNascimento: '09/01/1961',
      paisNascimento: 'Brasil',
      estadoNascimento: 'ES',
      cidadeNascimento: 'Vila Velha',
      email: 'eliasnelsonalves-75@ppconsulting.com.br',
      nomePai: 'Kaique Bernardo Alves',
      nomeMae: 'Lúcia Isabelle'
    }, {
      nome: 'Daniela Joana da Mata',
      cpf: '88152602779',
      dataNascimento: '23/08/1982',
      paisNascimento: 'Brasil',
      estadoNascimento: 'PA',
      cidadeNascimento: 'Belém',
      email: 'ddanielajoanadamata@unimedsjc.com.br',
      nomePai: 'Kaique Samuel da Mata',
      nomeMae: 'Renata Agatha Aurora'
    }]);
  },

  async down(db, client) {
    await db.collection('persons').deleteMany({})
  }
};
