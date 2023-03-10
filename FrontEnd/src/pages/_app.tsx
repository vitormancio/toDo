import { AppProps } from 'next/app'
import { Header } from '../../components/Header'
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
    <NextUIProvider theme={darkTheme} >
      <Header/>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp