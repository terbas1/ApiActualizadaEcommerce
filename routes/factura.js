var express = require('express');
var router = express.Router();

var controller = require('../Controller/facturaController');

router.get('/listar', function(req, res, next) {
	controller.show(req,res);
 //console.log('prueba GET usuario');
});

router.post('/crear',function(req,res,next){
	controller.create(req,res);
});
router.post('/facturas',function(req,res,next){
	controller.usuarioFactura(req,res);
});
router.post('/detalle',function(req,res,next){
	controller.usuarioDetalleFactura(req,res);
});


module.exports = router;
 