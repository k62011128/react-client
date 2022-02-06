import React, { Component } from "react";
import './index.less'
import logo from '../../assets/images/logo.png'
import { reqWeather } from "../../api";
import { formateDate } from "../../utils/dataUtils";
import memoryUtils from "../../utils/memoryUtils";
export default class Header extends Component {
    state = {
        currentTime: formateDate(Date.now()),
        weather: '',
    }
    getTime = () => {
        setInterval(() => {
            const currentTime = formateDate(Date.now())
            this.setState({ currentTime })
        }, 1000)
    }
    getWeather = async () => {
        const { weather } = await reqWeather();
        this.setState({weather})
    }
    componentDidMount() {
        this.getTime()
        this.getWeather()
    }
    render() {
        const { currentTime, weather } = this.state
        const username = memoryUtils.user.username
        return (
            <div className='header'>
                <div className="header-top">
                    <span>欢迎,{username}</span>
                    <a href="javascript:">退出</a>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">首页</div>
                    <div className="header-bottom-right">
                        <span>{currentTime}</span>
                        <img src={logo} alt="weather" />
                        <span>{weather}</span>
                    </div>
                </div>
            </div>
        )
    }
}