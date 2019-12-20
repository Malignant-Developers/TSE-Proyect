const { gql } = require('apollo-server');

const typeDefs = gql`


type Query{
    cortes:[corte]!
    corte(numero: Int): corte
} 
# Query para el Corte
type corte{
    numero: Int
    fecha: String
    hora: String
    e: [e]!
}
# Query para Eleccion
type e{
    id: String
    l:[l]!
}
# Query para Lugares
type l{
    nivel1: Int
    nivel2: Int
    nivel3: Int
    nivel4: Int
    totalMesas: Int
    mesasProcesadas: Int
    votosEmitidos: Int
    vtosValidos: Int
    nulosYBlancos: Int
    electores: Int
    v:[v]!
}
# Query para Votos
type v {
    codPartido: Int
    votos: Int
}`;

module.exports = typeDefs;


