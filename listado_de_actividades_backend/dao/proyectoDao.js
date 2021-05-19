import mongoose from 'mongoose';

export const Cat = mongoose.model('Cat', { name: String });
export const ProyectoMongooseModel = mongoose.model('Proyecto', {
    name: String,
    creationDate: String,
    active: Boolean
});
export const EtapaMongooseModel = mongoose.model('Etapa', {
    name: String,
    descripcion: String,
    creationDate: String,
    proyectoPadre: mongoose.Types.ObjectId
});
export const TareaMongooseModel = mongoose.model('Tarea', {
    name: String,
    descripcion: String,
    creationDate: String,
    etapaPadre: mongoose.Types.ObjectId,
    completa: Boolean
});