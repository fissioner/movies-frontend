import React, { useState } from 'react';
import { List, Space, Descriptions, Card } from 'antd';
import { MessageOutlined, StarOutlined } from '@ant-design/icons';
import { useParams, withRouter } from 'react-router';


const Details = props => {
    const { movie } = props;
    return (
        <div>
            <Descriptions title={movie.title}>
                <Descriptions.Item label="Rated">{movie.rated}</Descriptions.Item>
                <Descriptions.Item label="Released">{movie.released_on}</Descriptions.Item>
                <Descriptions.Item label="Genre">{movie.genre}</Descriptions.Item>
                <Descriptions.Item label="director">{movie.director}</Descriptions.Item>
            </Descriptions>
            <div style={{margin: '25px 0px 10px 0px'}}>Plot:</div>
            <div style={{fontSize: '16px'}}>{movie.plot}</div>
        </div>
    );
}

export default withRouter(Details);
