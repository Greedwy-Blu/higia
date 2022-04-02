import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head >
      <script  defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"/>
 
          </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}