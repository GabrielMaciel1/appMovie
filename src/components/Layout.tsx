import styles from '../styles/Layout.module.css'
import Card from './Card'
import Search from './Search'
import Image from 'next/image'
import Head from 'next/head'
import Navbar from '../components/NavBar'
import { Movie } from '../../typings'
import logo from '../image/logo.png'
import {} from 'react-bootstrap'
import { useState } from "react";

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

      <Navbar/>
      
      <div >
        <div className= {styles.logo}>
        <Image
        src={logo}
        
        height= '300px'
        width= '300px'
        
        />
        </div>
      <Search/>
           
      </div>
        
        <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
        <div className={styles.div}>

        {movies.map((movie) => (
            <Card title = {movie.title} key={movie.id} movie={movie} />
          ))}
        
        </div>
        
      </main>
      
    </>
  )
}