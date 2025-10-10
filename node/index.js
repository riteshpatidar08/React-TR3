//NOTE COMMON JS MODULES
const {college, firstName} = require('./script.js') ;
const product = require('./new.js')
console.log(college , firstName , product)

// console.log(process)
// console.log(global)

//inbuilt modules filesystem 

const fs = require('fs') ;

//two types of function available synchronous and async 

//SYNCRONOUS FUNCTION  BLOCKING CODE
console.log('file reading started ....')
const data = fs.readFileSync('./read.txt','utf-8');
console.log(data) ;
console.log('file reading ended....') ;

//ASYNC VERSION NON BLOCKING 

console.log('async read file started...')

fs.readFile('./read.txt', 'utf-8', (err,data)=>{
console.log(data)
})
console.log('async file ended ...')
//filepath = ['file1.txt' , 'file2.txt']
// readMultipleFile(filePath)


//NOTE WRITE FILE ASYNC OR SYNC ;

fs.writeFile('newfile.txt' , 'THIS IS WRITTEN USING WRITEFILE', ()=>{
    console.log('success')
})

