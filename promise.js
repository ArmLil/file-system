'use strict'

const fs = require('fs');
/*
const read = (file, cb) => {
	fs.readFile(file, 'utf8', (err, data) => {
		if (err) throw err;
		cb(data);
	})
}

const append = (file, text) => {
  fs.appendFile(file, text, (err) => {
    if (err) throw err;
  })
}

read('fromFile1', d1 =>
	read('fromFile2', d2 =>
    append('toFile', d1 + d2)));
*/

const read = (file) => {
	return new Promise((res, rej) => {
		fs.readFile(file, 'utf8', (err, d) => {
			if (err) {
				return rej(err);
			}
			res(d);
		});
	});
};

const append = (file, text) => {
	fs.appendFile(file, text, 'utf8', err => {
		if (err) throw err;
	});
};


read('fromFile1').then(d1 => {
	return read('fromFile2').then(d2 =>
		append('toFile', d1 + d2))
}).catch(err => console.error('Opps', err));
