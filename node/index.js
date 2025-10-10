//NOTE COMMON JS MODULES
const { college, firstName } = require('./script.js');
const product = require('./new.js');
console.log(college, firstName, product);

// console.log(process)
// console.log(global)

//inbuilt modules filesystem

const fs = require('fs');

//two types of function available synchronous and async

//SYNCRONOUS FUNCTION  BLOCKING CODE
// console.log('file reading started ....');
// const data = fs.readFileSync('./read.txt', 'utf-8');
// console.log(data);
// console.log('file reading ended....');

//ASYNC VERSION NON BLOCKING

console.log('async read file started...');

// fs.readFile('./read.txt', 'utf-8', (err, data) => {
//   console.log(data);
//   fs.writeFileSync('transfer.txt', data);
// });
// console.log('async file ended ...');
//filepath = ['file1.txt' , 'file2.txt']
// readMultipleFile(filePath)

//NOTE WRITE FILE ASYNC OR SYNC ;

fs.writeFile('newfile.txt', 'THIS IS WRITTEN USING WRITEFILE', () => {
  console.log('success');
});
//create a data.txt file read the data from that file and write a new file to transfer the data.


//imp writing object to any file
const productData = [{ name: 'lg ac' }, { nae: 'samsung tv' }];

fs.writeFile('product.json' ,  JSON.stringify(productData) , ()=>{
    console.log('success')
})

//add new data to existing file 
// fs.appendFile('read.txt' , '\n this is data',()=>{
//     console.log('append success')
// }
// )

//unlink  delete the existing file
fs.unlink('read.txt', (err)=>{
console.log(err)
})

//mkdir
fs.mkdir('folder' , ()=>{

})