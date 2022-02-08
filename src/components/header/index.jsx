import React, { Component } from "react";
import './index.less'
import { reqWeather } from "../../api";
import { formateDate } from "../../utils/dataUtils";
import memoryUtils from "../../utils/memoryUtils";
import {withRouter} from "react-router-dom"
import menuList from "../../config/menuConfig";
import storageUtils from "../../utils/storageUtils";
import {Modal} from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import Linkbutton from "../link-button";
class Header extends Component {
    state = {
        currentTime: formateDate(Date.now()),
        weather: '',
        city:''
    }
    logout=()=>{
        Modal.confirm({
            title: '确定退出吗?',
            icon: <ExclamationCircleOutlined />,
            content: '',
            onOk:()=> {
              console.log('OK');
              storageUtils.removeUser();
              memoryUtils.user={};
              this.props.history.replace('/login')
            },
            onCancel() {
              console.log('Cancel');
            },
          })
    }
    getTitle=()=>{
        const path=this.props.location.pathname
        let title
        menuList.forEach(item=>{
            if(item.key===path)
            {
                title=item.title
            }
            else if(item.children)
            {
                const cItem=item.children.find(cItem=>cItem.key===path)
                if(cItem){
                    title=cItem.title
                }
            }
        })
        return title
    }
    getTime = () => {
        this.intervalId=setInterval(() => {
            const currentTime = formateDate(Date.now())
            this.setState({ currentTime })
        }, 1000)
    }
    getWeather = async () => {
        const {city, weather } = await reqWeather();
        this.setState({city,weather})
    }
   
    componentDidMount() {
        this.getTime()
        this.getWeather()
        
    }
    componentWillUnmount(){
        clearInterval(this.intervalId)
    }
    render() { 
        const { city,currentTime, weather } = this.state
        const userName = memoryUtils.user.userName
        const title=this.getTitle()
        return (
            <div className='header'>
                <div className="header-top">
                    <span>欢迎 , {userName}</span>
                    <Linkbutton onClick={this.logout}>退出</Linkbutton>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">{title}</div>
                    <div className="header-bottom-right">
                        <span>{currentTime}</span>
                        <span>{city}</span>
                        <span>{weather}</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Header)