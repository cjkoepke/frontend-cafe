import Document, { Head, Main, NextScript } from 'next/document';
import * as colors from '../utils/colors';
import { ServerStyleSheet, injectGlobal } from 'styled-components';
import { normalize } from 'polished';

injectGlobal`
    ${normalize()}
    body {
        background: url('/static/curve.svg');
        background-size: cover;
        background-position: top left;
        background-color: ${colors.base.light};
        color: ${colors.base.dark};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
        font-size: 20px;
        font-weight: 300;
    }
`

export default class MyDocument extends Document {
    render() {
        const sheet = new ServerStyleSheet();
        const main = sheet.collectStyles(<Main/>);
        const styleTags = sheet.getStyleElement();
        return (
            <html>
                <Head>
                    <title>Frontend.Cafe</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    {styleTags}
                </Head>
                <body>
                    <div className="root">
                        {main}
                    </div>
                    <NextScript />
                </body>
            </html>
        )
    }
}
