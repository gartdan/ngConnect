/// <reference path="..\typings\node.d.ts"/>
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, Promise, generator) {
    return new Promise(function (resolve, reject) {
        generator = generator.call(thisArg, _arguments);
        function cast(value) { return value instanceof Promise && value.constructor === Promise ? value : new Promise(function (resolve) { resolve(value); }); }
        function onfulfill(value) { try { step("next", value); } catch (e) { reject(e); } }
        function onreject(value) { try { step("throw", value); } catch (e) { reject(e); } }
        function step(verb, value) {
            var result = generator[verb](value);
            result.done ? resolve(result.value) : cast(result.value).then(onfulfill, onreject);
        }
        step("next", void 0);
    });
};
var fs = require("fs");
function readFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
}
function* getfiles() {
    yield "/temp/file1.txt";
    yield "/temp/file2a.txt";
    yield "/temp/file2.txt";
}
function logWords(filename, text) {
    console.log(`File "${filename}" has ${text.split(' ').length} words`);
}
function run() {
    return __awaiter(this, void 0, Promise, function* () {
        for (let file of getfiles()) {
            try {
                var data = yield readFile(file);
                logWords(file, data);
            }
            catch (err) {
                console.log(`Failed to read file "${file}" with error: ${err}`);
            }
        }
    });
}
run();
