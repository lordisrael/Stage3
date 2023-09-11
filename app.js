const express = require('express')
require('dotenv').config()

const app = express()


const notFoundMiddleware = require('./middleware/not-Found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const authRoute = require('./routes/authRoutes')

const dbConnect = require('./config/db')

app.use(express.json())

app.use('/api', authRoute)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const port = process.env.PORT||3000

const start = async() => {
    try {
        await dbConnect(process.env.MONGO_URI)
        app.listen(port, () => {
            
            console.log(`Server is listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}
start()