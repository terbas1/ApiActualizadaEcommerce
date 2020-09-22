var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var multipart = require('connect-multiparty');
var logger = require('morgan');
var bodyParser = require('body-parser');
//var db = require('./database');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//var adminRouter = require('./routes/admin');
var usuarioRouter = require('./routes/usuario');

var productoRouter = require('./routes/producto');
var categoriaRouter = require('./routes/categoria');
var facturaRouter = require('./routes/factura');
var detalleFacturaRouter = require('./routes/detalleFactura');




//Rutas proyecto Ecommerce
var usuarioRouter = require('./routes/admin');
var ventasRouter = require('./routes/ventas');


var app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use('/', indexRouter);
app.use('/users', usersRouter);
//app.use('/admin', adminRouter);
app.use('/usuario', usuarioRouter);
app.use('/categoria', categoriaRouter);
app.use('/producto', productoRouter);
app.use('/factura', facturaRouter);
app.use('/detalleFactura', detalleFacturaRouter);


//Proyecto ecommerce
app.use('/loginUser', usuarioRouter);
app.use('/listaVentas', ventasRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
