
const mysql = ('mysql');

const db= require('../DataBase');



module.exports = {
	
	show: function (req, res) {

		db.query('SELECT * FROM detallefactura',(err, rows, fields) =>{

			if(!err){
				res.json(rows);
			}else{
				console.log(err);
			}

		});
	},

		create: function(req,res){
	 let id_factura = req.body.id_factura;
	 let id_producto = req.body.id_producto;
     let cantidad= req.body.cantidad;
 
     let precio_unitario = req.body.precio_unitario;
     let subtotal = req.body.subtotal;
   

		db.query("INSERT INTO detallefactura SET ? ", { id_factura, id_producto,cantidad,precio_unitario,subtotal }, (err, rows, fields) =>{

			if(!err){
				res.json({id: rows.insertId,id_factura, id_producto,cantidad,precio_unitario,subtotal});
				console.log({id: rows.insertId,id_factura, id_producto,cantidad,precio_unitario,subtotal});
				//console.log(rows)
				//res.json(rows);
			}else{
				//console.log(err);
				console.log("Hay datos duplicados");
			}

		});
		
	},
}
