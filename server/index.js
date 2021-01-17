const express = require('express')
const cors = require('cors')
const usersRouter = require('./routes/users')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/users', usersRouter)

const PORT = process.env.PORT | 8080

app.listen(PORT, () => {
    console.log(`Server run on PORT: ${PORT}`)
})