console.log(`Condicionais`);

const listasDeDistinos = new Array(
    `Salvador`,
    ` São Paulo`,
    ` Rio de Janeiro`
);

const idade = 17

const estaAcompanhada = true;

console.log(`Destinos possíveis: ${listasDeDistinos}`);

if(idade >= 18 || estaAcompanhada){

    listasDeDistinos.splice(1,1);
    console.log(`Destinos possíveis: ${listasDeDistinos}`);
}else{

        console.log(`Você não possui idade e näo está acompanhada.`);

     }



