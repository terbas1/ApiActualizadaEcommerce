var express = require('express');
var router = express.Router();
var controller = require('../Controller/productoController');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: './public/images'})


router.get('/listar', function(req, res, next) {
	controller.show(req,res);
 //console.log('prueba GET usuario');
});

router.post('/codigo', function(req, res, next) {
	controller.codigo(req,res);
 //console.log('prueba GET usuario');
});
router.post('/idProducto', function(req, res, next) {
	controller.idProducto(req,res);
 //console.log('prueba GET usuario');
});

router.get('/listarAdmin', function(req, res, next) {
	controller.adminListar(req,res);

});
router.post('/crear/:id_producto',multipartMiddleware,function(req,res,next){
	controller.crear(req,res);
});
router.post('/registro',function(req,res,next){
	controller.registro(req,res);
});
router.delete('/delete/:id_producto',function(req,res,next){
	controller.eliminar(req,res);
});


router.get('/obtener/:id_producto', function(req, res, next) {
	controller.obtener(req,res);
 //console.log('prueba GET usuario');
});
router.put('/actualizar/:id_producto', function(req, res, next) {
	controller.actualizar(req,res);
 //console.log('prueba GET usuario');
});



module.exports = router;
