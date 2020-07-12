const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors')
let comando = argv._[0];


switch (comando) {
    case 'crear':
        console.log('Crear tareas por hacer');
        console.log();
        porHacer.crear(argv.descripcion)
        break;
    case 'listar':

        let listado = porHacer.getListado();
        console.log(listado);
        for (let tarea of listado) {
            console.log('===========Por hacer =========='.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log('==============================='.green);
        }

        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        if (actualizado)
            console.log('tarea actualizada correctamente');
        else
            console.log('tarea no fue actualizada');
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado)
            console.log('tarea borrada correctamente');
        else
            console.log('tarea no fue borrada');
        break;
    default:
        console.log('comando no encontrado');
        break;
};