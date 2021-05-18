import mongoose from 'mongoose';

export const Cat = mongoose.model('Cat', { name: String });
export const ProyectoMongooseModel = mongoose.model('Proyecto', {
    name: String,
    creationDate: String,
    active: Boolean
});