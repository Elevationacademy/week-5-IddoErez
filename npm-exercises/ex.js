const validator = require('validator');
console.log(validator.isEmail("shoobert@dylan"))
console.log(validator.isMobilePhone("786-329-9958", "en-US"))
console.log(validator.blacklist("I'M SO EXCITED!!!~!", ["!", "?", ".", "@", "~", ",", "'"]))

const faker = require('faker');

const makeHuman = function (number) {
    for (let i=0; i<number; i++){
       console.log(faker.fake("{{name.lastName}}, {{name.firstName}}, {{image.avatar}}"))
    }
}

makeHuman(2)