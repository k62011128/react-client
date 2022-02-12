import React, {
    Component
} from 'react'
import 'antd/dist/antd.less'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import './App.less'
export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route path='/' component={Admin} />
                </Switch>
            </BrowserRouter>
        )
    }
}