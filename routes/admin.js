var express = require('express');
var router = express.Router();
var app = express();
var controller = require('../Controller/adminController');



router.post('/listar', function(req, res, next) {
	controller.show(req,res);

});

router.post('/login',function(req,res,next){
	controller.login(req,res);
});


module.exports = router;
