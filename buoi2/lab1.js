// let a=10
// let b=11
// function total(x,y){
//     setTimeout(()=>{
//     let total = x+y;
//     console.log (total);
//     },0);
// }
// total(a,b);
// console.log("end!!!");
const express = require("express");
const app = express();
app.get("/contact",(req,res)=>{
    res.send("<h1>hello home</h1>");
});
app.listen(3000,()=>{
    console.log("Server Started!!!");

});

