import React from 'react';
import '../App.css';
import { List, Space, Card } from 'antd';
import { MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const Article = (props) => {
    console.log('Articles: ', props.movies)
    return (
        <List
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 4,
            }}
            grid={{ gutter: 16, column: 4 }}
            dataSource={props.movies}
            renderItem={item => (
                <Link to={`/movies/${item.id}`}>
                    <List.Item>
                        <img
                            width={272}
                            height={400}
                            overflow={'hidden'}
                            alt="logo"
                            src={item.poster}
                        />

                        <Card title={item.title} style={{ fontSize: '16px', color: '#08c', width: 272 }}>
                            {item.rating == null ? '' : <IconText icon={StarOutlined} text={item.rating == null ? '-' : item.rating} key="list-vertical-star-o" />}<span>&nbsp;&nbsp;&nbsp;</span>
                            {item.reviews.length < 1 ? '' : <IconText icon={MessageOutlined} text={item.reviews.length} key="list-vertical-message" />}
                        </Card>

                    </List.Item>
                </Link>
            )}
        />
    );
}

export default Article;
