//1. Реализовать функцию, принимающую число (индекс в последовательности Фибоначчи), функция должна вернуть значение числа. Использовать рекурсию.

function fibNumber(n) {
	if (n <= 1) {
		return n;
	} else {
		return fibNumber(n - 1) + fibNumber(n - 2);
	}
}
console.log(fibNumber(7));

//2. Модернизировать написанную функцию, добавив кэширование (функция “”запоминает”” входной параметр и вычесленное значение, при следующем вызыве с этим же параметром, функция не вычисляет значение, а возвращает из памяти)

const getFact = (() => {
	const cash = {};
	return (a) => {
		if (cash[a]) {
			console.log('Значение взято из кэша');
			return cash[a];
		} else {
			console.log('Рассчитываю значения');
			//!---попытка запомнить значение ---
			let fact = 1;
			let fact2 = 1;
			for (let i = 1; i <= a; i++) {
				// fact *= i;
				let fact3 = fact + fact2;
				fact = fact2;
				fact2 = fact3;
				//? Как будет правильно?
			}
			console.log('Добавляю в кэш');
			cash[a] = fact2;
			return fact2;
		}
	}
})();

console.log(getFact(5));
console.log(getFact(50));
console.log(getFact(22));
console.log(getFact(10));
console.log(getFact(5));
console.log(getFact(22));
console.log(getFact(23));

//3. Разработать рекурсивную функцию, принимающую массив, содержащий массивы из двух элементов, в каждом из которых первый элемент является строкой, а второй строкой, числом, логическим значением, объектом, или таким же массивом. Функция должна преобразовать массив в объект.
//Пример входного значения:
const arrs = [
	['name', 'Anna'],
	['age', 22],
	['pets',
		[
			['dog', 'Faust'],
			['cat', 'Balthazar']
		]
	]
];

let convArrToObj = function (arr) {

	// Копируем значения в объект
	let elemObj = Object.assign({}, arr);

	// из массива в объект (работает только на верхнем уровне)
	elemObj = Object.fromEntries(arr);

	//? Как перебрать вложенные в объект массивы?  

	return elemObj;
};
console.log(convArrToObj(arrs));


// Пример возвращаемого объекта:
// {
// 	namee: “Anna”,
// 	age: 22,
// 	pets: {
// 		dog: “Faust”,
// 		cat: “Balthazar”
// 	}
// }
