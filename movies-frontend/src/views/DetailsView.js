import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import axios from 'axios';
import { useParams, withRouter } from 'react-router';

import Details from '../components/Details';


export default function DetailsView() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    async function getMovie() {
      const result = await axios.get(
        `http://localhost:8000/movies/${id}`, {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      ).catch(error => {
        console.log(error)
      });
      console.log(result.data);
      setMovie(result.data);
    }
 
    useEffect( () => {
      getMovie();
    }, [id]);
  
    return (
          <Details movie={movie}/>
    );
}