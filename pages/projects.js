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
                                ? <article className={styles.thumbnailContainer} >
                                            <Image src={bannerImage} alt='project-thumbnail'/>
                                            <div className={`${styles.textWrapper}`}>
                                                <h3>{title}</h3>
                                                <p className='flex-1'>{description}</p>
                                                <div className={styles.projectTxtBtnWrapper}>
                                                    <div className={styles.btnWrapper}>
                                                        <Link href={`/projects/${slug}`}>
                                                        <a className='btn btn-primary'>Demo</a>
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
                            category == 'Icons'
                                ? <div className={styles.iconThumbnail}>
                                    <Image src={bannerImage} alt='project-thumbnail'/>
                                </div>
                                :
                            category == 'Designs'
                                ? <div className={styles.designCard}>
                                    <Image src={bannerImage} alt='project-thumbnail'/>
                                        <div className={`${styles.textWrapper}`}>
                                                <h3>{title}</h3>
                                                <p className='flex-1'>{description}</p>
                                                <div className={styles.projectTxtBtnWrapper}>
                                                    <div className={styles.btnWrapper}>
                                                        <Link href={demoLink}>
                                                        <a className='btn btn-primary' target='_blank'  rel="noreferrer">Demo</a>
                                                        </Link>
                                                        <Link href={`/projects/${slug}`}>
                                                        <a className='btn btn-primary'>GitHub Repo</a>
                                                        </Link>
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
export async function getStaticProps(){
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

    // Return the pages static props
    return {
        props: {
            projects,
        },
    };
}