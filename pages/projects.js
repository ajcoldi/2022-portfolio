import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import Tabs from '../components/projects/tabs'
import styles from '../styles/Projects.module.css'

import { useEffect, useState } from 'react'

// The Blog Page Content
export default function Project({projects}){
    const [selectedTab, setSelectedTab] = useState()


    return <main >
        <h2>Projects.</h2>
        <Tabs projects={projects} setSelectedTab={setSelectedTab} selectedTab={selectedTab}/>
        <div className={selectedTab}>
            {projects.map(project => {
                //extract slug and frontmatter
                const {slug, frontmatter} = project
                //extract frontmatter properties
                const {title, description, category, date, bannerImage, tags} = frontmatter
                
                //JSX for individual blog listing
                return (
                        <>
                            
                    {
                        category === selectedTab
                            ?   
                            
                            category == 'Development'
                                ? <article className={styles.thumbnailContainer} >
                                            <img src={bannerImage}/>
                                            <div className={`${styles.textWrapper}`}>
                                                <h3>{title}</h3>
                                                <p className='flex-1'>{description}</p>
                                                <div className={styles.projectTxtBtnWrapper}>
                                                <div className={styles.btnWrapper}>
                                                <Link href={`/projects/${slug}`}>
                                                <a className='btn btn-primary'>View details</a>
                                                </Link>
                                                <Link href={`/projects/${slug}`}>
                                                <a className='btn btn-primary'>GitHub Repo</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                : 
                            category == 'Icons'
                                ? <div className={styles.iconThumbnail}>
                                    <img src={bannerImage}/>
                                </div>
                                : null
                            
                        : null 
                    
                    }
                    
                        </>
        
                )
            })}
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