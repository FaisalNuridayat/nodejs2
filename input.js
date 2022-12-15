// validator.js
let Validator = require('validatorjs');

let data = {
	name: 'John',
	email: 'johndoe@gmail.com',
	age: 19
};

let rules = {
	name: 'required',
	email: 'required|email',
	age: 'min:18'
};

let validation = new Validator(data, rules);

console.log("status : ", validation.passes())
console.log("Error on: ", validation.errors.all())
