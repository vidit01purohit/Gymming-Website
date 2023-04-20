const express = require('express');
const Blog= require('./models/blogs');

// express app
const app = express();

const mongoose=require('mongoose'); 

//connect to mongodb

const dburi="mongodb+srv://newusergymseb:RVGLkBTNBZ3jJvTs@cluster0.wgliq22.mongodb.net/PersonalInfo?retryWrites=true&w=majority";
mongoose.connect(dburi)
.then((results)=>app.listen(800,()=>
    console.log('listening on port 3000')))
.catch((err)=>console.log('Not connected'))

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.post('/form-submited',(req,res)=>{
    const blog=new Blog(req.body);

    blog.save()
    .then((result)=>{
      res.send('<h1>Hurray! form submited.</h1>');
    })
    .catch((err)=>{
      console.log(err);
    })

});

app.get('/', (req, res) => {
  res.sendFile('./views/Home.html', { root: __dirname });
});

app.get('/Home', (req, res) => {
  res.redirect('/');
});

app.get('/About', (req, res) => {
  // res.send('<p>about page</p>');
  res.sendFile('./views/Aboutus.html', { root: __dirname });
});

//redirects
app.get('/Aboutus', (req, res) => {
  res.redirect('/About');
});

app.get('/fitnesscalculator', (req, res) => {
  // res.send('<p>about page</p>');
  res.sendFile('./views/fitnesscalculator.html', { root: __dirname });
});

app.get('/Contactus', (req, res) => {
  // res.send('<p>about page</p>');
  res.sendFile('./views/Contactus.html', { root: __dirname });
});

// 404 page
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});
