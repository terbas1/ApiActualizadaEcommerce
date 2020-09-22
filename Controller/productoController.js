
const mysql = ('mysql');
const fs = require('fs');
const fileUpload = require('express-fileupload');
const db= require('../DataBase');

module.exports = {
	show: function (req, res) {

		db.query('SELECT * FROM producto LEFT JOIN categoria ON producto.categoria_id = id_categoria',(err, rows, fields) =>{

			if(!err){
				res.json(rows);
			}else{
				
				console.log(err);
			}

		});
	},

	codigo: function(req,res){
		let codigo= req.body.codigo;	
		if (codigo) {
		db.query("SELECT * FROM producto WHERE codigo = ? ", [codigo], (err, rows, fields) =>{
			if (!err ) {
			
			//res.json('Usuario logueado');
				//res.json(rows);
				res.json(rows);
				//console.log(rows[0].nombre_producto);

			} else {
				res.json(err);
			}			
			res.end();
		});
	} else {
		res.json('No se recibio el codigo del producto');
		res.end();
	}


	},
		idProducto: function(req,res){
		let id_producto= req.body.id_producto;	
		if (id_producto) {
		db.query("SELECT * FROM producto WHERE id_producto = ? ", [id_producto], (err, rows, fields) =>{
			if (!err ) {
			
			//res.json('Usuario logueado');
				//res.json(rows);
				res.json(rows);
				//console.log(rows[0].nombre_producto);

			} else {
				res.json(err);
			}			
			res.end();
		});
	} else {
		res.json('Me tienes que enviar el codigo del producto');
		res.end();
	}


	},

  eliminar: function (req, res) {
var  id_producto = req.params.id_producto;
		db.query('DELETE   FROM producto WHERE id_producto = ? ',[id_producto],(err, rows, fields) =>{

			if(!err){
				return res.status(200).send({
					producto:rows
				})

			}else{
				console.log(err);

			}

 	   //console.log(rows);
		
		

		});
	},
			adminListar: function (req, res) {

		db.query('SELECT * FROM producto LEFT JOIN categoria ON producto.categoria_id = id_categoria',(err, rows, fields) =>{

			if(!err){


					return res.status(200).send({
					producto:(rows),
					message: " se guardo el producto"

				})

			}else{
				console.log(err);
			}

		});
	},
		actualizar: function (req, res) {
		var  id_producto = req.params.id_producto;
		
     let nombre_producto = req.body.nombre_producto;
       let precio = req.body.precio;
         let stock = req.body.stock;
           let descripcion = req.body.descripcion;
             let categoria_id = req.body.categoria_id;
                let codigo = req.body.codigo;


		db.query('UPDATE producto SET nombre_producto = ? ,precio= ?, stock=?,descripcion = ?, categoria_id = ?, codigo=? WHERE  id_producto = ?', [nombre_producto, precio,stock,descripcion,categoria_id,codigo,id_producto],(err, rows, fields) =>{

			if(!err){

				db.query("SELECT * FROM producto WHERE id_producto = ? ", [id_producto], (err, rows, fields) =>{
			if (!err ) {
		return res.status(200).send({
					producto:({id_producto:rows[0].id_producto,nombre_producto: rows[0].nombre_producto,precio:rows[0].precio ,stock:rows[0].stock,imagen:rows[0].imagen,descripcion:rows[0].descripcion,categoria_id:rows[0].categoria_id,codigo:rows[0].codigo}),
					message: " se actualizo el producto"

				})
			

			} else {
				res.json(err);
			}			
			res.end();
		});
				

			}else{
				console.log(err);
			}

		});
	},
			registro: function(req,res){
	 let nombre_producto = req.body.nombre_producto;
	 let precio = req.body.precio;
     let stock= req.body.stock;
  
     let descripcion = req.body.descripcion;
     let categoria_id = req.body.categoria_id;
     let codigo = req.body.codigo;


	db.query("INSERT INTO producto SET ? ", {  nombre_producto:nombre_producto,  precio:precio,stock:stock,descripcion:descripcion  ,categoria_id:categoria_id, codigo:codigo}, (err, rows, fields) =>{

			if(!err){
			
				console.log("se inserto los datos");
				//console.log(rows)
				return res.status(200).send({
					producto:({id_producto: rows.insertId, nombre_producto,precio,stock,descripcion,categoria_id,codigo}),
					message: " se guardo el producto"

				})

			}else{
				//console.log(err);
				console.log("Hay datos duplicados");
			}

		});
		
	},
	crear: function (req, res) {

		var  id_producto = req.params.id_producto;

		var fileName='no subido';
		if(req.files){
			var filePath = req.files.imagen.path;
			var fileSplit = filePath.split('\\images\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			//var ruta = "http:35.164.145.112/images/"+fileName;
			var ruta = "http://35.164.145.112:3000/images/"+fileName;

			if(fileExt =='png' || fileExt =='jpg' || fileExt =='jpeg' || fileExt =='gif'){
			db.query("UPDATE producto SET imagen = ? WHERE  id_producto = ?", [ruta, id_producto], (err, rows, fields) =>{
				if(!err){
			
				console.log("se inserto la imagen");
				//console.log(rows)
				//res.json(rows);
			}else{
				console.log(err);
			}

			});
			//console.log(req.files);
			return res.status(200).send({
				files:fileName,
				files:req.files
			})

			}else{
				fs.unlink(filePath,(err)=>{
					return res.status(200).send({message: 'La extensión no es valida'})

				});

			}
	
			
		}else{
			return res.status(200).send({
				message:fileName
			});
		}
			
	},
		obtener: function(req,res){
var  id_producto = req.params.id_producto;

	if (id_producto) {
		db.query("SELECT * FROM producto WHERE id_producto = ? ", [id_producto], (err, rows, fields) =>{
			if (!err ) {
			
				return res.status(200).send({
					producto:({id_producto:rows[0].id_producto,nombre_producto: rows[0].nombre_producto,precio:rows[0].precio ,stock:rows[0].stock,imagen:rows[0].imagen,descripcion:rows[0].descripcion,categoria_id:rows[0].categoria_id,codigo:rows[0].codigo})

			
			});
			

			} else {
				res.json(err);
			}			
			res.end();
		});
	} else {
		res.json('nose encontro el producto');
		res.end();
	}
}





}




