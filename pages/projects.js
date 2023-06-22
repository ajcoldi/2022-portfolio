import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import Tabs from '../components/projects/tabs'
import styles from '../styles/Projects.module.css'

import { useState } from 'react'
import Image from 'next/image';

// The Blog Page Content
export default function Project({projects}){
    const [selectedTab, setSelectedTab] = useState()


    return <main className={styles.main}>
        
        <Tabs projects={projects} setSelectedTab={setSelectedTab} selectedTab={selectedTab}/>
        <div className={styles.wrapper}>
            <div className={selectedTab}>
            

            {projects.map(project => {
                //extract slug and frontmatter
                const {slug, frontmatter} = project
                //extract frontmatter properties
                const {title, description, category, date, bannerImage, demoLink,tags, repo} = frontmatter
                
                //JSX for individual blog listing
                return (
                        <>
                            
                    {
                        category === selectedTab
                            ?   
                            
                            category == 'Development'
                                ? <article key={title} className={styles.thumbnailContainer} >
                                            <img src={bannerImage} alt='project-thumbnail'/>
                                            <div className={`${styles.textWrapper}`}>
                                                <h3>{title}</h3>
                                                <p className='flex-1'>{description}</p>
                                                <div className={styles.projectTxtBtnWrapper}>
                                                    <div className={styles.btnWrapper}>
                                                        <Link  href={`${demoLink}`}>
                                                        <a target='_blank' className='btn btn-primary'>Demo</a>
                                                        </Link>
                                                        <Link href={`/projects/${slug}`}>
                                                        <a className='btn btn-primary'>View details</a>
                                                        </Link>
                                                        <a className='btn btn-primary' href={repo} target='_blank' rel="noreferrer">GitHub Repo</a>
                                                    </div>
                                                </div>
                                            </div>
                                </article>
                                : 
                          
                            category == 'Designs'
                                ? <div key={title} className={styles.designCard}>
                                    <img  priority={true} src={bannerImage} alt='project-thumbnail'/>
                                        <div className={`${styles.textWrapper}`}>
                                                <h3>{title}</h3>
                                                <p className='flex-1'>{description}</p>
                                                <div className={styles.projectTxtBtnWrapper}>
                                                    <div className={styles.btnWrapper}>
                                                        {
                                                            demoLink ?  <Link href={demoLink}>
                                                            <a className='btn btn-primary' target='_blank'  rel="noreferrer">View</a>
                                                            </Link>
                                                            :
                                                            null
                                                        }
                                                       
                                                        
                                                    </div>
                                                </div>
                                        </div>
                                </div>
                                : null
                            
                        : null 
                    
                    }
                    
                        </>
        
                )
            })}
            </div>

        </div>
 
    </main>
}


//Generating the Static Props for the Blog Page
export async function getStaticProps() {
    // get list of files from the posts folder
    const files = fs.readdirSync('projects');
  
    // get frontmatter & slug from each post
    const projects = files.map((fileName) => {
      const slug = fileName.replace('.md', '');
      const readFile = fs.readFileSync(`projects/${fileName}`, 'utf-8');
      const { data: frontmatter } = matter(readFile);
  
      return {
        slug,
        frontmatter,
      };
    });
  
    // Sort the projects by date in descending order
    projects.sort((a, b) => {
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(b.frontmatter.date);
      return dateB - dateA;
    });
  
    // Return the pages static props
    return {
      props: {
        projects,
      },
    };
  }