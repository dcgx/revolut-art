import Head from 'next/head'
import { ScriptProps } from 'next/script'

const BaseLayout = ({ children }: ScriptProps) => {
  return (
    <div id="main">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </div>
  )
}

export default BaseLayout