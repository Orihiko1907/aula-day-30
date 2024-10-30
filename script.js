//var, let e const = variavel
//variavel serve para armazenar info
//uma 
//isso aqui é uma variavel em uma variavel normal nos só podemos gaurdar um dado/info
let nome = "Carol";
//string é uma tipo de dado textual
console.log(nome);

//array [] colchete
//erray é uma variavel especial onde nos vamos conseguir armazenar mais de um dado
//array é como se fosse uma lista de variações

let compras = [ 
    "celular",
    "perifericos",
    "placa de video",
    "placa mãe",
    "gabinete",
    "cooler",
    "suporte para o notebook".
];

//no array temos uma indice, vai inciar do número do número zero e ir andando
console.log(compras)//mostra toda lista coloca toda a lista no console

//comsole.log(compras)[5]//perfumes

// não precisa colocar "" porque o numero é do tipo number
let numeros = [1, 2, 3, 4, 5]
console.log(numeros);

//metodos de array são uma forma de manipular esses dados existem divesos metdos por exemplo se eu quiser adicionar info

//adicionado números 6
numeros.push(6)
// o push adiciona/empurra o numero 6 dentro da variavel numeros "no final da array"

//adicionando um número 0 no incio
numeros.unshift(0)
//coloca um numero 0 no inicio de tudo em seu prefici primordio no comceço hahahhahahahhahhehhehehehheheehhehehhehhahahhahahahhahahah is ready is road jack common dont back no more no more no more no more

numeros.pop()
//ele vai remover o ultimo item do array por exemplo caso eu coloca sla um 5 ele mata elemina o mesmo 
console.log(numeros.join("_")) //isso serve para seperar os numeros por exemplo ("-") o traço no meio de tudo vai ser para dividio bonitinho com o mesmo