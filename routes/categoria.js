var express = require('express');
var router = express.Router();

var controller = require('../Controller/categoriaController');

router.get('/listar', function(req, res, next) {
	controller.show(req,res);
 //console.log('prueba GET usuario');
});

router.post('/crear',function(req,res,next){
	controller.create(req,res);
});
router.get('/listarAdmin', function(req, res, next) {
	controller.listarAdmin(req,res);
 //console.log('prueba GET usuario');
});
router.post('/registro',function(req,res,next){
	controller.registro(req,res);
});


module.exports = router;
 