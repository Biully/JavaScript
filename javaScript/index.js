import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Bile", "b@b.com", "0000-00-00");
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin("Luiz", "l@l.com", "2001-06-23");
console.log(novoAdmin.exibirInfos());

const novoDocente = new Docente("Guilherme", "g@g.com", "2007-08-13");
console.log(novoDocente.exibirInfos());

const dadosFicticios = User.exibirInfosGenericas('Cassio', 'c@c.com')
console.log(dadosFicticios);