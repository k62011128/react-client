import React, {Component} from "react";
import {Form, Select, Input} from "antd";
const { Option } = Select;
const Item=Form.Item
export default class AddForm extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Item>
                        <Select style={{width:'100%'}} defaultValue="0">
                            <Option value='0'>一级分类</Option>
                        </Select>
                    </Item>
                  <Item>
                      <Input placeholder='请输入分类名称'/>
                  </Item>
                </Form>
            </div>
        )
    }
}
