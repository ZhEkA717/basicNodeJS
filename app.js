// const fs = require('fs');// модуль файловой системы
// const path = require('path');
// // read file

// fs.readFile('one.txt','utf-8',(err,data)=>{
//     console.log(data);
// });

// let text = fs.readFileSync('t2.txt','utf-8');
// console.log(text);

// console.log("====================");

// fs.readdir('one',(err,data)=>{
//     console.log(data);
//     data.forEach(file=>{
//         console.log(file);
//         console.log(`extension:${path.extname(file)}`);
//         console.log(fs.statSync('one/'+file).size+'B');
//     });
// });

// // write file

// fs.writeFile('one/newfile.txt','gooooooo',(err)=>{
//     if(err) {
//         console.log(err);
//     }
// });

// fs.writeFile('one.txt','work',(err)=>{
//     if(err){
//         console.log('Error');
//     }
// });

// case 1 Записываем Json file

// const man = {
//     name: 'Alex',
//     age: 22,
//     department: 'History',
//     car: 'vaz'
// };

// fs.writeFile('one.json',JSON.stringify(man),(err)=>{
//     if(err){
//         console.log('Error');
//     }
// });

// case 2 читаем JSON file

// const student = require('./one.json');

// console.log(student);

// case 3 читаем CSV (Comma-Separated Values) file 

// const csv = require('csv-parser');
// const results = [];

// fs.createReadStream('table.csv')
//   .pipe(csv())
//   .on('data', (data) => results.push(data))
//   .on('end', () => {
//     console.log(results);
//   });

// case 4 Пишем CSV file
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csvWriter = createCsvWriter({
//     path: 'file1.csv',
//     header: [
//         {id: 'name', title: 'NAME'},
//         {id: 'lang', title: 'LANG'},
//         {id: 'age', title: 'AGE'},
//         {id: 'gender', title: 'GENDER'}
//     ]
// });

// const data = [
//     {
//         name: 'Bob',
//         lang: 'French',
//         age: 35,
//         gender: 'MAN'
//     },{
//         name: 'Zheka',
//         lang: 'Russia',
//         age: 21,
//         gender: 'MAN'
//     },{
//         name: 'Dashka',
//         lang: 'Russia',
//         age: 22,
//         gender: 'WOMAN'
//     },{
//         name: 'Valentin',
//         lang: 'English',
//         age: 17,
//         gender: 'MAN'
//     }
// ];

// csvWriter.writeRecords(data)       // returns a promise
//     .then(() => {
//         console.log('...Done');
//     });

const http = require('http');

// GET -> получить обработать

http.createServer((request,response) => {
    console.log('server pidr');
    console.log(request);
    response.end('sdgsgsg');
}).listen(4000);
