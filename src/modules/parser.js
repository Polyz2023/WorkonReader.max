const list = require('./list');

const workonParser = (content) => {
    const lines = content.split('\n').map(line => line.trim()).filter(line => line);
    const result = {};

    lines.forEach(line => {
        const [keyPart, valuePart] = line.split('->').map(part => part.trim());

        const keyMatch = keyPart.match(/\{(\w+)\s*:\s*([\w+]+)\}/);
        if (keyMatch) {
            const key = keyMatch[1];
            const type = keyMatch[2];
            let value;

            if (type === 'int64') {
                value = parseInt(valuePart.trim(), 10);
            } else if (type === 'string') {
                value = valuePart.trim().slice(1, -2); // Remove surrounding quotes
            }else if (type === 'bool') {
                value = valuePart === 'true';
            }else if (type === 'float') {
                value = parseFloat(valuePart.trim()) ;
            }else if (type === 'list') {
                value = list.parseList(valuePart) ;
            }


            result[key] = value;
        }
    });

    return result;
}

module.exports = {workonParser};