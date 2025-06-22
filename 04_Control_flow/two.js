const myObject = {
    js: 'Javasript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by apple'
}

for (const key in myObject) {
        console.log(key, ':-', myObject[key]);
    }

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
   console.log(key, ':-', programming[key]);   
}
