import Link from 'next/link'
import TerminalSVG from './svg/TerminalSVG'
import styles from '../styles/component/Navigation.module.scss'
import { version } from '../package.json'

export default function Navigation() {
  return (
    <div id={styles.navigation}>
      <Link href="/">
        <div id={styles.logo}>
          <TerminalSVG />
          <div>v{version}</div>
        </div>
      </Link>
    </div>
  )
}
