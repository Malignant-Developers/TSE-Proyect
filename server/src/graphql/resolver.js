const dataCorte = require('./data/corteData.json')


var getCorte = function(parent, args) {
    console.log(args);
    
    let id = args.numero

    return dataCorte.Recortes.filter(corte => {        
        return corte.numero == id
    })[0]
}

var getCortes = () => {
    return DataCorte
}

var getEleccion = () => {
    
}
// var root = {
//     corte: getCorte,
//     cortes: getCortes
// }

module.exports = {
    Query:{
        corte: getCorte,
        cortes: getCortes   
    }
}