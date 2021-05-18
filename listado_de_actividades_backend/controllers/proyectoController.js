import { ProyectoMongooseModel } from "../dao/proyectoDao.js";

// Este es mi controllador, es donde pondre mis funciones del query
export const proyectocontroller = {
    Query: {
      hello: () => 'Hello world! How are you?',
      proyectos: () => ProyectoMongooseModel.find()
    },
    Mutation: {
        createProyecto: async (_, {name, creationDate, active}) => {
            const Proyecto = new ProyectoMongooseModel({ name, creationDate, active });
            await Proyecto.save();
            console.log(Proyecto);
            return (Proyecto);
        }
    }
  };

//const kitty = new Cat({ name: 'Zildjian' });
//kitty.save().then(() => console.log('meow'));