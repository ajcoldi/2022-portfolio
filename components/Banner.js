import Link from "next/link"
import styles from '../styles/Layout/layout.module.css'
function Banner (props){
    return (
        <nav className={styles.banner}>
            <ul>
                <li>Alex Coldicott - Full stack web developer</li>
                <li><Link href='/'>GITHUB</Link></li>
                
            
            </ul>
        </nav>
            )
}

export default Banner 