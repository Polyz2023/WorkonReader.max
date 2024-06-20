

const filePath = './data.workon';
const Promise = require('../../index').workonRead(filePath); 

Promise
    .then(result => {
        console.log(result); 
    })
    .catch(error => {
        console.error(error.message); 
    });
