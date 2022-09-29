import styles from '../styles/Layout.module.css'
import Card from './Card'
import Navbar from './NavBar'
import Footer from './Footer'
import Image from 'next/image'
import Head from 'next/head'
import { Movie } from '../../typings'

interface Props {
  title: string
  movies: Movie[] 
}

export default function Layout({ title , movies }: Props) {


  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        
      </Head>
      
      <main className="main-container">
       
        <input type="text" placeholder="Procurar" className={styles.input}/>
        <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
        <div>
        {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        
        </div>
        
      </main>
      
    </>
  )
}