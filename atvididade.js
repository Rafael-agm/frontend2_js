// Criando um array com 5 nomes
let nomes = ['João', 'Maria', 'Pedro', 'Ana', 'Carlos'];

// Exibindo o terceiro nome no console
console.log(nomes[2]);  // Saída: Pedro

// Adicionando um nome ao final e um no início do array
nomes.push('Fernanda');  // Adicionando 'Fernanda' no final
nomes.unshift('Lucas');  // Adicionando 'Lucas' no início

// Exibindo o array após as alterações
console.log(nomes);  // Saída: ['Lucas', 'João', 'Maria', 'Pedro', 'Ana', 'Carlos', 'Fernanda']

// Removendo o último nome e exibindo o array atualizado
nomes.pop();
console.log(nomes);  // Saída: ['Lucas', 'João', 'Maria', 'Pedro', 'Ana', 'Carlos']

// Usando map() para criar um novo array dobrando os valores de [2, 4, 6, 8]
let numeros = [2, 4, 6, 8];
let dobrados = numeros.map(num => num * 2);
console.log(dobrados);  // Saída: [4, 8, 12, 16]

// Usando filter() para criar um novo array apenas com números maiores que 5 em [1, 3, 5, 7, 9]
let numerosFiltro = [1, 3, 5, 7, 9];
let maioresQueCinco = numerosFiltro.filter(num => num > 5);
console.log(maioresQueCinco);  // Saída: [7, 9]



