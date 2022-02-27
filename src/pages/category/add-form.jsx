import React, {Component} from "react";
import {Form, Select, Input} from "antd";
const { Option } = Select;
const Item=Form.Item
export default class AddForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Form autoComplete="off">
                    <Item>
                        <Select style={{width:'100%'}} defaultValue="0">
                            <Option value='0'>一级分类</Option>
                        </Select>
                    </Item>
                  <Item
                      name='category'
                      rules={[{
                      required:true,
                      message:'必须输入名称!'
                  }]}>
                      <Input placeholder='请输入分类名称' ref={this.props.addRdf}/>
                  </Item>

                </Form>
            </div>
        )
    }
}
