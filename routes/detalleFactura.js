var express = require('express');
var router = express.Router();

var controller = require('../Controller/detalleFacturaController');

router.get('/listar', function(req, res, next) {
	controller.show(req,res);
 //console.log('prueba GET usuario');
});

router.post('/crear',function(req,res,next){
	controller.create(req,res);
});


module.exports = router;
 