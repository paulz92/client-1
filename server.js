'use strict'

const express = require('express'),
  cookieParser = require('cookie-parser'),
  next = require('next'),
  i18nMiddleware = require('i18next-express-middleware'),
  i18nBackend = require('i18next-node-fs-backend'),
  i18n = require('./i18n'),
  routes = require('./isomorphic/routes')

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev }),
  handler = routes.getRequestHandler(app)

i18n
  .use(i18nBackend)
  .use(i18nMiddleware.LanguageDetector)
  .init({
    fallbackLng: 'en',
    preload: ['en'], // langs to preload
    ns: ['common', 'home'], // namespaces
    backend: {
      loadPath: __dirname + '/locales/{{lng}}/{{ns}}.json',
      addPath: __dirname + '/locales/{{lng}/{{ns}}.missing.json'
    }
  }, () => {
    app.prepare()
      .then(() => {
        const server = express()

        server
          .use(cookieParser())
          .use(i18nMiddleware.handle(i18n))
          .use('/public', express.static(__dirname + '/public'))
          .use('/locales', express.static(__dirname + '/locales'))
          .post('/locales/add/:lng/:ns', i18nMiddleware.missingKeyHandler(i18n))
          .use(handler)
          .listen(3000, err => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
          })
      })
  })
