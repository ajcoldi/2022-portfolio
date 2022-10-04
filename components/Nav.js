import Link from "next/link"
import styles from '../styles/Layout/layout.module.css'
import { useRouter } from 'next/router';
function Nav (props){
    const router = useRouter();
    console.log("pathname",router.pathname)
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href='/' ><a className={router.pathname == '/' ? `${styles.active} floating` : ''}>HOME</a></Link></li>
                <li><Link href='/projects' ><a className={router.pathname == '/projects' ? `${styles.active} floating` : ''}>PROJECTS</a></Link></li>
                <li><Link href='/contact' ><a className={router.pathname == '/contact' ? `${styles.active} floating` : ''}>CONTACT</a></Link></li>
                
            </ul>
        </nav>
            )
}

export default Nav 