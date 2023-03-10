import { NextUIProvider } from '@nextui-org/react'
import { AppProps } from 'next/app'
import { Header } from '../../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Header/>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp