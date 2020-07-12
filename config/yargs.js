const params = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca la tarea como pendiente o completada'
    }

};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: params.descripcion
    })
    .command('borrar', 'elimina un elemento del listado', {
        descripcion: params.descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: params.descripcion,
        completado: params.completado
    })
    .help()
    .argv;

module.exports = {
    argv
};