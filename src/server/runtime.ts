/// <reference path="..\typings\node.d.ts"/>
"use strict";

import * as fs from "fs";

function readFile(filename){
	return new Promise( (resolve, reject) => {
		fs.readFile(filename, 'utf8', (err, data) => {
			err ? reject(err) : resolve(data);
		});
	});
}

function* getfiles(){
	yield "/temp/file1.txt";
	yield "/temp/file2a.txt";
	yield "/temp/file2.txt";
}

function logWords(filename, text) {
	console.log(`File "${filename}" has ${text.split(' ').length} words`);
}

async function run() {
	for (let file of getfiles()) {
		try {
			var data = await readFile(file);
			logWords(file, data);
		}
		catch(err){
			console.log(`Failed to read file "${file}" with error: ${err}`);
		}
	}
}

run();
