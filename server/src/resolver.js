const dataCorte = require('./data/corteData.json')


var getCorte = function(parent, args) {
    return dataCorte
}

var getCortes = function(parent, args){

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