import type { AppProps } from 'next/app'
import "@/styles/globals.css" //Serve per applicare tailwind in tutto il progetto

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
