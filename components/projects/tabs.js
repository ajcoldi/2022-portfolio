import { useEffect, useState } from 'react'
import styles from '../../styles/Projects.module.css'
function ProjectTabs (props){


    useEffect(() => {
        props.setSelectedTab(props.projects[0].frontmatter.category)
        
    }, [])

    useEffect(() => {
    console.log(props.selectedTab)
    }, [props.selectedTab])
    let categoriesArr = []
    props.projects.map((project, i) => {
        const {slug, frontmatter} = project
        categoriesArr.push(frontmatter.category);
    })
    const uniqueTabs = Array.from(new Set(categoriesArr));

    return  <div className={styles.tabContainer}>
        {
            
            uniqueTabs.map((category, i) => {
                return <div key={i} className={`
                    ${styles.tab} 
                   `} 
                    onClick={() => props.setSelectedTab(category)}>
                       <a className={category === props.selectedTab ? `${styles.active} floating `: '' }>{category}</a>
                    </div>
                
            })
            
        }
    </div>
    
    
}

export default ProjectTabs