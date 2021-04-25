function helloWorld (param1, param2) {
    console.log(param1);
    console.log(param2);
}

helloWorld('Porfin', 'mi Cama');

function helloWorld (...param) {
    console.log(param);
    
}

helloWorld('Porfin', 'mi Cama', 'tenia', 'mucho', 'sueño');

function helloWorld () {
    return 'Hello world';
}

console.log(helloWorld());