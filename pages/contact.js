import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

export default function Home() {
  return (
      <main className={styles.main}>
        <h2>Contact.</h2>
         <form>
            <input/>
            <button>Submit</button>
         </form>
       
      </main>
  )
}
