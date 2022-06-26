//1 Crie um array que receba 5 itens e exiba no console.


//2 Utilize um método para adicionar um nome ao inicio do array.


//3 Utilize um método para remover o último nome do array.


//4 Utilize um método para adicionar dois nomes ao fim do array.


//5 Utilize um método para remover o primeiro nome do array.


//6 Utilize um método para organizar em ordem crescente o seguinte array:
// let numbers = [7,5,6,3,8,9,2,1,4]

//1
let doces = ["Pudim", "Pavê", "Chocolate quente", "Brownie", "Cookie"];
console.table(doces);
console.log("---------------------------------");

//2
doces.unshift("Sorvete");
console.table(doces);
console.log("---------------------------------");

//3
doces.pop(doces.length);
console.table(doces);
console.log("---------------------------------");

//4
doces.splice(doces.length, 0, "Gelatina", "Doce de leite");
console.table(doces);
console.log("---------------------------------");

//5
doces.shift(0);
console.table(doces);
console.log("---------------------------------");

//6
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
console.log(numbers.sort());

