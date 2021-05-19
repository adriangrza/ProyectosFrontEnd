import { ProyectoMongooseModel, EtapaMongooseModel, TareaMongooseModel } from "../dao/proyectoDao.js";

// Este es mi controllador, es donde pondre mis funciones del query
export const proyectocontroller = {
    Query: {
      proyectos: () => ProyectoMongooseModel.find(),

      etapas: () => EtapaMongooseModel.find(),
      etapasByIdProyecto: async (proyectoPadre) => EtapaMongooseModel.find(proyectoPadre),

      tareas: () => TareaMongooseModel.find(),
      tareasByIdEtapa: async (etapaPadre) => TareaMongooseModel.find( etapaPadre )
    },
    /*Etapa: {
      proyectoPadre: ({proyectoPadre}) => {
        return ProyectoMongooseModel.find(a => {
          return a._id === proyectoPadre
        })
      }
    },*/
    Mutation: {
        createProyecto: async (_, {name, creationDate, active}) => {
            const Proyecto = new ProyectoMongooseModel({ name, creationDate, active });
            await Proyecto.save();
            return (Proyecto);
        },
        updateProyecto: async (_, {id, name, creationDate, active}) => {
          const result = await ProyectoMongooseModel.updateOne( {_id:{$eq: id} }, { name: name, creationDate: creationDate, active: active });
          if (!result.ok == 1) {
            throw new Error(`Couldn’t update ${id}`);
          }
          const Proyecto = await ProyectoMongooseModel.findOne( {_id: {$eq: id}});
          return Proyecto;
        },
        deleteProyecto: async (_, {id}) => {
          const Proyecto = ProyectoMongooseModel.findByIdAndRemove( id );
          return Proyecto;
        },

        createEtapa: async (_, {name, descripcion, creationDate, proyectoPadre}) => {
          const Etapa = new EtapaMongooseModel({ name, descripcion, creationDate, proyectoPadre });
          await Etapa.save();
          return (Etapa);
        }, 
        updateEtapa: async (_, {id, name, descripcion, creationDate, proyectoPadre}) => {
          const result = await EtapaMongooseModel.updateOne( {_id:{$eq: id} }, { name: name, descripcion: descripcion, creationDate: creationDate, proyectoPadre: proyectoPadre });
          if (!result.ok == 1) {
            throw new Error(`Couldn’t update ${id}`);
          }
          const Etapa = await EtapaMongooseModel.findOne( {_id: {$eq: id}});
          return Etapa;
        },
        deleteEtapa: async (_, {id}) => {
          const Etapa = EtapaMongooseModel.findByIdAndRemove( id );
          return Etapa;
        },

        createTarea: async (_, {name, descripcion, creationDate, etapaPadre, completa}) => {
          const Tarea = new TareaMongooseModel({ name, descripcion, creationDate, etapaPadre, completa });
          await Tarea.save();
          return (Tarea);
        },
        updateTarea: async (_, {id, name, descripcion, creationDate, etapaPadre, completa}) => {
          const result = await TareaMongooseModel.updateOne( {_id:{$eq: id} }, { name: name, descripcion: descripcion, creationDate: creationDate, etapaPadre: etapaPadre, completa: completa });
          if (!result.ok == 1) {
            throw new Error(`Couldn’t update ${id}`);
          }
          const Tarea = await TareaMongooseModel.findOne( {_id: {$eq: id}});
          return Tarea;
        },
        deleteTarea: async (_, {id}) => {
          const Tarea = TareaMongooseModel.findByIdAndRemove( id );
          return Tarea;
        }
      }
  };

//const kitty = new Cat({ name: 'Zildjian' });
//kitty.save().then(() => console.log('meow'));