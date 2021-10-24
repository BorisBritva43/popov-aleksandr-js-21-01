// ! ---------- Виды объявления функций ----------
// const rowFunction = function () {
// 	return 'string';
// };

// const rowFunction = () => {
// 	return 'some string';
// };

// !Тоже самое что и примеры выше только без return
// const rowFunction = () => 'srting more';

// console.log(rowFunction());
// ---------------------------

// !Если выводим объект
// const objFunc = () => {
// 	return { key: 'value' };
// };

// const objFunc = () => ({ key: 'value' });

// console.log(objFunc());

// ! -------- This -----------

// !this внутри объекта 
// function logThis() {
// 	console.log(this);
// }

// !со стрелочной функцией objRowFunc: () =>
// !Стрелочная функция берет контекст (this) из вне 

// const obj = {
// 	name: 'my-object',
// 	logThis: logThis,

// 	childObj: {
// 		name: 'childObj',
// 		logThis: function () {
// 			const doubleChildObj = {
// 				name: 'doubleChidObj',
// 				objRowFunc: () => console.log(this)
// 				// this вернет childObj
// 			};
// 			doubleChildObj.objRowFunc();
// 		}
// 	}
// };

// !this внутри объекта без стрелочной функцией objRowFunc() {
// const obj = {
// 	name: 'my-object',
// 	logThis: logThis,

// 	childObj: {
// 		name: 'childObj',
// 		logThis: function () {
// 			const doubleChildObj = {
// 				name: 'doubleChidObj',
// 				objRowFunc() {
// 					console.log(this)
// 				}
// 			}
// 			doubleChildObj.objRowFunc();
// 		}
// 	}
// };

// obj.logThis();
// obj.childObj.logThis();

// !Функции криэйторы - создание конструктора объектов
// function createUser(name, email) {
// 	return {
// 		name,
// 		email,
// 		// Метод для объекта пользователей
// 		logInfo() {
// 			// Выводим данные объекта
// 			console.log(`name: ${name}, email: ${email}`);
// 			// Выводим сам объект 
// 			console.log(this);
// 		}
// 	};
// }

// // Создаем пользователей
// const user1 = createUser('Alex', 'any@mail');
// const user2 = createUser('Ivan', 'any@mail.com');

// // Вызываем их методы
// user1.logInfo();
// user2.logInfo();

// !Создание конструктора объектов с помощью => функции
// const createUsers = (name, login) => ({ name, login });

// const userOne = createUsers('Oleg', 'oleg23');
// const userTwo = createUsers('Ivan', 'ivang25');

// console.log(userOne);
// console.log(userTwo);

// ! -------- Привязка this ----------------

// !Привязать контекст к функции методом apply
// function logThis() {
// 	console.log(this);
// }

// const user = {
// 	name: 'first User',
// };

// const admin = {
// 	name: 'superAdmin'
// };

// logThis.apply(user);
// logThis.apply(admin);

// !Привязать контекст к функции методом call
// function logThis(a, b, c) { // Можно передавать параметры
// 	console.log(this);
// 	console.log(`a: ${a}, b:${b}, c:${c}`);

// }

// const user = {
// 	name: 'first User',
// };

// const admin = {
// 	name: 'superAdmin'
// };

// logThis.call(user, 12, 20, 33);
// logThis.call(admin, ...[5, 6, 7]); // Деструктурируем массив

// !Привязать контекст к функции методом bind
// function logThis(a, b, c) { // Можно передавать параметры
// 	console.log(this);
// 	console.log(`a: ${a}, b:${b}, c:${c}`);
// 	return 'Функция отработала';

// }

// const user = {
// 	name: 'first User',
// };

// const admin = {
// 	name: 'superAdmin'
// };

// const resultUser = logThis.bind(user, 12, 20, 33);
// const resultAdmin = logThis.bind(admin, ...[5, 6, 7]);

// console.log(resultUser());
// console.log(resultAdmin());

// !Привязать контекст к arguments
// function logThis() {
// 	console.log(this);
// 	console.log(arguments[3]); // Выводим 4й аргумент - "новый параметр"
// 	console.log(`a: ${arguments[0]}, b:${arguments[1]}, c:${arguments[2]}`);
// 	return 'Функция отработала';

// }

// const user = {
// 	name: 'first User',
// };


// const resultUser = logThis.bind(user, 12, 20, 33);

// resultUser('новый параметр'); // Добавляем новый параметр

// !Привязать контекст к setTimeout при помощи bind
// function logThis() {
// 	console.log(this);
// }

// const user = {
// 	name: 'first User',
// 	logThis: logThis
// };

// user.logThis();
// setTimeout(user.logThis.bind(user), 1000);

// ! --------------- РЕКУРСИЯ (Функция вызывает сама себя n кол-во раз) ----------------

// function firstFunction() {
// 	console.log('Сначала превая функция');
// 	console.log('Затем внутри первой вызываем вторую');

// 	secondFunction();
// }

// function secondFunction() {
// 	console.log('Вызываем вторую функцию');
// }

// firstFunction();

// !Вызываем функцию 10 раз
// function paramCircle(i, j) {
// 	console.log(i);
// 	if (i < j) {
// 		paramCircle(++i, j);
// 	}
// }
// paramCircle(0, 10);

// !Возведение в степень
// function powFunction(num, pow) {
// 	if (pow !== 1) {
// 		return num * powFunction(num, pow - 1);
// 	} else {
// 		return num;
// 	}
// }
// console.log(powFunction(2, 3)); // 3 - в какую степень возводим

// !Сумма всех массивов в объекте
// const struct = {
// 	b: [1, 2, 3, 4, 5],
// 	o: {
// 		a: [1, 2, 4, 5],
// 		b: {
// 			a: [1, 2, 4, 5],
// 			b: [1, 2, 4, 5],
// 			c: [1, 2, 4, 5]
// 		},
// 		c: [1, 2, 4, 5],
// 	},
// 	a: [1, 2, 4, 5],
// };

// const summStruct = (struct) => {
// 	if (Array.isArray(struct)) { // проверяем на массивы в объекте
// 		return struct.reduce((acc, val) => acc + val, 0);

// 	} else {
// 		// Если внутри есть объекты получаем и складываем их значения
// 		return Object.values(struct).reduce((acc, val) => acc + summStruct(val), 0);
// 	}
// };
// console.log(summStruct(struct));

// !Рекурсивная структура
// const list = {};

// list.value = 1;
// list.next = { value: 2 };
// list.next.next = { value: 3 };

// console.log(list);

// ! ---------- ЗАМЫКАНИЯ --------------

// !Самовызывающаяся функция с подсчетом вызовов
// const counter = (() => {
// 	let count = 0;
// 	return function () {
// 		count++;
// 		console.log(`Вызвана ${count} раз`);
// 	};
// })(); // () - вызов функции
// counter();
// counter();
// counter();
// counter();

// !Рассчет факт
const getFact = (() => {
   const cash = {};
   return (a) => {
      if (cash[a]) {
         console.log('Значение взято из кэша');
         return cash[a];
      } else {
         console.log('Рассчитываю значения');
         let fact = 1;
         for (let i = 1; i <= a; i++) {
            fact *= i;
         }
         console.log('Добавляю в кэш');
         cash[a] = fact;
         return fact;
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

