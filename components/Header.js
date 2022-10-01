import styles from '../styles/Layout/layout.module.css'

function Header (props){
    return (
        <header className={styles.header}>
            <h1>Hi, Welcome to my portfolio</h1>
            <h3>My name is Alex Coldicott and I'm a junior full stack developer.</h3>
        </header>
    )
    

}

export default Header