// 1. На вход поступает массив, вывести массив, удалив неуникальные значения.

// const firstArr = [1, 'str', 'str', 2, 3, 3, 3, 4, 5, 5, 6];
// const uniqueArr = Array.from(new Set(firstArr));
// console.log(uniqueArr);

// 2. На вход поступает массив, реверсировать значения (подобно методу reverse) метод reverse не использовать.

// const newArr = [1, 2, 3, 4, 5, 'string'];
// const reverseArr = newArr.map(newArr.pop, [...newArr]);
// console.log(reverseArr);

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
   third: 30
};

const numObjToArray = Object.values(numObj);
const sumNumbers = numObjToArray.reduce((accum, elem) => accum + elem, 0);
console.log(sumNumbers);

// 5. На вход поступает массив с числами, вывести среднее арифметическое элементов массива.

const startArr = [1, 2, 3, 7, 6, 7, 8, 9];
const summArr = startArr.reduce((accum, elem) => accum + elem, 0);
const result = summArr / startArr.length;
console.log(result);

// 6. Создать функцию-конструктор для объекта "калькулятор", объект должен иметь поле, хранящее текущее значение и методы сложения, вычитания, умножения и деления, принимающие число и манипулирующий свойством значения в соответствии с назначением метода, а так же функцию, сбрасывающую значение в ноль.

function Calculator(val) {
   this.val = val;
   this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b
   };
}