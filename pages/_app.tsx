import '../styles/index.scss'
import '../styles/font.scss'
import Navigation from '../components/Navigation'
import type { AppProps } from 'next/app'

function Application({ Component, pageProps }: AppProps) {
  return (
    <div id="root">
      <Navigation />
      <Component {...pageProps} />
    </div>
  )
}
export default Application
