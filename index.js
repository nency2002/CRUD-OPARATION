const express = require("express");
const connect = require("./config/db");
const router = require("./routes/product.route");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true }))
app.use(cors());
app.set('view engine',"ejs");
app.set("views",__dirname+'/views');
app.use(express.static(__dirname+'/public'));
app.use("/product",router)


app.listen(8090 , () => {
    connect();
    console.log("listening on port 8090");
})

