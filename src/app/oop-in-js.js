var animal = {
	eat: true
};

function Rabbit(name) {
	this.name = name;
};

Rabbit.prototype = animal; // The same as Rabbit.__proto__ = animal . Works only with new Rabbit() call.

var rabbit = new Rabbit('Bucks Bunny'); // Without operator 'new' Rabbit.prototype = animal will not work.
console.log(rabbit.eat);


// Способ, который позволяет избежать копирования объекта и не требует новых переменных. 
// При этом сохраняет оригинальные параметры объекта за пределами функции. 
function Menu(options) {
  options = Object.create(options);
  options.width = 300;

  console.log("width: " + options.width); // возьмёт width из наследника
  console.log("height: " + options.height); // возьмёт height из исходного объекта
};

var options = {
  width: 100,
  height: 200
};

var menu = new Menu(options);

console.log("original width: " + options.width); // width исходного объекта
console.log("original height: " + options.height); // height исходного объекта