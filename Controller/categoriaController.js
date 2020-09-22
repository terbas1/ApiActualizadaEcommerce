
const mysql = ('mysql');

const db= require('../DataBase');



module.exports = {
	show: function (req, res) {

		db.query('SELECT * FROM categoria',(err, rows, fields) =>{

			if(!err){
				res.json(rows);
			}else{
				console.log(err);
			}

		});
	},
	listarAdmin: function (req, res) {

		db.query('SELECT * FROM categoria',(err, rows, fields) =>{

			if(!err){
				return res.status(200).send({
					categoria:(rows),
					message: "categorias"

				})
			}else{
				console.log(err);
			}

		});
	},



		create: function(req,res){
	 let nombre_categoria = req.body.nombre_categoria;


		db.query("INSERT INTO categoria SET ? ", { nombre_categoria }, (err, rows, fields) =>{

			if(!err){
				res.json({id: rows.insertId,nombre_categoria });
				console.log({id: rows.insertId,nombre_categoria});
				//console.log(rows)
				//res.json(rows);
			}else{
				//console.log(err);
				console.log("Hay datos duplicados");
			}

		});
		
	},
	registro: function(req,res){
	 let nombre_categoria = req.body.nombre_categoria;


	db.query("INSERT INTO categoria SET ? ", { nombre_categoria }, (err, rows, fields) =>{

			if(!err){
			
				console.log("se inserto los datos");
				//console.log(rows)
				return res.status(200).send({
					categoria:({id_categoria: rows.insertId, nombre_categoria}),
					message: "Se guardo la categoria"

				})

			}else{
				//console.log(err);
				console.log("Hay fallos al registrar la categoria");
			}

		});
		
	},

}