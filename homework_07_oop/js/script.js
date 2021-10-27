// 1. Реализовать объект animal, с полем клички, методом eat, выводящим сообщение "/*кличка*/ ест" и методом say, выводящим фразу, "неизвестное животное молчит", путём прототипного наследования создать объекты кота, собаки и попугая. 
// 2. Переопределить в них метод say, в зависимости от типа животного. Для кота добавить новый метод hunt, выводящий сообщение "/*кличка*/ охотится". 
// 3. Все перечисленные методы и свойства должны быть защищены от удаления и перезаписи. Методы должны быть неперечисляемыми. 
// 4. Разработать метод rename, для смены клички животного. Новая кличка должна содержать только кирилические символы, пробелы или символ "-". 
// 5. Выполнить то же самое использую функции конструкторы. Выполнить то же самое, используя классы.

let animal = {
   name: 'Неизвестное животное',
   eat() {
      console.log(`${this.name} ест`);
   },

   Say() {
      console.log(`${this.name} молчит`);
   },

   set changeName(val) {
      this.name = val;
   },
   get changeName() {
      return `${this.name}`;
   },
};
animal.eat();
animal.Say();

// Кошка
let cat = {
   name: 'Кошка',
   hunt() {
      console.log(`${this.name} охотится`);
   },
   Say() {
      console.log(`${this.name} Мяукает`);
   },
   rename() {
      while (true) {
         let reName = prompt('Переименовать кошку');
         const newName = /[а-яА-я -]/ig;

         if (newName.test(reName)) {
            reName.match(newName).join('');
            cat.changeName = reName;
            alert(`Имя кошки ${reName}`);
            break;
         }
         alert('Неверное значение. Введите еще раз');
      }

   },
};
cat.__proto__ = animal;

cat.rename();
cat.eat();
cat.Say();
cat.hunt();


// Собака
let dog = {
   name: 'Собака',
   Say() {
      console.log(`${this.name} лает`);
   }
};

dog.__proto__ = animal;

dog.eat();
dog.Say();

// Попугай
let parrot = {
   name: 'Попугай',
   Say() {
      console.log(`${this.name} разговаривает`);
   }
};

parrot.__proto__ = animal;

parrot.eat();
parrot.Say();

// !--- Функции конструкторы ---

function Animals(name, pet, says) {
   this.name = name;
   this.pet = pet;
   this.says = says;

   this.eat = () => console.log(`${this.name} ест`);
   this.say = () => console.log(`${this.name} ${this.says}`);

   this.rename = function () {
      while (true) {
         let reName = prompt(`Переименовать ${this.name}`);
         const newName = /[а-яА-я -]/ig;

         if (newName.test(reName)) {
            reName.match(newName).join('');
            this.name = reName;
            alert(`Новое имя ${this.pet} ${reName}`);
            break;
         }
         alert('Неверное значение. Введите еще раз');
      }
   };
}

// Кошка
let catConstructor = new Animals('кошка', 'кошки', 'мяукает');
catConstructor.rename();
catConstructor.eat();
catConstructor.say();

// Собака
let dogConstructor = new Animals('собака', 'собаки', 'лает');
dogConstructor.rename();
dogConstructor.eat();
dogConstructor.say();

// Попугай
let parrotConstructor = new Animals('попугай', 'попугая', 'разговаривает');
parrotConstructor.rename();
parrotConstructor.eat();
parrotConstructor.say();

// !--- Классы ---

class Animal {
   constructor(name, pett) {
      this._name = name;
      this.pett = pett;
      this.saing = '';
   }

   get name() {
      return this._name;
   }

   eating() {
      console.log(`${this._name} ест`);
   }

   says(sound) {
      this.sound = sound;
      console.log(`${this._name} ${this.sound}`);
   }

   renames() {
      while (true) {
         let reName = prompt(`Переименовать ${this._name}`);
         const newName = /[а-яА-я -]/ig;

         if (newName.test(reName)) {
            reName.match(newName).join('');
            this._name = reName;
            alert(`Новое имя ${this.pett} ${reName}`);
            break;
         }
         alert('Неверное значение. Введите еще раз');
      }
   }
}

// Кошка
class Cat extends Animal {

}
let catty = new Cat('Кошка', 'Кошки');

catty.renames();
catty.eating();
catty.says('Мяукает');

// Собака
class Dog extends Animal {

}
let doggy = new Dog('Собака', 'Собаки');

doggy.renames();
doggy.eating();
doggy.says('Лает');
