import React, {Component} from 'react';
import {Card, List} from "antd";
import {ArrowLeftOutlined} from '@ant-design/icons'
import LinkButton from "../../components/link-button";
const Item = List.Item
export default class ProductDetail extends Component {
    render() {
        const data=this.props.location.state
        const {name,desc,price}=data
        const title = (
            <span>
                <LinkButton>
                    <ArrowLeftOutlined
                        style={{margin: '0 10px 0 0'}}
                        onClick={()=>this.props.history.goBack()}
                    />
                </LinkButton>
                <span>商品详情</span>
            </span>
        )
        return (
            <Card title={title} className='product-detail'>
                <List>
                    <Item className='item'>
                        <span className='left'>商品名称:</span>
                        <span >{name}</span>
                    </Item>
                    <Item className='item'>
                        <span className='left'>商品描述:</span>
                        <span >{desc}</span>
                    </Item>
                    <Item className='item'>
                        <span className='left'>商品价格:</span>
                        <span >{price}元</span>
                    </Item>
                    <Item className='item'>
                        <span className='left'>所属分类:</span>
                        <span >打人硕</span>
                    </Item>
                    <Item className='item'>
                        <span className='left'>商品图片:</span>
                        <img src="" alt="暂时"/>
                    </Item>
                    <Item className='item'>
                        <span className='left'>商品详情:</span>
                        <span dangerouslySetInnerHTML={{__html:'打人硕'}}></span>
                    </Item>
                </List>
            </Card>
        );
    }
}
