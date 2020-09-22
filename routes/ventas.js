var express = require('express');
var router = express.Router();
var controller = require('../Controller/ventasController.js');


router.get('/listar', function(req, res, next) {
	controller.show(req,res);
 //console.log('prueba GET usuario');
});

router.get('/ventas', function(req, res, next) {
	controller.info(req,res);
 //console.log('prueba GET usuario');
});

router.get('/visitas', function(req, res, next) {
	controller.info2(req,res);
 //console.log('prueba GET usuario');
});

router.get('/usuarios', function(req, res, next) {
	controller.info3(req,res);
 //console.log('prueba GET usuario');
});

router.get('/productos', function(req, res, next) {
	controller.info4(req,res);
 //console.log('prueba GET usuario');
});
router.get('/productosVendidos', function(req, res, next) {
	controller.info5(req,res);
 //console.log('prueba GET usuario');
});

router.put('/actualizar', function(req, res, next) {
	controller.actualizar(req,res);
 //console.log('prueba GET usuario');
});

router.post('/listarDetalle', function(req, res, next) {
	controller.listarDetalle(req,res);
 //console.log('prueba GET usuario');
});



router.post('/crear',function(req,res,next){
	controller.create(req,res);
});
router.post('/login',function(req,res,next){
	controller.login(req,res);
});



module.exports = router;
