#!/usr/bin/env node

const program = require('commander');
const fs  = require('fs');
const app = require('./package.json');

program.version(app.version);

program
    .option('-f, --file <csv>', 'csv file to convert to json', 'locale.csv')
    .parse(process.argv);

let content = fs.readFileSync( program.file, 'utf8');
let lines  = content.split('\r\n').filter(Boolean).splice(1);
let headers = content.split('\r\n')[0].split(',').splice(1);

var json = {};

for(line of lines){
    let arr = line.split(',').splice(1);
    let key = line.split(',')[0];
    
    json[key] = {};
    
    for(let i = 0; i < headers.length; i++){        
        json[key][headers[i]] = arr[i];
    }
}

fs.writeFile("locale.json", JSON.stringify(json), 'utf8', (err)=>{
    if(err)
        console.error(err);
});
