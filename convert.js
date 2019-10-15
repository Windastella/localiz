#!/usr/bin/env node

const program = require('commander');
const fs  = require('fs');

program.version(app.version);

program
    .option('-f, --file <csv>', 'csv file to convert to json', 'locale.csv')
    .parse(process.argv);

let content = fs.readFileSync( program.csv, 'utf8');
console.log(content);
