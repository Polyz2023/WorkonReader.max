const parseList = (listString) => {
    // Удалить квадратные скобки из списка и разделить элементы
    const elements = listString.slice(1, -1).split(',').map(element => element.trim());
    // Преобразовать строки элементов в соответствующие типы данных
    return elements.map(element => {
        if (element.startsWith('"') && element.endsWith('"')) {
            return element.slice(1, -1); // Убрать кавычки
        } else if (!isNaN(element)) {
            return parseFloat(element); // Преобразовать в число
        } else if (element === 'true' || element === 'false') {
            return element === 'true'; // Преобразовать в boolean
        }
        return element; // Вернуть как есть
    });
}


module.exports = {parseList};