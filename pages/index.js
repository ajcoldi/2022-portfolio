import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

export default function Home() {
  return (
      <main className={styles.main}>
        
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
            <li className={styles.li}>
              <Image src='/stack_icons/nodejs-icon.svg' height={"40px"} width={"40px"}/>
              <p>Adobe illustrator</p>
            </li>
            <li className={styles.li}>
              <Image src='/stack_icons/nodejs-icon.svg' height={"40px"} width={"40px"}/>
              <p>Photoshop</p>
            </li>
          </ul>
        </div>
        <div className={styles.profileDescription}>
          <p>
            I'm a passionate developer with a broad skillset. Being artistic are enjoy design and have
            a strong ability to create good looking concepts for components and pages using Adobe 
            illustator and photoshop
          </p>
          <br/>
          <p>
            My favourite tech stack is PERN however I've gained exposre to many technologies and can adapt
            to new technologies quickly
          </p>
          <br/>
          <p>
            Lately I have dived into database design and implimentation and have found a real passion for
            piecing together more complex projects. Another technology that I've been experimenting with
            is Babylonjs as I beleive there will soon be a huge demand for WebXR technologies 
            and I want to be ahead of the curve.
          </p>
        </div>
      </main>
  )
}
