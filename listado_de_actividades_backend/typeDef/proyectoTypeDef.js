import { gql } from "apollo-server-express";

//Esta es la manera de dar de alta mis models, para definir los objetos
export const proyectotypedef = gql`
    type Proyecto {
        id: ID!
        name: String!
        creationDate: String!
        active: Boolean!
    }

    type Etapa {
    id: ID!
    name: String!
    descripcion: String!
    creationDate: String!
    proyectoPadre: Proyecto!
  }

  type Tarea {
    id: ID!
    name: String!
    descripcion: String!
    creationDate: String!
    etapaPadre: Etapa!
    completa: Boolean!
  }

  type Query {
    proyectos: [Proyecto!]!

    etapas: [Etapa!]!
    etapasByIdProyecto(proyectoPadre: ID!): [Etapa!]!

    tareas: [Tarea!]!
    tareasByIdEtapa(etapaPadre: ID!): [Tarea!]!
  }

  type Mutation {
      createProyecto(
            name: String!
            creationDate: String!
            active: Boolean!
          ): Proyecto!
      updateProyecto(
        id: String!
        name: String!
        creationDate: String!
        active: Boolean!
      ): Proyecto!
      deleteProyecto(
        id: String!
      ): Proyecto!
      
      createEtapa(
        name: String!
        descripcion: String!
        creationDate: String!
        proyectoPadre: String!
          ): Etapa!
      updateEtapa(
        id: ID!
        name: String!
        descripcion: String!
        creationDate: String!
      ): Etapa!
      deleteEtapa(
        id: String!
      ): Etapa!

      createTarea(
        name: String!
        descripcion: String!
        creationDate: String!
        etapaPadre: String!
        completa: Boolean!
          ): Tarea!
      updateTarea(
        id: String!
        name: String!
        descripcion: String!
        creationDate: String!
        completa: Boolean!
      ): Tarea!
      deleteTarea(
        id: String!
      ): Tarea!
  }

`;