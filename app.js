// const fs = require('fs');

// console.clear();

// const base = 3;

// console.log('====================');
// console.log(`    Tabla del ${base} `);
// console.log('====================');

// let salida = '';

// for (let i = 1; i <= 10; i++) {
//     // console.log(base, 'x', i, '=', base * i);
//     salida += `${base} x ${i} = ${base * i}\n`;
// }
// console.log(salida);

// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//     if (err) throw err;

//     console.log(`tabla-${base}.txt creado`);
// });


// const { number } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

// console.log(process.argv);
console.log(argv);

// console.log('base: yargs', argv.b);

// console.log(process.argv);
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// console.log(base);

// const base = 3;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));