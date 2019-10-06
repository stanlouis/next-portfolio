import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
            <Head>
                <meta
                    name="description"
                    content="A site for my programming portfolio"
                />
                <meta charSet="utf-8" />
                <meta name="robots" content="noindex, nofollow" />
                <meta name="viewport" content="width=device-width" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                />
                <link rel="icon" href="/static/favicon.ico" importance="low" />
                <link href="https://fonts.googleapis.com/css?family=Cabin|Roboto:400,700|Roboto+Condensed:400,700" rel="stylesheet" />
                <title>NextJS Portfolio</title>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            <style global jsx>{`
          body {
            font-family: "Cabin", sans-serif;
          }
          h1,h2,h3,h4,h5,h6{
          font-family: "Roboto Condensed", sans-serif;
          }
        `}</style>
            </html>
        );
    }
}
