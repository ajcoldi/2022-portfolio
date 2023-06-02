import { useEffect } from 'react';
import styles from '../../styles/Projects.module.css';

function ProjectTabs(props) {
  const { setSelectedTab, projects, selectedTab } = props;

  useEffect(() => {
    setSelectedTab(projects[0].frontmatter.category);
  }, [setSelectedTab, projects]);

  useEffect(() => {
    console.log(selectedTab);
  }, [selectedTab]);

  const categoriesArr = projects.map((project) => project.frontmatter.category);
  const uniqueTabs = Array.from(new Set(categoriesArr));

  return (
    <div className={styles.tabContainer}>
      {uniqueTabs.map((category, i) => (
        <div
          key={i}
          className={`${styles.tab} ${category === selectedTab ? `${styles.active} floating` : ''}`}
          onClick={() => setSelectedTab(category)}
        >
          <a>{category}</a>
        </div>
      ))}
    </div>
  );
}

export default ProjectTabs;
