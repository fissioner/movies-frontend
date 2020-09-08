import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import axios from 'axios';
import { useParams } from 'react-router';

import Details from '../components/Details';
import Reviews from '../components/Reviews';


export default function DetailsView() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [reviews, setReviews] = useState([{}]);

    async function getMovie() {
        const result = await axios.get(
            `http://54.221.172.184:8000/movies/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        ).catch(error => {
            console.log(error)
        });
        console.log(result.data);
        setReviews(result.data.reviews);
        setMovie(result.data);
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <>
            <Details movie={movie} />
            <Reviews reviews={reviews} movie_id={id} />
        </>
    );
}