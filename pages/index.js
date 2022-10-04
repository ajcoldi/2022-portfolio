import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

export default function Home() {
  return (
      <main className={styles.main}>
         <div className={styles.profileDescription}>
          <h1>Welcome.</h1>   
      




          <p>
            I'm a passionate developer with a broad skillset. 
          </p>
          <br/>
          <p>
            My favourite tech stack is PERN however I've gained exposure to many technologies and can adapt to new technologies quickly.
          </p>
          <br/>
          <p>
            Being artistic I’m a competent designer and have comercial expirience designing UI components with industry standard tools.
          </p>
          <br/>
          <p>
            Recently I’ve been learning BabylonJS and have breifly used this technology in a commercial setting. 

          </p>
        </div>
        <div className={styles.stackList}>
          <ul>
            <li className={styles.li}>
              <Image src='/stack_icons/react.svg' height={"40px"} width={"40px"}/>
              <p>React</p>
            </li>
            <li className={styles.li}>
              <Image src='/stack_icons/nextjs-icon.svg' height={"40px"} width={"40px"}/>
              <p>Nextjs</p>
            </li>
            <li className={styles.li}>
              <Image src='/stack_icons/postgresql.svg' height={"40px"} width={"40px"}/>
              <p>Postgresql</p>
            </li>
            <li className={styles.li}>
              <Image src='/stack_icons/mongodb-icon.svg' height={"40px"} width={"40px"}/>
              <p>MongoDB</p>
            </li>
            <li className={styles.li}>
              <Image src='/stack_icons/nodejs-icon.svg' height={"40px"} width={"40px"}/>
              <p>Nodejs</p>
            </li>
         
          </ul>
        </div>
       
      </main>
  )
}
