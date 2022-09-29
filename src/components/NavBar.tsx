import Link from 'next/link'
import Image from 'next/image'
import logo from '../image/netflix.svg'

import styles from '../styles/Navbar.module.css'

export default function Navbar() {



  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src={logo}
          width="100"
          height="40"
          alt="Movie Filmes"
        />
        
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/açâo">
            <a>Ação</a>
          </Link>
        </li>
        <li>
          <Link href="/terror">
            <a>Comedia</a>
          </Link>
        </li>
        <li>
          <Link href="/comedia">
            <a>Terror</a>
          </Link>
        </li>
        <li>
          <Link href="/comedia">
            <a>Romance</a>
          </Link>
        </li>
        <li>
          <Link href="/comedia">
            <a>Documentarios</a>
          </Link>
        </li>
        
        <div className={styles.input}>
        
        </div>
      </ul>
    </nav>
  )
}