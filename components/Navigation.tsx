import Link from 'next/link'
import TerminalSVG from './svg/TerminalSVG'
import LearnSVG from './svg/LearnSVG'
import FAQSVG from './svg/FAQSVG'
import AuthSVG from './svg/AuthSVG'
import styles from '../styles/component/Navigation.module.scss'
import { version } from '../package.json'

export default function Navigation() {
  return (
    <div id={styles.navigation}>
      <Link href="/" passHref>
        <div id={styles.logo}>
          <TerminalSVG />
          <div>v{version}</div>
        </div>
      </Link>
      <div id={styles.navlist}>
        <div className={styles.navitem}>
          <LearnSVG />
          <div className={styles.navitemtext}>Learn</div>
        </div>
        <div className={styles.navitem}>
          <FAQSVG />
          <div className={styles.navitemtext}>FAQ</div>
        </div>
        <div className={styles.navitem}>
          <AuthSVG />
          <div className={styles.navitemtext}>Login</div>
        </div>
      </div>
    </div>
  )
}
