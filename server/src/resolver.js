const dataCorte = require('./data/corteData.json')

var getCorte = function(parent, args) { 
    if (dataCorte.numero === args.numero) {   
        if (args.tipo !== "") {   
            let newData = Object.assign({}, dataCorte)          
            let found = dataCorte.e.find(item => {
                return item.id === args.tipo
            })
            newData.e = [found]
            return newData
        }else{
            return dataCorte
        }   
    }
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
        corte: getCorte 
    }
}