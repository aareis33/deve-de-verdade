const pessoa = {
    nome: 'João',
    idade: 30,
    profissao: 'Desenvolvedor',
    hobbies: ['futebol', 'leitura', 'viagens'],
    endereco: {
        rua: 'Rua das Flores',
        numero: 123,
        cidade: 'Rio de Janeiro'    
    },
    apresentar: function() {
        console.log(this.nome, this.idade, this.profissao);
    }
};

pessoa.apresentar(); // João 30 Desenvolvedor