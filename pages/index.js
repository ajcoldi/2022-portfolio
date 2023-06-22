import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
      <main className={styles.main}>

        <div className={styles.row1}>
          <div className={styles.logo}>
            
            <img priority={true} alt='logo-image'  src='https://res.cloudinary.com/dqkwveihk/image/upload/v1686766246/logo_tvokqw.png' height={"206px"} width={"352px"}/>

          </div>

          <div className={styles.profileDescription}>
            <h1>Hi,</h1>   
            <p>
            Welcome!, I&apos;m Alex,  Web Designer and Developer passionate about creating engaging digital experiences. With a continuous desire to learn and grow, I stay up-to-date with the latest trends and technologies in the field.
            </p>
            <hr/>
            <p>
                I&apos;m eager to contribute my skills and dedication to help you achieve your goals.
            </p>
          </div>

         

        </div>
        <hr className={styles.rowSpacer}></hr>
        <div className={styles.row2}>
            <h3>About Me</h3>
            <div className={styles.recentProjectsContainer}>
              <p>I specialize in using React/Next on the front end, Node.js on the backend, and PostgreSQL as a robust database system. My previous work includes an exciting AR presentation prototype aimed at revolutionizing teaching and learning experiences for universities</p>
              <br/>
              <p>What sets me apart is my unwavering dedication to learning and improvement. Programming is not just a profession but a passion to me. I spend my spare time coding, constantly exploring peripheral areas to gain a comprehensive understanding web technologies.</p>
              <br/>
              <p>Recently, my focus has centered around  API design and implementation.  However, I'm now excited to redirect my attention towards crafting immersive virtual reality web experiences with Babylon.js.</p>
              <br/>
              <p>While I thoroughly enjoy collaborating and contributing to group projects, I am also highly adept at working independently, efficiently managing my own workload. Continuous growth and expertise development in web development technologies are my aspirations, driven by the fascinating and ever-changing landscape of the field.</p>
            </div>
        </div>
        <div className={styles.row2} style={{marginTop: "30px"}}>
          <h3>Skills</h3>
          <p>I've gained exposure to many technologies over the years, and I've developed a strong preference for and proficiency in the following:</p>
          <div className={styles.stackList}>

            <ul>
              <li className={styles.li}>
              <img priority={true} alt='icon-thumbnail' src='https://res.cloudinary.com/dqkwveihk/image/upload/v1686766246/react-icon_taqfax.png' height={"40px"} width={"40px"}/>
                
                <p>React</p>
              </li>
              <li className={styles.li}>
              <img priority={true} alt='icon-thumbnail' src='https://res.cloudinary.com/dqkwveihk/image/upload/v1686766246/nextjsIcon_e74jkq.png' height={"40px"} width={"40px"}/>
                <p>Nextjs</p>
              </li>
              <li className={styles.li}>
                <img priority={true} alt='icon-thumbnail' src='https://res.cloudinary.com/dqkwveihk/image/upload/v1686766246/postgresql-icon_cfmexn.png' height={"40px"} width={"40px"}/>
                <p>PostgreSQL</p>
              </li>
              <li className={styles.li}>
                <img priority={true}  alt='icon-thumbnail' src='https://res.cloudinary.com/dqkwveihk/image/upload/v1686766245/mongodb-icon_qv1pfa.png' height={"40px"} width={"40px"}/>
                <p>MongoDB</p>
              </li>
              <li className={styles.li}>
                <img priority={true}  alt='icon-thumbnail' src='https://res.cloudinary.com/dqkwveihk/image/upload/v1686766245/nodejs-icon_oxqp6i.png' height={"40px"} width={"40px"}/>
                <p>Nodejs</p>
              </li>
              <li className={styles.li}>
                <img priority={true}  alt='icon-thumbnail' src='https://res.cloudinary.com/dqkwveihk/image/upload/v1686766245/figma-icon_j8bm0r.png' height={"40px"} width={"40px"}/>
                <p>Figma</p>
              </li>
              <li className={styles.li}>
                <img priority={true}  alt='icon-thumbnail' src='https://res.cloudinary.com/dqkwveihk/image/upload/v1686766245/docker-icon_tsv7l2.png' height={"40px"} width={"40px"}/>
                <p>Docker</p>
              </li>
              <li className={styles.li}>
                <img priority={true}  alt='icon-thumbnail' src='https://res.cloudinary.com/dqkwveihk/image/upload/v1686766246/digitalocean-icon_vxtdpp.png' height={"40px"} width={"40px"}/>
                <p>Digital Ocean</p>
              </li>
             
             
          
            </ul>
          </div>
        </div>
       

       
       
      </main>
  )
}
