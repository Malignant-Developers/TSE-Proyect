const dataCorte = require("./data/corteData.json");

var ObtenerCorte = function(parent, args) {   
  if (args.tipo !== "") {
    let corte = Object.assign({}, dataCorte)
    let eleccion = dataCorte.e.find(eleccion => {
      return eleccion.id.toLowerCase() === args.tipo.toLowerCase()
    });
    if (eleccion === undefined) {
        return null
    }else {
        corte.e = [eleccion]
        return corte
    }
  } else {
    return dataCorte
  }
};

module.exports = {
  Query: {
    corte: ObtenerCorte
  }
};
