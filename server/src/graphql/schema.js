const { gql } = require('apollo-server');

const typeDefs = gql`


type Query{
    cortes:[corte]!
    corte(numero: Int!): corte
} 
type corte{
    numero: ID!
    fecha: String
    hora: String
    elecciones: [eleccion]!
}
type eleccion{
    id: Int
    totalMesas: Int
    mesasProcesadas: Int
    votosEmitidos: Int
    vtosValidos: Int
    nulosYBlancos: Int
    electores: Int
}
`;

module.exports = typeDefs;


