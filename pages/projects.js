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
            const {title, author, category, date, bannerImage, tags} = frontmatter
            
            //JSX for individual blog listing
            return (
            
            <article key={title}>
                {
                    category === selectedTab
                    ?<Link href={`/projects/${slug}`}>
                        <a>
                            <h1>{title}</h1>
                            <h3>{author}</h3>
                            <h3>{date}</h3>
                        </a>
                    </Link>
                    : null 
                }
                

            </article>
            
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