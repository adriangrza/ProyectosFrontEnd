import { gql } from "apollo-server-express";

//Esta es la manera de dar de alta mis models, para definir los objetos
export const proyectotypedef = gql`
    type Proyecto {
        id: ID!
        name: String!
        creationDate: String!
        active: Boolean!
    }
  type Query {
    hello: String!
    proyectos: [Proyecto!]!
  }
  type Mutation {
      createProyecto(
            name: String!
            creationDate: String!
            active: Boolean!
          ): Proyecto!
  }
`;