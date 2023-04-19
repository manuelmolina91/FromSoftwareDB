const express = require('express')
const bodyParser = require('body-parser')
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