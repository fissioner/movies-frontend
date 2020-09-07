import React from 'react';
import { List, Space, Descriptions, Card } from 'antd';
import { MessageOutlined, StarOutlined } from '@ant-design/icons';
import { useParams, withRouter } from 'react-router';

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const Article = () => {
    const { id } = useParams();
    return (
        <Descriptions title="User Info">
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
            <Descriptions.Item label="Remark">{id}</Descriptions.Item>
            <Descriptions.Item label="Address">
                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
        </Descriptions>
    );
}

export default withRouter(Article);
