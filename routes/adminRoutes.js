const Router = require('express').Router();


Router.get('/admin',(req,res) => {
    // console.log('Homepage')
    res.redirect('/')
})

Router.post('/admin/:num',(req,res) => {
    console.log(req.params.num)
    res.send('<h1>POST Admin Page</h1>')
})

module.exports = Router