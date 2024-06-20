# Workon Reader (WR)

WorkonReader is designed to convert data from a .workon file to JSON format.

## What is this .workon file for?

 A .workon file is a strongly typed JSON with a different data format that is similar to the JSON format. The library itself parses many types of data, and can write data to a .workon file by converting data from json

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
- Fixed bug with workonWrite func
- Add the [docs](https://abmax-max.onrender.com/root/modules/2024max/js/workonreader/1.2.0/offline/about)
- Fixed parsing of lists

> Version of WorkonReader : v1.2.6

> Learn [more](https://abmax-max.onrender.com/root/modules/2024max/js/workonreader/1.2.0/offline/about)