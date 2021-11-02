// !--- Наследование --- //
// const persone = {
// 	name: 'Andrea',
// 	sayHi() {
// 		console.log(`Hi, my name is ${this.name}`);
// 	},
// 	sayBye() {
// 		console.log(`Всего доброго`);
// 	}
// };

// function Teacher(subject) {
// 	this.subject = this.subject;
// }

// !Наследование прототипа в конструкторе
// Teacher.prototype = {
// 	...persone,
// 	constructor: Teacher
// };

// const teacher = new Teacher();
// teacher.sayHi();

// ------------------------------------

//!Наследование из функции конструктора
// function Persone(name) {
// 	this.name = name;
// 	this.sayHi = function () {
// 		console.log(`Hi, my name is ${this.name}`);
// 	},
// 		this.sayBye = function () {
// 			console.log(`Всего доброго`);
// 		}
// }

// function Teacher(name, subject, value) {
// ! От чего наследуем
// Persone.call(this, name);

//! Также наследуем из другой функции конструктора
// 	Other.call(this, value);
// 	this.subject = subject;
// }

// ! Еще одна функция консруктор 
// function Other(value) {
// 	this.otherField = value;
// }

// const persone = new Persone('Persona');
// const teacher = new Teacher('Teachname', 'JS', 'someValue');

// console.log(teacher);
// --------------------------------------

// const teacher = {
// 	__proto__: persone,
// 	name: 'Oleg',
// 	subject: 'JS',
// 	sayBye() {
// 		teacher.__proto__.sayBye(); // Перенимает значение свойства у родителя
// 		console.log(`С вами приятно иметь дело`); // Дополняем своим значением
// 	}
// };

// const director = {
// 	// __proto__: teacher,
// 	organization: 'University',
// 	name: 'Boss'
// };
// ! 2й способ наследование (тоже что и __proto__: teacher)
// Object.setPrototypeOf(director, teacher);

// !Перебираем ключи объекта включая proto
// for (let key in director) { 
// 	console.log(key);
// }

// ! Получить свойства объекта прототипа с которого наследуется 
// console.log(Object.getPrototypeOf(director));

// Установить значение по умолчанию
// Object.defineProperty(director, 'unenumerable', {
// 	unenumerable: false
// });

// console.log(Object.getOwnPropertyNames(director));

// director.sayHi();


// ! --- Классы --- //

class Person {
	constructor(name = 'Default name') { // Можно назначить имя по умолчанию
		this.name = name;
	}
	sayHi() {
		console.log(`Hi, my name is ${this._name}`);
	}

	// ! Геттеры и сеттеры
	get name() {
		console.log('Кто то меняет имя');
		return this._name;
	}

	set name(name) {
		this._name = name;
		console.log(`Change name ${this._name}`);
	}
	sayBay() {
		console.log('Say See you');
	}
}

// ! --- Наследование классов ---
class Teacher extends Person {

	static countOfTeachers = 0;

	constructor(name, subject) {
		super(name);
		this.subject = subject;

		Teacher.countOfTeachers++
	}

	sayBay() {
		super.sayBay(); // Вызываем метод родителя
		console.log('Say Bay'); // модифицируем его
	}

	// ! Статический метод
	static sayGo() {
		console.log('Go!');
	}
}

// const teacher = new Teacher('Andrea', 'JS');
// const teacher2 = new Teacher('Andrea', 'JS');
// const teacher3 = new Teacher('Andrea', 'JS');
// console.log(teacher);
// teacher.sayHi();
// teacher.sayBay();
// Teacher.sayGo(); // !Вызываем статический метод с большой буквы

// console.log(Teacher.countOfTeachers);

// ! --- Расширение классов ---
class PseudoArray extends Array {
	getSum() {
		return this.reduce((acc, val) => acc + val, 0);
	}
}

// создаем экземпляр класса в виде массива
const arr = new PseudoArray();


// Можем применять методы как для массивов
arr.push(1);
arr.push(2);

// arr.forEach(elem => console.log(elem));

console.log(arr.getSum());




