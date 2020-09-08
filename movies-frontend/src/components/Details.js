import React from 'react';
import { Descriptions } from 'antd';
import { withRouter } from 'react-router';


const Details = props => {
    const { movie } = props;
    return (
        <>
            <Descriptions title={movie.title}>
                <Descriptions.Item label="Rated">{movie.rated}</Descriptions.Item>
                <Descriptions.Item label="Released">{movie.released_on}</Descriptions.Item>
                <Descriptions.Item label="Genre">{movie.genre}</Descriptions.Item>
                <Descriptions.Item label="director">{movie.director}</Descriptions.Item>
            </Descriptions>
            <div style={{margin: '25px 0px 10px 0px'}}>Plot:</div>
            <div style={{fontSize: '16px', marginBottom: '30px'}}>{movie.plot}</div>
        </>
    );
}

export default withRouter(Details);
