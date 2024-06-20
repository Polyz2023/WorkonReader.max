const str = require('../modules/str');
const fs = require('fs');

const workonWrite = (filePath, jsonData) => {
    return new Promise((resolve, reject) => {
        const workonContent = str.workonStringify(jsonData);
        const data = `[-start-\n${workonContent}\n-end-]`;
        fs.writeFile(filePath, data, { encoding: 'utf-8' }, (error) => {
            if (error) {
                reject(new Error(`Ошибка при записи файла: ${error.message}`));
            } else {
                resolve('Файл успешно записан');
            }
        });
    });
}

module.exports = { workonWrite };
