const parseList = (listString) => {
    listString = listString.trim();
    if (listString.startsWith('[') && listString.endsWith('];')) {
        listString = listString.slice(1, -2).trim();
    }

    const elements = [];
    let currentElement = '';
    let depth = 0;
    let insideQuotes = false;

    for (let char of listString) {
        if (char === '[' && !insideQuotes) {
            depth++;
        } else if (char === ']' && !insideQuotes) {
            depth--;
        } else if (char === '"') {
            insideQuotes = !insideQuotes;
        }

        if (char === ',' && depth === 0 && !insideQuotes) {
            elements.push(parseElement(currentElement.trim()));
            currentElement = '';
        } else {
            currentElement += char;
        }
    }

    // Добавляем последний элемент
    if (currentElement.trim() !== '') {
        elements.push(parseElement(currentElement.trim()));
    }

    return elements;
};

const parseElement = (elementString) => {
    elementString = elementString.trim();
    if (elementString.startsWith('[') && elementString.endsWith(']')) {
        // Убираем внешние квадратные скобки и рекурсивно обрабатываем вложенные списки
        const innerListString = elementString.slice(1, -1).trim();
        return parseList(innerListString);
    } else if (elementString.startsWith('"') && elementString.endsWith('"')) {
        return elementString.slice(1, -1); // Убираем кавычки
    } else if (!isNaN(elementString)) {
        return parseFloat(elementString); // Преобразуем числовые строки в числа
    } else if (elementString === 'true') {
        return true; // Преобразуем строку true в boolean true
    } else if (elementString === 'false') {
        return false; // Преобразуем строку false в boolean false
    } else {
        return elementString; // Возвращаем как есть
    }
};

module.exports = { parseList };