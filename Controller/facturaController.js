
const mysql = ('mysql');

const db= require('../DataBase');
module.exports = {
	
	show: function (req, res) {

		db.query('SELECT * FROM factura',(err, rows, fields) =>{

			if(!err){
				res.json(rows);
			}else{
				console.log(err);
			}

		});
	},

	
		usuarioFactura: function (req, res) {
		let usuario_id= req.body.usuario_id;

		db.query('SELECT * FROM factura  WHERE usuario_id = ? ',[usuario_id],(err, rows, fields) =>{

			if(!err){
				res.json(rows);
			}else{
				console.log(err);
			}

		});
	},
			usuarioDetalleFactura: function (req, res) {
		let id_factura= req.body.id_factura;

		db.query('SELECT * FROM detallefactura  WHERE id_factura = ? ',[id_factura],(err, rows, fields) =>{

			if(!err){
				res.json(rows);
			}else{
				console.log(err);
			}

		});
	},

		create: function(req,res){
	 let fecha_pago = req.body.fecha_pago;
	 let total_pago = req.body.total_pago;
     let usuario_id= req.body.usuario_id;
     let tipo_factura= req.body.tipo_factura;
     let codigo_factura = req.body.codigo_factura;
     let tipo_tarjeta = req.body.tipo_tarjeta;
     let estado= req.body.estado;
     let marca_tarjeta = req.body.marca_tarjeta;

		db.query("INSERT INTO factura SET ? ", { fecha_pago, total_pago,usuario_id,tipo_factura,codigo_factura,tipo_tarjeta,marca_tarjeta,estado }, (err, rows, fields) =>{

			if(!err){
				res.json({id: rows.insertId,fecha_pago,total_pago,usuario_id,tipo_factura,codigo_factura,tipo_tarjeta,marca_tarjeta,estado});
				console.log({id: rows.insertId,fecha_pago,total_pago,usuario_id,tipo_factura,codigo_factura,tipo_tarjeta,marca_tarjeta,estado});
				//console.log(rows)
				//res.json(rows);
			}else{
				return res.status(500).send({
				message: "la estas cagando Jhonny"
				
			});

			}

		});
		
	},
}
