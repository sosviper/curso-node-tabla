const argv = require('yargs')
    .options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .check((argv, options) => {
        // console.log('yargs', argv);
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }
        return true;
    })
    .options('l', {
        alias: 'listar',
        type: 'boolean',
        // demandOption: true,
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .options('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'Es el número hasta donde debe ser la tabla'
    })
    .argv;


module.exports = argv;