import React, { useState, useEffect, createElement, isValidElement } from 'react';
import { useParams, withRouter } from 'react-router';
import { Comment, Tooltip, List, Divider } from 'antd';
import { StarOutlined, DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import moment from 'moment';

import CommentForm from './CommentForm';

const Reviews = props => {
    const { reviews, movie_id } = props;
    return (
        <>
            {reviews.length > 0 ? <List
                className="comment-list"
                header={<span style={{ color: '#08c' }}>Reviews: {reviews.length}</span>}
                itemLayout="horizontal"
                dataSource={reviews}
                renderItem={item => (
                    <li>
                        <Comment
                            author={'HanSolo93'}
                            avatar={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}
                            content={<p><span style={{ fontSize: '16px', color: '#08c' }}><StarOutlined /> {item.rating}</span>   {item.comment}</p>}
                            datetime={
                                <Tooltip>
                                    <span>
                                        {moment(item.created_at).fromNow()}
                                    </span>
                                </Tooltip>
                            }
                        />
                    </li>
                )}
            /> : ''}
            <CommentForm movie_id={movie_id} />
        </>
    );
}

export default withRouter(Reviews);
