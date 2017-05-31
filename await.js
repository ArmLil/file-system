'use strict'

const fs = require('fs');

const read = async(file) => {
	return new Promise((res, rej) => {
		fs.readFile(file, 'utf8', (err, data) => {
			if (err) return rej(err);
			res(data);
		});
	});
};

const append = async(file, data) => {
	fs.appendFile(file, data, 'utf8', err => {
		if (err) throw err;
	});
};

const main = async() => {
	try {
		const d1 = await read('fromFile1');
		const d2 = await read('fromFile2');
		const a = await append('toFile', d1 + d2);
	} catch (e) {
		console.error(e);
	}
}

main();
