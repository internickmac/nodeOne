const express =  require('express');
const app = express();
const morgan =  require('morgan');
const routes = require('./routes');
//settings
app.set("appName", "Mi primer server en node");
app.set('views', __dirname + '/views');

//middlewares
app.use(morgan('tiny'));

app.use((req,res,next) =>{
    console.log("a pasado por esta funcion" );
    next();
});

//routes
app.use(routes);

app.listen(3000, () => {
    console.log("Servidor levantdo");
    console.log("Nombre de la app:", app.get("appName"));
});