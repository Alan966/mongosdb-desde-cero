function map(){
    for(var idx = 0; idx < this.lanzamientos.length; idx++){
        emit(this.profesor_id, this.lanzamientos[idx].meses);
    }
}

function reduce (identificador, Meses){
    var costoTotal = 0; 
    for(idx = 0; idx < Meses.length; idx++){
        for(idy = 0; idy < Meses[idx].length; idy++){
            costoTotal += Meses[idx][idy].costo;
        }
    }
    return {
        profesor: identificador,
        costoTotal : costoTotal
    };
}


db.cursos.mapReduce(
    map, 
    reduce, 
    {
        out: 'salida2', 
        query: { "lanzamientos.fecha": 2019}
    }
)