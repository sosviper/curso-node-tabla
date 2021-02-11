const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {


    try {

        let salida, consola = '';

        for (let i = 1; i <= hasta; i++) {
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            salida += `${base} ${'x'} ${i} ${'='} ${base * i}\n`;
        }

        if (listar) {
            console.log('===================='.green);
            console.log('    Tabla del '.green, colors.blue(base));
            console.log('===================='.green);

            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        // (salida) ? resolve(fs.writeFileSync(`tabla-${base}.txt`, salida)): reject('Error al crear el archivo');

        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }


}

module.exports = {
    crearArchivo
}