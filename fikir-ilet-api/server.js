const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Fikir = require('./models/Fikir')
const Admin =require('./models/Admin');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb+srv://mongoose:123@cluster0.8f7jr.mongodb.net/fikirilet?retryWrites=true&w=majority";

mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    (err) => {
        if (err) throw err
        console.log("veritabanı girişi başarılı");
    }
)

app.get('/kullanici', (req, res) => {
    res.send({
        ad: 'Mertbaba',
        soyad: 'Okulmuş',
    })
})

app.post('/fikirkaydet', (req, res) => {

   const {fullname,email,typeofidea,idea} = req.body;
   Fikir.create({
        fullname,
        email,
        typeofidea,
        idea
   },err=>{
       if(err) res.sendStatus(400);
       res.sendStatus(200);
       
   })

  /* console.log(req.body);
    var new_save = new Article(req.body)
     console.log(new_save);
     new_save.save((err) => {
        if (err) throw err
        consol.log("Veri başarı ile kaydedildi!");
    })*/
})

app.post('/admin',(req,res)=>{
    const {fullName,password}=req.body;   
    Admin.find({fullname:fullName})
    .then(doc=> {
        if(doc[0].password  != password ) {}
        else res.sendStatus(200)
    })
})

app.get('/fikirler',(req,res)=>{
    Fikir.find()
    .then(docs=>{
        res.send(docs)
    })
})

app.listen(5555)

