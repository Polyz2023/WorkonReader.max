const str = require('../modules/str');

const workonWrite = (filePath, jsonData) => {
    return new Promise((resolve, reject) => {
        const workonContent = str.workonStringify(jsonData);
        const data = `[-start-\n${workonContent}\n-end-]`;
        fs.writeFile(filePath, data, 'utf-8')
            .then(() => resolve('Файл успешно записан'))
            .catch(error => reject(new Error(`Ошибка при записи файла: ${error.message}`)));
    });
}

module.exports = { workonWrite }