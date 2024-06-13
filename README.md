# Workon Reader (WR)

WorkonReader is designed to convert data from a .workon file to JSON format.

## What is this .workon file for?

 A .workon file is a strongly typed JSON with a different data format, which is similar to the JSON format. The library itself parses only int64 variables, which have the property of only reading data.

 ---

*Example of .workon file format:*
```workon 
[-start-

{mynum: int64} -> 789 ;
{mystring: string} -> ' text ';
{mybool: bool} -> true ;
{myfloat: float} -> 5.2 ;
{mylist: list} -> ["el", 14, true, 5.2]

-end-]
```

*Example of WorkonReader code:*
```javascript
const wr = require('workonreader')

const filePath = 'datas.workon';
const Promise = wr.workonRead(filePath); 

Promise
    .then(result => {
        console.log(result); 
    })
    .catch(error => {
        console.error(error.message); 
    });
```

---

### Advantages of .workon files
1. Strong Typing
2. Interesting data format

---

**New in this version:**
- Fixed bugs
- Add list with all types

> Version of WorkonReader : v1.1.0
