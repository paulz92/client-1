import { default as $Document, Head, Main, NextScript } from 'next/document'

import { withTranslate } from '../utils'

@withTranslate(['common'])
export default class Document extends $Document {
  static async getInitialProps(ctx) {
    const { html, head, errorHtml, chunks } = ctx.renderPage()
    const { session } = ctx.req
    return { html, head, errorHtml, chunks, session }
  }

  render() {
    const { t } = this.props

    return (
      <html>
        <Head>
          {/* SEO */}
          <meta name="description" content={t`description`} />
          <meta name="keywords" content={t`keywords`} />
          {/* GENERAL META */}
          <meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
					<meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
          {/* CONTEXT */}
          <script
            id="session"
            type="application/json"
            dangerouslySetInnerHtml={{
              _html: JSON.stringify(this.props.session, null, 2)
            }}
          />
          {/* ASSETS */}
          <link rel="stylesheet" href="/public/global.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
