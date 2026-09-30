const user ={
    nome: 'Luiz',
    email: 'l@l.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true, //por padrao


    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
};

//user.exibirInfos()

const exibir = function(){
    console.log(this.nome, this.email);
};

const exibirUser = exibir.bind(user);
exibirUser()