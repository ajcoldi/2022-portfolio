import Link from "next/link"
import styles from '../styles/Layout/layout.module.css'
function Nav (props){
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href='./'>Home</Link></li>
                <li><Link href='./projects'>Projects</Link></li>
                <li><Link href='./blog'>Blog</Link></li>
            </ul>
            <ul>
                <li><Link href='/contact'><p className={`btn btn-primary ${styles.btn}`}>Contact</p></Link></li>
            </ul>
        </nav>
            )
}

export default Nav 