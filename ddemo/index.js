const express = require('express')
const app = express()
const port = 3000

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send(` <header>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/product">Product</a></li>
        </ul>
    </header>`)
});
app.get("/contact",(req,res)=>{
    res.render("contact");
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/Home",(req,res)=>{
    res.render("index");
});
app.get("/product",(req,res)=>{
    res.render("product");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})