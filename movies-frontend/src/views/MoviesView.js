import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import axios from 'axios';
import { useParams } from 'react-router';

import ArticleList from '../components/ArticleList'


export default function MoviesList() {
  const { search_term } = useParams();
  const [movies, setMovies] = useState();

  async function getMovies() {
    const result = await axios.get(
      `${process.env.REACT_APP_MOVIES_URL}/movies?search=${search_term ? search_term : ''}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    }
    ).catch(error => {
      console.log(error)
    });
    setMovies(result.data);
  }

  useEffect(() => {
    getMovies();
  }, [search_term]);

  return (
    <ArticleList movies={movies} />
  );
}