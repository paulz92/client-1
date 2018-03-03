import i18n from '../i18n'
import { translate } from 'react-i18next'

export const withTranslate = (namespaces = []) => (
  translate(namespaces, { i18n, wait: process.browser })
)
