import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <main className={styles.main}>

        <div className={styles.row1}>
          <div className={styles.logo}>
            <Image priority={true} alt='logo-image'  src='/project_images/logo.png' height={"206px"} width={"352px"}/>
          </div>

          <div className={styles.profileDescription}>
            <h1>Hi,</h1>   
            <p>
            Welcome!, I&apos;m Alex, a Web Designer and Developer fueled by a passion for crafting exceptional digital experiences. I strive to deliver innovative solutions that leave a lasting impression.
            </p>
            <hr/>
            <p>
          
                With a passion for crafting captivating digital experiences, I bring ideas to life through web design and development.
            </p>
          </div>

         

        </div>
        <hr className={styles.rowSpacer}></hr>
        <div className={styles.row2}>
            <h3>About Me</h3>
            <div className={styles.recentProjectsContainer}>
              <p>I specialize in using React/Next on the front end, Node.js on the backend, and PostgreSQL as a robust database system. My previous work includes an exciting AR presentation prototype aimed at revolutionizing teaching and learning experiences for universities. I strive to push boundaries and create interactive, responsive, and alternate reality solutions.</p>
              <br/>
              <p>What sets me apart is my unwavering dedication to learning and improvement. Programming is not just a profession but a lifelong pursuit for me. I spend my spare time coding, constantly exploring peripheral areas to gain a comprehensive understanding of the complete picture.</p>
              <br/>
              <p>Currently, my focus lies in API design and implementation, as I&apos;m eager to delve into the world of SAAS (Software as a Service). My problem-solving process starts with pen and paper, mapping out the flow and structure before building a rough version to address any potential issues.</p>
              <br/>
              <p>While I thoroughly enjoy collaborating and contributing to group projects, I am also highly adept at working independently, efficiently managing my own workload. Continuous growth and expertise development in web development technologies are my aspirations, driven by the fascinating and ever-changing landscape of the field.</p>
            </div>
        </div>
        <div className={styles.row2} style={{marginTop: "30px"}}>
          <h3>Skills</h3>
          <div className={styles.stackList}>
            <ul>
              <li className={styles.li}>
                
                <Image alt='icon-thumbnail' src='/project_images/react.svg' height={"40px"} width={"40px"}/>
                <p>React</p>
              </li>
              <li className={styles.li}>
                <Image alt='icon-thumbnail' src='/project_images/nextjs-icon.svg' height={"40px"} width={"40px"}/>
                <p>Nextjs</p>
              </li>
              <li className={styles.li}>
                <Image alt='icon-thumbnail' src='/project_images/postgresql.svg' height={"40px"} width={"40px"}/>
                <p>Postgresql</p>
              </li>
              <li className={styles.li}>
                <Image alt='icon-thumbnail' src='/project_images/mongodb-icon.svg' height={"40px"} width={"40px"}/>
                <p>MongoDB</p>
              </li>
              <li className={styles.li}>
                <Image alt='icon-thumbnail' src='/project_images/nodejs-icon.svg' height={"40px"} width={"40px"}/>
                <p>Nodejs</p>
              </li>
              <li className={styles.li}>
                <Image alt='icon-thumbnail' src='/project_images/react.svg' height={"40px"} width={"40px"}/>
                <p>React</p>
              </li>
              <li className={styles.li}>
                <Image alt='icon-thumbnail' src='/project_images/nextjs-icon.svg' height={"40px"} width={"40px"}/>
                <p>Nextjs</p>
              </li>
              <li className={styles.li}>
                <Image alt='icon-thumbnail' src='/project_images/postgresql.svg' height={"40px"} width={"40px"}/>
                <p>Postgresql</p>
              </li>
              <li className={styles.li}>
                <Image alt='icon-thumbnail' src='/project_images/mongodb-icon.svg' height={"40px"} width={"40px"}/>
                <p>MongoDB</p>
              </li>
              <li className={styles.li}>
                <Image alt='icon-thumbnail' src='/project_images/nodejs-icon.svg' height={"40px"} width={"40px"}/>
                <p>Nodejs</p>
              </li>
          
            </ul>
          </div>
        </div>
       

       
       
      </main>
  )
}
