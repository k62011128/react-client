import React from "react";
import ReactDOM from "react-dom";

import App from './App.js'
import 'antd/dist/antd.less'
import memoryUtils  from './utils/memoryUtils'
import storageUtils from './utils/storageUtils'
const user=storageUtils.getUser()
memoryUtils.user=user

ReactDOM.render(<App/>,document.getElementById('root'))


