import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import axios from 'axios';

import MasterContainer from './containers/MasterContainer';
import ArticleList from './containers/ArticleList';
import Article from './components/Article'


function App() {
  const [movies, setMovies] = useState();
 
  useEffect(async () => {
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
  }, []);

  return (
    <div className="App">
      <MasterContainer>
        <Article movies={movies}/>
      </MasterContainer>
    </div>
  );
}

export default App;
