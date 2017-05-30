'use strict'

const fs = require('fs');

const read = (file, cb) => {
	fs.readFile(file, (err, data) => {
		let arr = [];
		if (err) console.log('Opps', err);
		arr.push(data);
		arr = Buffer.concat(arr).toString();
    console.log(`read ${arr}`);
		cb(arr);
	});
};

const write = (file, text ) => {
	fs.writeFile(file, text, (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
	});
}

read('fromFile1', (text1) => {
	read('fromFile2', (text2) => {
		console.log(text1 + text2);
    write('toFile', text1 + text2);
	});
});
