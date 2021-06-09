const bodyParser = require('body-parser')
const express = require('express')
const next = require('next')

const api = require('./src/api')

const app = express()
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api', api)

app.get('*', handle)

nextApp
  .prepare()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => console.log('listening'))
  })
  .catch((ex) => {
    // eslint-disable-next-line no-console
    console.error(ex.stack)
    process.exit(1)
  })
