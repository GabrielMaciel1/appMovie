import styles from '../styles/Home.module.css'
import requests from '../utils/requests'
import logo from '../image/logo_netflix.png'
import Image from 'next/image'
import { Movie } from '../../typings'

import Layout from '../components/Layout'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import Navbar from '../components/NavBar'


interface Props {
    documentaries: Movie[]
}

export const getServerSideProps = async () => {

  const [
    documentaries
    
  ] = await Promise.all([

    fetch(requests.fetchDocumentaries).then((res) => res.json()),
    
  ])

  return {
    props: {
        documentaries: documentaries.results,
      
      
    },
  }
}

export default function Documentarios({ documentaries }: Props) {
  return (
    <div>
      
    <div className={styles.div}>
      <main>
      <Layout title="" movies={documentaries}/>
      </main>
      
    </div>
    
    </div>
    
    
    
    
  )
   
}