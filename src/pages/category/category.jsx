import React, {Component} from 'react';
import {Card, Table, Button} from "antd";
import {
    PlusOutlined
} from '@ant-design/icons';
import LinkButton from "../../components/link-button";

export default class Category extends Component {
    render() {
        const title = '一级分类列表'
        const extra = (
            <Button type='primary'>
                <PlusOutlined/>
                添加
            </Button>
        );
        const dataSource = [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
            },
        ];

        const columns = [
            {
                title: '分类名称',
                dataIndex: 'name',
            },
            {
                title: '操作',
                width:300,
                render: () => (
                    <span>
                        <LinkButton>修改分类</LinkButton>
                        <LinkButton>查看子分类</LinkButton>
                    </span>
                )
            },
        ];
        return (
            <Card title={title} extra={extra}>
                <Table
                    bordered
                    rowKey='key'
                    dataSource={dataSource} columns={columns}/>
            </Card>
        );
    }
}
