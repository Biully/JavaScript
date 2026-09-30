import User from "./User.js";

export default class Admin extends User{
    constructor(nome, email, nascimento, role = "admin", ativo = "true"){
        super(nome, email, nascimento, role, ativo);
    };

    // exibirInfos(){
    //     const infos = super.exibirInfos()
    //     return `admin - ${infos}`
    // };

    criarCurso(nomeCurso, qtdVagas){
        return `curso ${nomeCurso} criado com ${qtdVagas} vagas.`
    };
}

// const novoAdmin = new Admin("Bile", "b@b.com", "2026-02-02");

// console.log(novoAdmin);
// console.log(novoAdmin.criarCurso('JavaScript', 20));