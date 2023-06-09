const express = require('express')
const bodyParser = require('body-parser')
const authRoutes = require('./src/routes/auth')
const { ensureAuthentication } = require('./src/middleware/auth')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()

const startApp = async () => {
    dotenv.config()
    app.use(cors())
    const port = process.env.PORT | 8000

    app.use(bodyParser.json())
    app.use(
        bodyParser.urlencoded({
            extended: true,
        })
    )
    app.use(ensureAuthentication)
    app.use('/auth', authRoutes)

    try {
        app.listen(port, () => {
            console.log('APP running on port ' + port)
        })
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

startApp()