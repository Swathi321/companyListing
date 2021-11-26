const express = require('express')
const app = express();
const mongoose = require('mongoose');
const companyRouter = require('./routers/companyRouter')
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/company', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('connected to database');
})
app.use('/company', companyRouter)
app.listen(3000, () => {
    console.log("server connected");
})
