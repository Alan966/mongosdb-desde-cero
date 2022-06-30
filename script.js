// EJEMPLO DE MAP REDUCE SIMPLE

// function map(){
//     emit(this.profesor_id, this.nombre)
// }

// function reduce (identificador, cursosAgrupados){
//     return {
//         cursosAgrupados: cursosAgrupados
//     };
// }

// function retoques (identificador, objetoCurso){
//     var contadorCursos = objetoCurso.cursosAgrupados.length; 
//     objetoCurso.cantidad = contadorCursos; 
//     return objetoCurso;
// }

// db.cursos.mapReduce(
//     map, 
//     reduce, 
//     {
//         out: 'salida', 
//         query: {estado: 'ACTIVO'}, 
//         finalize: retoques
//     }
// )

