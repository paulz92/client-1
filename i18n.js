'use strict'

const i18n = require('i18next'),
  xhr = require('i18next-xhr-backend'),
  langDetector = require('i18next-browser-languagedetector')

const options = {
  fallbackLng: 'en',
  load: 'languageOnly',
  ns: ['common'],
  defaultNs: 'common',
  debug: true,
  saveMissing: true,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
    format: (value, format, lng) => (
      format === 'uppercase' ? value.toUpperCase() : value
    )
  }
}

if (process.browser)
  i18n
    .use(xhr)
    .use(langDetector)

if (!i18n.isInitialized)
  i18n.init(options)

i18n.getInitialProps = (req, namespaces) => {
  if (!namespaces)
    namespaces = i18n.options.defaultNS

  if (typeof namespaces === 'string')
    namespaces = [namespaces]

  req.i18n.toJSON = () => null

  const initialI18nStore = {}
  req.i18n.languages.forEach(l => {
    initialI18nStore[l] = {}
    namespaces.forEach(ns => {
      initialI18nStore[l][ns] = req.i18n.services.resourceStore.data[l] ?
        req.i18n.services.resourceStore.data[l][ns] || {} : {}
    })
  })

  return {
    i18n: req.i18n,
    initialI18nStore,
    initialLanguage: req.i18n.language
  }
}

module.exports = i18n
