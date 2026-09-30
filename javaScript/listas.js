console.log('Listas');

const listasDeDistinos = new Array(
    `Salvador`,
    ` São Paulo`,
    ` Rio de Janeiro`
);


listasDeDistinos.push(` Manaus`)

console.log(`Destinos possíveis: ${listasDeDistinos}`);

listasDeDistinos.splice(1,1);

console.log(`Destinos possíveis: ${listasDeDistinos}`);

console.log(`Destinos possíveis: ${listasDeDistinos[1]}`);
