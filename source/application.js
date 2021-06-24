const hbs = require('hbs')
const express = require('express')

const path = require('path')


// const pug = require("pug")
const app = express()
require("./db/mong")
const port = process.env.PORT || 3000

const static_path = path.join(__dirname, "./public")
const template_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

app.use(express.static(static_path))

app.set("views engine", "hbs");
app.set("views", template_path)
hbs.registerPartial(partials_path)


// console.log(path.join(__dirname,));
app.get('/', (req, res) => {
    res.render('index');
})
app.listen(port, () => {
    console.log(`server on ${port}`);

})