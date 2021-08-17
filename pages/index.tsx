import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/page/Index.module.scss'

/**
 * Props for an Info Card on the homepage.
 * @argument title Title
 * @argument description Description Array
 */
type InfoCardProps = {
  title: string
  description: string[]
}

function InfoCard({ title, description }: InfoCardProps) {
  const desc = description.map((d) => (
    <div key={d} className={styles.infodescription}>
      {d}
    </div>
  ))
  return (
    <div className={styles.info}>
      <div className={styles.infotitle}>{title}</div>
      <div className={styles.infodescriptioncontainer}>{desc}</div>
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <div id={styles.homepage}>
      <div className={styles.infocontainer}>
        <InfoCard
          key="0"
          title="Learn it all"
          description={[
            'Linux command-line',
            'Linux architecture',
            'Software Development in Linux',
          ]}
        />
      </div>
    </div>
  )
}

export default Home
