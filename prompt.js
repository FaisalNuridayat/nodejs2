// input.js
const prompt = require('prompt');
let Validator = require('validatorjs');
let bcrypt = require("bcrypt")

prompt.start();

prompt.get(['username', 'email','password'], function (err, result) {
	if (err) {
    	console.log(err);
    	return 1;
	}

    // let password = bcrypt.hash(result.password. salt)
    let salt = bcrypt.genSaltSync(10);
    let password = bcrypt.hashSync(result.password, salt)

	console.log('Command-line input received:');
	console.log('  Username: ' + result.username);
	console.log('  Email: ' + result.email);
    console.log(' password: ' + result.password, password)
    

	let data = result
	let rules = {
    	username: 'required',
    	email: 'required|email',
        password: 'required|min:4|max:10'
	};

	let validation = new Validator(data,rules);

	console.log("status: ",validation.passes())
	console.log("Error on: ", validation.errors.all())      
});
