const Order= require('../models/Order');

const {Router} = require('express');
const router = Router();

router.get('/:orderID', async function(req,res){
    try {
        let order = await Order.findById(req.params.orderID);
        if(!order){
            return res.status(400).send('el ID del envio a consultar no existe');
        }
        res.status(200).send(order);
    } catch (error) {
        res.status(500).send('el ID del envio a consultar no existe.');
        console.log.apply(error);
    }
});

router.post('/', async function(req,res){
    try {
        let order = new Order();
        order.diaRe = req.body.diaRe;
        order.horaRe = req.body.horaRe;
        order.medidas = req.body.medidas;
        order.delicado = req.body.delicado;
        order.peso = req.body.peso;
        order.dirRe = req.body.dirRe;
        order.ciudadRe = req.body.ciudadRe;
        order.nombreEmisor = req.body.nombreEmisor;
        order.tipoIdEmisor = req.body.tipoIdEmisor;
        order.idEmisor = req.body.idEmisor;
        order.dirEn = req.body.dirEn;
        order.ciudadEn = req.body.ciudadEn;
        order.nombreReceptor = req.body.nombreReceptor;
        order.tipoIdReceptor = req.body.tipoIdReceptor;
        order.idReceptor = req.body.idReceptor;
        order.fechaCreacion = new Date();

        order = await order.save();

        res.send(order);
    } catch (error) {
        res.status(500).send('hubo un error al crear la solicitud');
        console.log(error);
    }
});

module.exports = router;

