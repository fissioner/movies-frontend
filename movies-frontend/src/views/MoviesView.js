import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import axios from 'axios';

import ArticleList from '../components/ArticleList'


export default function MoviesList() {
    const [movies, setMovies] = useState();

    async function getMovies() {
      const result = await axios.get(
        'http://localhost:8000/movies/', {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      ).catch(error => {
        console.log(error)
      });
      console.log(result.data);
      setMovies(result.data);
    }
 
    useEffect( () => {
      getMovies();
    }, []);

    return (
          <ArticleList movies={movies}/>
    );
}