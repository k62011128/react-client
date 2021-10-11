import React, {
    Component
} from 'react'
import {
    message, Button
} from 'antd';
import './app.less'
// import 'antd/dist/antd.css'

export default class App extends Component {

     handleClick=()=>{
        message.success('This is a success message');
     }

    render() {
        return  <Button type="primary" onClick={this.handleClick}>Primary Button</Button>
    }
}