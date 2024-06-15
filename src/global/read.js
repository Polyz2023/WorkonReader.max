const fs = require('fs').promises;
const parser = require('../modules/parser');

const workonRead = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8')
            .then(data => {
                const startMarker = '[-start-\n';
                const endMarker = '\n-end-]';
                const startIndex = data.indexOf(startMarker) + startMarker.length;
                const endIndex = data.indexOf(endMarker);

                if (startIndex !== -1 && endIndex !== -1) {
                    const fileContent = data.substring(startIndex, endIndex).trim();
                    const parsedData = parser.workonParser(fileContent);
                    resolve(parsedData); // Возвращаем результат
                } else {
                    reject(new Error('Некорректная структура файла'));
                }
            })
            .catch(error => {
                reject(new Error(`Ошибка при чтении файла: ${error.message}`));
            });
    });
}

module.exports = { workonRead }