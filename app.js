require("babel-register");
const express = require('express')
const func = require('functions')
const app = express()
var morgan = require('morgan')
app.use(morgan('dev'))


members = [ {
    id : 1,
    name : "daouda"
},
{
    id : 2,
    name : "mamy"
},
{
    id : 3,
    name : "fatou"
}
]

app.get('/api/members/:id' , (req,res) =>
res.send(func.success(members[(req.params.id)-1].name)))

app.get('/api/members' , (req,res) =>
res.send(func.success(members)))

app.listen(8888, () => 
console.log("On est bien connecte"))


