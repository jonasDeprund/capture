import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { MovieState } from '../movieState'

const MovieDetail = () => {
  const history = useHistory()
  const url = history.location.pathname
  const [movies, setMovies] = useState(MovieState)
  const [movie, setMovie] = useState(null)

  // Use Effect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovies) => stateMovies.url === url)
    setMovie(currentMovie)
  }, [movies, url])

  return (
    <Details>
      <Headline>
        <h2>{movie.title}</h2>
        <img src={movies.mainImg} alt="movie" />
      </Headline>
    </Details>
  )
}

const Details = styled.div``
const Headline = styled.div``

export default MovieDetail
