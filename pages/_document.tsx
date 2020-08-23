import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <html>
        <Head>
          <meta httpEquiv="Content-Security-Policy" />
          {/* <!-- Google Tag Manager --> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KBMTNTT');
            `,
            }}></script>
          {/* <!-- End Google Tag Manager --> */}
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-169244071-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-169244071-1');
            `,
            }}></script>
          <link
            href="https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700&display=swap&subset=korean"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
        </Head>
        <body>
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KBMTNTT"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}></noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
