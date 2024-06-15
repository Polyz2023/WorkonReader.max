const workonStringify = (jsonData) => {
    let result = '';
    for (const key in jsonData) {
        if (jsonData.hasOwnProperty(key)) {
            const value = jsonData[key];
            const type = typeof value;
            if (type === 'number' && Number.isInteger(value)) {
                result += `{${key}: int64} -> ${value} ;\n`;
            } else if (type === 'string') {
                result += `{${key}: string} -> '${value}' ;\n`;
            } else if (type === 'boolean') {
                result += `{${key}: bool} -> ${value} ;\n`;
            } else if (type === 'number' && !Number.isInteger(value)) {
                result += `{${key}: float} -> ${value} ;\n`;
            } else if (Array.isArray(value)) {
                result += `{${key}: list} -> [\n${value.map(item => `    ${JSON.stringify(item)}`).join(',\n')}\n] ;\n`;
            } else {
                throw new Error(`Неподдерживаемый тип данных: ${type}`);
            }
        }
    }
    return result;
}

module.exports = { workonStringify }