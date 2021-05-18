import express from "express";
import bodyParser from "body-parser";
import { ApolloServer, gql } from "apollo-server-express";
import mongoose from "mongoose";
import { proyectotypedef } from "./../typeDef/proyectoTypeDef.js";
import { proyectocontroller } from "./../controllers/proyectoController.js";
import { Cat } from "./../dao/proyectoDao.js";

const startServer = async () => {
    const app = express();

    const server = new ApolloServer({
        typeDefs: proyectotypedef,
        resolvers: proyectocontroller
    });

    await mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

    server.applyMiddleware({ app });

    app.use(bodyParser.json());

    app.get('/', (req, res, next) => {
        res.send();
    });

    app.listen({ port: 4000 }, 
        () => console.log("Server ready at http://localhost:4000") );
};

startServer();