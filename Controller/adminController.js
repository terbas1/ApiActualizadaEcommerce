
const mysql = ('mysql');

const db= require('../DataBase');



module.exports = {
	show: function (req, res) {

		db.query('SELECT * FROM administradores',(err, rows, fields) =>{

			if(!err){
				res.json(rows);
			}else{
				console.log(err);
			}

		});
	},


	login: function(req,res){

		let correo= req.body.correo;
		let password = req.body.password;

		console.log(correo);

	if (correo && password) {

		db.query("SELECT * FROM administradores WHERE email =? AND password =? ", [correo,password], (err, rows, fields) =>{
			if ( rows[0] != null) {
			
			
				res.json({nombre: rows[0].nombre,perfil:rows[0].perfil });
				
				console.log(rows[0].nombre,rows[0].perfil);
			
			
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
}