
const express = require('express');
const app = express();
const router =require('./routes/index.js');
// const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('connect-flash');
const customeMW = require('.//config/middleware');

//middleware to use assets
app.use(express.static('./assets'));
app.use(express.urlencoded({extended:true}));
app.use(expressLayouts);

//extract styles and scripts from layouts
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


//setting view engine as ejs
app.set('view engine', 'ejs');
app.set('views', './views');

// ************************  Database Connection  **********************************//
const {connectMonggose} = require('./config/mongoose')
connectMonggose();


//to create an duse sessions
const SECRET="secret";
app.use(session({
  secret: SECRET,
  saveUninitialized: true,
  resave: true
}));

//using connect-flash to display flash notification in FE
app.use(flash());
app.use(customeMW.setFlash);

//router
app.use('/', router);

// ************************   Port Start   ********************************//

app.listen(3000,()=>{
    console.log(`My server start on this port 3000`)
})
