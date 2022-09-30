import Image from 'next/image'
import Link from 'next/link'
import { FaStar } from "react-icons/fa";
import { Movie } from '../../typings'
import styles from '../styles/Card.module.css'

interface Props {
  title: string
  movie: Movie
  
}

const Card = ({ movie, title}: Props) => {

  const myLoader=({src})=>{
    return `https://image.tmdb.org/t/p/w500${
      movie.backdrop_path || movie.poster_path
    }`;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <Image
      loader={myLoader}
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        width="200"
        height="200"
      />
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      
      
    </div>
  )
}

export default Card