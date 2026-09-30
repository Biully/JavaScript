import User from "./User.js";

export default class Docente extends User{
    constructor(nome, email, nascimento, role = "docente", ativo = "true"){
        super(nome, email, nascimento, role, ativo);
    };

    aprovarEstudante(estudante, curso){
        return `estudante ${estudante} passou no curso de ${curso}, responsável ${this.nome}.`
    };
}

// const novaDocente = new Docente("Guilherme", "g@g.com", "2000-04-05");
// console.log(novaDocente.aprovarEstudante("Bile", "Js"));