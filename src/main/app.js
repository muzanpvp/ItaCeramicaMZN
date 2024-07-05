//Importação Framework Express
const express = require('express'); 
//const authRoutes = require('/routes/auth-routes')
//App
const app = express();

//app.use('/auth',authRoutes);

//Rota Home
app.get('/',(req,res)=>{
    app.render('/views/shared/home')
});
//Iniciar Servidor
app.listen('5500');