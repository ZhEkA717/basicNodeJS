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

// post and get requests

// const http = require('http');
// const url = require('url');
// const {parse} = require('querystring');

// http.createServer((request,response) => {
//     console.log('server work');
//     if(request.method == "GET"){
//         // GET -> получить обработать
//         console.log(request.method);
//         let urlRequest = url.parse(request.url,true);
//         console.log(urlRequest.query.test);// ! GET params
//         if(urlRequest.query.test % 2 == 0){
//             response.end('even');
//         }else{
//             response.end('odd');
//         }
//     }else{
//         // POST 
//         let body = "";
//         request.on('data',chunk =>{
//             body +=chunk.toString();
//         });

//         request.on('end',()=>{
//             console.log(body);
//             let params = parse(body);
//             console.log(params);
//             console.log(params.name);
//             response.end('OK');
//         });
//     }
   
// }).listen(3000);

// routing

// const http = require('http');
// const url = require('url');

// http.createServer(function(req,res){
//     let urlParts = url.parse(req.url);
//     // console.log(urlParts);
//     console.log("====================");
//             console.log(urlParts.pathname);
//     console.log("====================");
//      if(req.method == "GET"){
//          switch(urlParts.pathname){
//              case "/":
//                  homepage(req,res);
//                  break;
//              case "/about":
//                  about(req,res);
//                  break;
//              default:
//                  page404(req,res);
//                  break;
//          }
//      }else if(req.method == "POST"){
//         switch(urlParts.pathname){
//             case "/about":
//                 about2(req,res);
//                 break;
//             default:
//                 page404(req,res);
//                 break;
//         }
//      }else{
//          page404(req,res);
//      }

// }).listen(3000);

// console.log("Server running at http://localhost:3000");

// function homepage(req,res){
//     res.end("homepage");
// }
// function about(req,res){
//     res.end("about");
// }
// function about2(req,res){
//     res.end("about post");
// }
// function page404(req,res){
//     res.end("404");
// }

// ASINC AWAIT запросы в БД
// скачиваем расшираение npm i mysql2

// const mysql = require('mysql2/promise');
// const config = require('./config');

// async function main(){
//     const conn = await mysql.createConnection(config);
//     const [rows, fields] = await conn.execute('select * from user where id=1');
//     // console.log(rows[0].firstname);
//     // await conn.execute('update user set firstname="'+rows[0].firstname+'" where id = 2 ');
//     conn.end();
//     return rows;
// }

// async function f(){
//     let a = await main();
//     console.log(a);
// }
// f();

// млдули require

const config = require('./config');
const config2 = require('./config2');
const f = require('./fun');
const f2 =require('./f2');

console.log('node ------------ok');
console.log(config);
console.log(config.f(3,4));
console.log(config2);
console.log(f(2,3));
console.log(f2(12,12)); 