import React, {Component} from "react";
import {Form, Select, Input} from "antd";
import PropTypes from 'prop-types'
const { Option } = Select;
const Item=Form.Item

export default class UpdateForm extends Component {
    static propTypes={
         categoryName:PropTypes.string.isRequired
    }
    constructor(props) {
        super(props);
    }
    render() {
        const { categoryName}=this.props
        return (
            <div>
                <Form>
                    <Item>
                        <Input ref={this.props.inputRef} defaultValue={categoryName} placeholder='请输入分类名称'/>
                    </Item>
                </Form>
            </div>
        )
    }
}
