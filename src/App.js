import React, {
    Component
} from 'react'
// import {
//     message, Button
// } from 'antd';
// import './app.less'
// import 'antd/dist/antd.css'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'

export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/admin' component={Admin}/>
                    <Route exact path='/login' component={Login}/>
                </Switch>
            </BrowserRouter>
        )
    }
}