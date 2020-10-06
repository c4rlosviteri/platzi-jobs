require('dotenv').config()
const express = require('express')
const axios = require('axios')
const qs = require('query-string')
const cors = require('cors')
const React = require('react')
const { renderToString } = require('react-dom/server')
const { default: App } = require('../client/app')

const app = express()
const githubJobsApi = 'https://jobs.github.com/positions.json'
const PORT = process.env.PORT || 3000

app.use(cors())

function setResponse(html) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Platzi Frontend Test" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" />
        <link rel="stylesheet" href="/assets/style.css" />
        <title>Platzi Frontend Test</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/assets/bundle.js"></script>
      </body>
    </html>
  `
}

function renderApp(req, res) {
  const html = renderToString(<App />)
  res.send(setResponse(html))
}

if (process.env.ENV === 'development') {
  const webpack = require('webpack')
  const config = require('../../webpack.config')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(config)
  const serverConfig = { port: PORT, hot: true }

  app.use(webpackDevMiddleware(compiler, serverConfig))
  app.use(webpackHotMiddleware(compiler))
} else {
  const helmet = require('helmet')

  app.use(express.static(`${__dirname}/public`))
  app.use(helmet())
  app.use(helmet.permittedCrossDomainPolicies())
  app.disable('x-powered-by')
}

app.get('/', (req, res) => {
  renderApp(req, res)
})

app.get('/positions', (req, res) => {
  const { description, location } = req.query
  const url = qs.stringifyUrl({
    url: githubJobsApi,
    query: { description, location },
  })

  axios
    .get(url)
    .then((response) => res.json(response.data))
    .catch((error) => console.error(error))
})

app.listen(PORT, (err) => {
  if (err) console.error(err)
  console.log(`App listening at http://localhost:${PORT}`)
})
