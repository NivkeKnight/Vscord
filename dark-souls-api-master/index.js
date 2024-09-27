const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 8080
const routes = require('./routes')

app.use(cors())
app.use('/api', routes)
app.listen(PORT, function(){
    console.log('Server initiated')
})