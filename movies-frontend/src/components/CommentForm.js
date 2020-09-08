import React from 'react';
import { Comment, Avatar, Form, Button, List, Input, Rate, Divider, message } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import axios from 'axios';

import moment from 'moment';


const { TextArea } = Input;

const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Review
      </Button>
        </Form.Item>
    </>
);

class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            submitting: false,
            value: '',
            stars: 0,
            hide: false,
            token: window.localStorage.getItem('token')
        };
    }

    validateComment = () => {
        const token = window.localStorage.getItem('token');
        this.setState({
            token: token
        })
        console.log('Token retrieved? ', token, this.state.t);
        if (!token) {
            return message.error('You must log in to add a review.');
        }
        if (!this.state.stars) {
            return message.error('Please select a start rating.');
        }

        this.handleSubmit();
    };

    handleRating = stars => {
        this.setState({ stars });
    }

    getToken = () => {
        this.state({
            token: window.localStorage.getItem('token')
        })
    }

    handleSubmit = () => {
        const token = window.localStorage.getItem('token');
        if (!this.state.stars) {
            return;
        }

        this.setState({
            submitting: true,
        });

        this.setState({
            submitting: false,
            value: '',
            comments: [
                {
                    author: 'HanSolo93',
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: <p>{<span style={{ fontSize: '16px', color: '#08c' }}><StarOutlined /> {this.state.stars}</span>}   {this.state.value}</p>,
                    datetime: moment().fromNow(),
                },
                ...this.state.comments,
            ],
        });

        let data = {
            "rating": this.state.stars,
            "comment": this.state.value,
            "movie": `http://54.221.172.184:8000/movies/${this.props.movie_id}/`        }
        let headers = { 
            withCredentials: true,
            headers: { Authorization: `Token ${token}` }
        };
        axios.post(`http://54.221.172.184:8000/reviews/`, data, headers
        ).then(res => console.log(res)
        ).catch(error => {
            console.log(error)
        });

        this.setState({ hide: true });
    };

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const { comments, submitting, value } = this.state;

        return (
            <>
                {comments.length > 0 && <CommentList comments={comments} />}
                {this.state.hide ? '' : <div><Divider style={{ color: '#08c' }}>Submit a Review</Divider>
                    <div style={{ marginLeft: '45px' }}>Rate: &nbsp;&nbsp;<Rate onChange={this.handleRating} /></div>
                    <Comment
                        avatar={
                            <Avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                alt="Han Solo"
                            />
                        }
                        content={
                            <Editor
                                onChange={this.handleChange}
                                onSubmit={this.validateComment}
                                submitting={submitting}
                                value={value}
                            />
                        }
                    /></div>}
            </>
        );
    }
}

export default CommentForm;