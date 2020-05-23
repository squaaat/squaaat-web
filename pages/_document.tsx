import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta httpEquiv='Content-Security-Policy' />
          <link
            href='https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700&display=swap&subset=korean'
            rel='stylesheet'
          />
          <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' rel='stylesheet' />
          <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}