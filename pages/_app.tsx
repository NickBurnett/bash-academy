import '../styles/globals.css'
import Navigation from '../components/Navigation'
import type { AppProps } from 'next/app'

function Application({ Component, pageProps }: AppProps) {
  return (
    <div id="website">
      <Navigation />
      <Component {...pageProps} />
    </div>
  )
}
export default Application
