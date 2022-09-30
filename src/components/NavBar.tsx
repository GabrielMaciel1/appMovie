import Link from 'next/link'


import styles from '../styles/Navbar.module.css'

export default function Navbar() {



  return (
    <nav className={styles.navbar}>
      <ul className={styles.link_items}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/acao">
            <a>Ação</a>
          </Link>
        </li>
        <li>
          <Link href="/comedia">
            <a>Comedia</a>
          </Link>
        </li>
        <li>
          <Link href="/terror">
            <a>Terror</a>
          </Link>
        </li>
        <li>
          <Link href="/romance">
            <a>Romance</a>
          </Link>
        </li>
        <li>
          <Link href="/documentarios">
            <a>Documentarios</a>
          </Link>
        </li>
        
        
      </ul>
    </nav>
  )
}