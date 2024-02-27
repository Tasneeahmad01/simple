const express = require("express");
const app = express();
const port = 3000;
 const path = require("path");
 app.use (express.urlencoded({extended:true}));
app.set("view engine" ,"ejs");
app.set("views", path.join(__dirname,"views"));
  app.use(express.static(path.join(__dirname,"public")));
let posts = [
 {
    username:"Mangole",
    content:"You are very wrong",
 },
 {
    username:"Mangole",
    content:"You are very grow",
 },
 {
    id :2, 
    username:"Mango",
    content:"You are very sweet",
 },
];
app.get ("/post",(req,res)=>{
res.render("index.ejs",{posts});
});
 
app.listen(port,()=>{
    console.log("listening to port : 3000");
});
