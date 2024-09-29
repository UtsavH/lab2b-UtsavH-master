import a from 'builtin-modules';
import isBuiltinModule from 'is-builtin-module';
import validator from 'validator';
import dayjs from 'dayjs';
import axios from 'axios';
import Mail from 'nodemailer';
import color from 'colors';
import { v4 as uuidv4 } from 'uuid';
import aa from 'lodash';

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}


console.log(isBuiltinModule('fs')); // true
console.log(isBuiltinModule('express')); // false


console.log(validator.isEmail('utsavhudka2002@gmail.com'));

const formattedDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
console.log(formattedDate);

//npm colors module
console.log('Hello'.green);
console.log('World!'.blue);
console.log('This is an error!'.red);

// Generating and print a random UUID
const uniqueID = uuidv4();
console.log(`Generated UUID: ${uniqueID}`);

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = aa.chunk(array, 3);
console.log(chunkedArray);