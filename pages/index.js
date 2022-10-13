import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className={styles.homeTitle}>Welcome Home</h1>
    </div>
  )
}
