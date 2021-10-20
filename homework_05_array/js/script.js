// 1. На вход поступает массив, вывести массив, удалив неуникальные значения.

const firstArr = [1, 'str', 'str', 2, 3, 3, 3, 4, 5, 5, 6];
const uniqueArr = Array.from(new Set(firstArr));
console.log(uniqueArr);

// 2. На вход поступает массив, реверсировать значения (подобно методу reverse) метод reverse не использовать.

const newArr = [1, 2, 3, 4, 5, 'string'];
const reverseArr = newArr.map(newArr.pop, [...newArr]);
console.log(reverseArr);

// 3. На вход поступает массив, содержащий массивы, в которых хранится два элемента. Преобразовать массив в объект, где ключами являются нулевой индекс вложенныхых массивов, а значениями являются элементы с индексом один.

const entryArr = [
   ['name', 'Alex'],
   ['last name', 'Britov'],
   ['sex', 'Male']
];

const entryArrToObj = Object.fromEntries(entryArr);

Object.entries(entryArrToObj).forEach(([key, value]) =>
   console.log(key, value)
);

// 4. На вход поступает объект, вывести сумму числовых свойств объекта.

const numObj = {
   first: 10,
   second: 20,
   third: 30,
   four: 'str',
   five: '40'
};

let summa = 0;
for (let key in numObj) {
   if (typeof numObj[key] == 'number') {
      summa += numObj[key];
   }
}
console.log(summa);

// 5. На вход поступает массив с числами, вывести среднее арифметическое элементов массива.

const startArr = [1, 2, 3, 7, 6, 7, 8, 9];
const summArr = startArr.reduce((accum, elem) => accum + elem, 0);
const result = summArr / startArr.length;
console.log(result);

// 6. Создать функцию-конструктор для объекта "калькулятор", объект должен иметь поле, хранящее текущее значение и методы сложения, вычитания, умножения и деления, принимающие число и манипулирующий свойством значения в соответствии с назначением метода, а так же функцию, сбрасывающую значение в ноль.

function Calculator() {
   this.read = function () {
      this.firstNum = +prompt('Первое число');
      this.secondNum = +prompt('Второе число');
   };

   this.plus = function () {
      return this.firstNum + this.secondNum;
   };

   this.multy = function () {
      return this.firstNum * this.secondNum;
   };

   this.mines = function () {
      return this.firstNum - this.secondNum;
   };

   this.half = function () {
      return this.firstNum / this.secondNum;
   };

   this.reset = function () {
      calculator = {};
   };
}

let calculator = new Calculator();
calculator.read();

alert(`Сложение: ${calculator.firstNum} + ${calculator.secondNum} = ${calculator.plus()}`);
alert(`Вычитание: ${calculator.firstNum} - ${calculator.secondNum} = ${calculator.mines()}`);
alert(`Умножение: ${calculator.firstNum} * ${calculator.secondNum} = ${calculator.multy()}`);
alert(`Деление: ${calculator.firstNum} * ${calculator.secondNum} = ${calculator.half()}`);
alert(`Сброс: ${calculator.reset()}`);

// 7. Функция принимает смешанный массив (содержащий значения чисел, строк и объектов), вернуть объект с полями numbers, strings и objects, содержащими массив со значениями, соответствующими названию поля.

let mixArr = [1, 2, 'string', 'word', { id: 2 }, 3, 5];

let numArray = mixArr.filter(item => {
   return typeof (item) == 'string';
});
let sringArray = mixArr.filter(item => {
   return typeof (item) == 'number';
});

let objArray = mixArr.filter(item => {
   return typeof (item) == "object";
});


const finalMixArr = [];
finalMixArr.push(numArray, sringArray, objArray);

console.log(finalMixArr);

const mixObj = Object.fromEntries(finalMixArr);
Object.keys(mixObj).forEach(key => console.log(`${key}, ${mixObj[key]}`));

// ? Пока ни как не получается доделать

// 8. Функция принимает массив чисел и два числовых значения, вернуть новый массив, содержащий элементы первого массива, значение которых попадает под диапазон переданных в функцию чисел (второе переданное число может быть больше первого)

function filtered(staticArr, prev, next) {
   return staticArr.filter(item => (item >= prev && item <= next));
}

const staticArr = [2, 4, 3, 7, 8, 10];

const filteredArr = filtered(staticArr, 2, 7);

console.log(`Задание №8 ${filteredArr}`);



// 9. Функция принимает две строки. Вывести true, если строки являются анаграммами, в противном случае false

const anagramOne = prompt('Первая строка');
const anagramTwo = prompt('Вторая строка');

let angArr = [];
angArr.push(anagramOne, anagramTwo);

function compare(angArr) {
   let set = new Set();

   for (let word of angArr) {
      let sort = word.toLowerCase().split("").sort().join("");
      set.add(sort, word);
   }
   return Array.from(set.values());
}
let angResult = (compare(angArr));

let message = angResult.length < 2 ? true : false;
alert(message);

// 10. Создать объект, выводящий в консоль все ключи и значения объекта в формате "ключ: значение" через запятую (считать, что значением ключа объекта не может быть объектом или массивом, содержащими объекты) сама функция в консоль выводиться не должна.

const objectNew = {
   name: 'Alex',
   email: 'alex@mail.ru',
   age: 23,
   parents: {
      mother: 'Olga',
      father: 'Vasya'
   }
};

Object.keys(objectNew).forEach(key => console.log(`${key}: ${objectNew[key]},`));

// 11. Создать функцию-конструктор для объекта, содержащего методы serProp (установить значение свойства), метод принимает ключь (строка), значение (произвольное) и объект со свойствами writable, configurable, enumerable (разрешение перезаписи свойства, разрешение перечисления свойства и разрешение удаления свойства). Если какое-то из свойств в объекте отсутствует, действие должно быть разрешено.

function User(name, login, address) {
   this.name = name;
   this.login = login;
   this.address = address;
   Object.defineProperties(this, {
      name: {
         writable: true,
         enumerable: true,
         configurable: true
      },
      login: {
         writable: true,
         enumerable: true,
         configurable: true
      },
      address: {
         writable: true,
         enumerable: true,
         configurable: true
      }
   });
}

const userOne = new User('Alex', 'alex23', 'Moscow');

console.log(userOne);

// ------------------------------------------------------------
