const { Schema, model} = require('mongoose');


const OrderSchema = Schema({

    diaRe:{
        type: String,
        required: true,
    },
    horaRe:{
        type: String,
        required: true,
    },
    medidas:{
        type: String,
        required: true,
    },
    delicado:{
        type: String,
        required: true,
    },
    peso:{
        type: String,
        required: true,
    },
    dirRe:{
        type: String,
        required: true,
    },
    ciudadRe:{
        type: String,
        required: true,

    },
    nombreEmisor:{
        type: String,
        required: true,
    },
    tipoIdEmisor:{
        type: String,
        required: true,
    },
    idEmisor:{
        type: String,
        required: true,
    },
    dirEn:{
        type: String,
        required: true,
    },
    ciudadEn:{
        type: String,
        required: true,
    },
    nombreReceptor:{
        type: String,
        required: true,
    },
    tipoIdReceptor:{
        type: String,
        required: true,
    },
    idReceptor:{
        type: String,
        required: true,
    },
    fechaCreacion:{
        type: Date,
        required: true,
    },
});

module.exports = model('Order', OrderSchema);
