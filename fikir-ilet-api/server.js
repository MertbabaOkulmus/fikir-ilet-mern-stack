const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Article = require('./models/Article')

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

  /* const {fullname,email,typeofidea,idea} = req.body;
   Article.create({
        fullname,
        email,
        typeofidea,
        idea
   },err=>{
       if(err) throw err;
       console.log("Kayıt başarılı");
   })*/

   // console.log(req.body);
    var new_save = new Article(req.body)
     console.log(new_save);
     new_save.save((err) => {
        if (err) throw err
        consol.log("Veri başarı ile kaydedildi!");
    })

})

app.listen(5555)

