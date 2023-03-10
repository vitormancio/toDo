import { AppProps } from 'next/app'
import { Header } from '../../components/Header'
import '../styles/globals.css'
// Css imports 
import { NextUIProvider } from '@nextui-org/react'
import { createTheme } from "@nextui-org/react"

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {},
  }
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Header/>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp