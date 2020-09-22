
const mysql = ('mysql');

const db= require('../DataBase');



module.exports = {
	show: function (req, res) {

		db.query('SELECT * FROM compras',(err, rows, fields) =>{

			if(!err){
				res.json(rows);
			}else{
				console.log(err);
			}

		});
	},

	info: function (req, res) {


		db.query('SELECT SUM(pago)as ventas FROM compras ',(err, rows, fields) =>{

			if(!err){
				res.json(rows)
			}else{
				console.log(err);
			}

		});

	

	},

	info2: function (req, res) {
	db.query('SELECT SUM(cantidad) as visitas FROM visitaspaises',(err, rows, fields) =>{

		if(!err){
			res.json(rows)
	
		}else{
			console.log(err);
		}

	});
},

info3: function (req, res) {
	db.query('SELECT COUNT(id) as usuarios FROM usuarios',(err, rows, fields) =>{

		if(!err){

			res.json(rows)
		
			
		}else{
			console.log(err);
		}

	});
},
info4: function (req, res) {
	db.query('SELECT COUNT(id) as productos FROM productos',(err, rows, fields) =>{

		if(!err){
			res.json(rows)
		
			
		}else{
			console.log(err);
		}

	});
},




info5: function (req, res) {

	db.query('SELECT titulo,ventas FROM productos ORDER BY ventas DESC LIMIT 3',(err, dat1, fields) =>{
	
		if(!err){
			res.json(dat1);
		
		}else{
			console.log(err);
		}
		
	});
},

actualizar: function (req, res) {

	var  id_venta = req.body.id_venta;
	var  estado = req.body.estado;

	db.query('UPDATE compras SET envio = ? WHERE  id = ? ', [estado,id_venta],(err, rows, fields) =>{
	

		if(!err){
			res.json('se actualzio');
		
		}else{
			console.log(err);
		}

	});
},
listarDetalle: function (req, res) {

	var  id = req.body.id;


	db.query("SELECT * FROM compras WHERE id = ? ", [id],(err, rows, fields) =>{
	

		if(!err){
			res.json(rows);
		
		}else{
			console.log(err);
		}

	});
},


	
}