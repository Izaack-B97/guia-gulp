const { 
    watch, 
    series, 
    parallel, 
    src, 
    dest 
} = require('gulp');

// Tarea Hola Mundo
function holaMundo ( cb ) {
    console.log(`Hola mundo ${ Date.now() }`);
    cb();
}

// Tarea Adios Mundo
function adiosMundo( cb ) {
    console.log(`Adios mundo ${ Date.now() }`);
    cb();
} 

function watch_css( cb ) {
    watch('css/*css', holaMundo);
    cb();
}

// Declaro las tareas publicas con exports
exports.holaMundo = holaMundo;
exports.adiosMundo = adiosMundo; 
exports.default = holaMundo;
exports.serie = series( adiosMundo, holaMundo );
exports.paralelo = parallel( adiosMundo, holaMundo );

exports.pipeline = function () {
    return src('css/*.css').pipe( dest('dist/') );
}