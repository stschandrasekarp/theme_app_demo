import Head from 'next/head';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import styles from "../styles/Home.module.scss";


export default function Home({ primary, secondary }) {

  useEffect(() => {
    var r = document.querySelector(':root');
    r.style.setProperty('--primary', primary);
    r.style.setProperty('--secondary', secondary);
  }, [])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout >
        <div className={styles.cards}>
          {[1, 2].map((i) => (
            <Card key={i} styles={styles} />
          ))}
        </div>
      </Layout>
    </div>
  )
}


export async function getServerSideProps() {
  // set theme
  const theme = {
    primary: 'rgb(253, 232, 239)',
    secondary: 'rgb(228, 42, 93)'
  }

  // pass theme to the components
  return {
    props: theme
  }
}
