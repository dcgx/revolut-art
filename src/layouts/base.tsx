
import Head from 'next/head'
import { ScriptProps } from 'next/script'

const BaseLayout = ({ children }: ScriptProps) => {
  return (
    <div id="main">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"></link>
      </Head>
      {children}
    </div>
  )
}

export default BaseLayout