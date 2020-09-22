
const mysql = ('mysql');

const db= require('../DataBase');



module.exports = {
	show: function (req, res) {

		db.query('SELECT * FROM usuario',(err, rows, fields) =>{

			if(!err){
				res.json(rows);
			}else{
				console.log(err);
			}

		});
	},

	create: function(req,res){
		
	 let nombre = req.body.nombre;
	 let apellido = req.body.apellido;
     let correo= req.body.correo;
     let password = req.body.password;
     let telefono = req.body.telefono;
     let dni = req.body.dni;
     let fecha_nacimiento = req.body.fecha_nacimiento;

		db.query("INSERT INTO usuario SET ? ", { nombre, apellido,correo,password,telefono,dni,fecha_nacimiento }, (err, rows, fields) =>{

			if(!err){
				res.json({id: rows.insertId, nombre,apellido,correo,password,telefono,dni,fecha_nacimiento});
				console.log({id: rows.insertId, nombre,apellido,correo,password,telefono,dni,fecha_nacimiento});
				//console.log(rows)
				//res.json(rows);
			}else{
				return res.status(500).send({
				message: "fallo al registrarse"
			})
			}

		});
		
	},



	login: function(req,res){
		let correo= req.body.correo;
		let password = req.body.password;

	if (correo && password) {
		db.query("SELECT * FROM usuario WHERE correo =? AND password =? ", [correo,password], (err, rows, fields) =>{
			if ( rows[0] != null) {
			
			
				res.json({id_usuario:rows[0].id_usuario,nombre: rows[0].nombre,apellido:rows[0].apellido ,correo:rows[0].correo,password:rows[0].password,telefono:rows[0].telefono,dni:rows[0].dni,fecha_nacimiento:rows[0].fecha_nacimiento});
				console.log(rows[0].nombre);
			
			
			} else {
			return res.status(500).send({
			
				message: "El usuario no existe"
			});
			}			
			res.end();
		});
	} else {
		return res.status(500).send({
			
				message: "error al iniciar sesión"
			});
	
	}


	}



};
