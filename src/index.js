const express = require('express')
require('./db/mongoose')
const NewsRouter = require('./routers/news')

const app = express()
const port = 3000

app.use(express.json())
app.use(NewsRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})