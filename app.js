const express = require('express')
require('dotenv').config()

const app = express()


const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')

const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')

const notFoundMiddleware = require('./middleware/not-Found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const authRoute = require('./routes/authRoutes')

const dbConnect = require('./config/db')

app.set('trust proxy', 1)
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100
  })
)
app.use(express.json());
app.use(helmet())
app.use(cors())
app.use(xss())


app.get('/', (req, res) => {
    res.send('<h1>E commerce</h1><a href="/api-docs">Documentation</a>')
})
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
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