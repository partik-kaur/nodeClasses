const app = require('express')();

const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')


app.use('/',userRoutes);
app.use('/',adminRoutes);

app.use((req,res) => {
    res.send('<h1>Page Not Found</h1>')
})


app.listen(7000,() => {
    console.log('Running on port 7000')
})