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

    return <main className={styles.main}>
        
        <Tabs projects={projects} setSelectedTab={setSelectedTab} selectedTab={selectedTab}/>
        
        {projects.map(project => {
            //extract slug and frontmatter
            const {slug, frontmatter} = project
            //extract frontmatter properties
            const {title, description, category, date, bannerImage, tags} = frontmatter
            
            //JSX for individual blog listing
            return (
                    <div key={title}>
                {

                    category === selectedTab
                        ?<article className={styles.thumbnailContainer} >
                            <Link href={`/projects/${slug}`}>
                                    <a >
                                        <img src={bannerImage}/>
                                        <div className={`${styles.textWrapper}`}>
                                            <h1>{title}</h1>
                                            <p className='flex-1'>{description}</p>
                                            <h3>{date}</h3>
                                        </div>
                                        
                                    </a>
                                </Link>
                        </article>

                    : <></> 
                
                }
            </div>
       
            )
        })}
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