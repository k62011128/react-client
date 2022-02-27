import React, {Component} from 'react';
import {Card, Form, Input, Cascader, Upload, List, Button} from "antd";
import LinkButton from "../../components/link-button";
import {ArrowLeftOutlined} from "@ant-design/icons";
import RichTextEditor from "./RichTextEditor";
const Item = Form.Item
const {TextArea} = Input
export default class ProductAddUpdate extends Component {
    submit=()=>{

    }
    render() {
        const title = (
            <span>
                <LinkButton>
                    <ArrowLeftOutlined
                        style={{margin: '0 10px 0 0'}}
                        onClick={() => this.props.history.goBack()}
                    />
                </LinkButton>
                <span>商品添加</span>
            </span>
        )
        const formItemLayout = {
            labelCol: { span: 2 },
            wrapperCol: { span:8 },
        };
        return (
            <Card title={title}>
                <Form
                    {...formItemLayout}
                >
                    <Item
                        label='商品名称'
                        required={true}
                    >
                        <Input placeholder='商品名称'/>
                    </Item>
                    <Item label='商品名称'>
                        <TextArea placeholder='商品描述' autosize={{minRows:2,maxRows:6}}/>
                    </Item>
                    <Item label='商品价格'>
                        <Input type='number' placeholder='商品价格' addonAfter='元'/>
                    </Item>
                    <Item label='商品分类'>
                    </Item>
                    <Item label='商品图片'>
                    </Item>
                    <Item label='商品详情'
                          labelCol={{ span: 2 }}
                          wrapperCol={{ span:20 }}>
                        <RichTextEditor></RichTextEditor>
                    </Item>
                    <Item>
                        <Button type='primary' onClick={this.submit}>提交</Button>
                    </Item>
                </Form>
            </Card>
        );
    }
}
