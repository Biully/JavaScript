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

const admin = {
    nome: 'Bile',
    email: 'b@b.com',
    nascimento: '2001-02-02',
    role: 'admin',
    ativo: true, //por padrao

    criarCurso: function(){
        console.log('curso criado');
    }
};

Object.setPrototypeOf(admin, user);

admin.criarCurso();
admin.exibirInfos();