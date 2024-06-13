

const filePath = './src/test/data.workon';
const Promise = require('../../index').workonRead(filePath); 

Promise
    .then(result => {
        console.log(result.mynum); 
        console.log(result.mystring)
        console.log(result)
    })
    .catch(error => {
        console.error(error.message); 
    });