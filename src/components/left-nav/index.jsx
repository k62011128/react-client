import React, { Component } from "react";
import { Link ,withRouter} from "react-router-dom";
import './index.less'
import logo from '../../assets/images/logo.png'
import { Menu } from 'antd';
import menuList from "../../config/menuConfig";
const { SubMenu } = Menu;
class LeftNav extends Component {
    getMenuNodes = (menuList) => {
        return menuList.map(item => {
            if (!item.children) {
                return (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>{item.title}</Link>
                    </Menu.Item>
                )
            }
            return (
                <SubMenu key={item.key} icon={item.icon} title={item.title}>
                    {this.getMenuNodes(item.children)}
                </SubMenu>
            )
        })

    }
    getMenuNodes2 = (menuList) => {
        const path=this.props.location.pathname;
        return menuList.reduce((total, item) => {
            if (!item.children) {
                total.push(
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>{item.title}</Link>
                    </Menu.Item>
                )
            }
            else {
                const cItem=item.children.find(cItem=>path.indexOf(cItem.key)===0);
                if(cItem)
                {
                    this.openKey=item.key;
                }
                total.push(
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                )
            }
            return total
        },[])

    }
    componentWillMount(){
        this.menuNodes= this.getMenuNodes2(menuList);
    }
    render() {
       let path=this.props.location.pathname;
       const openKey=this.openKey;
       if(path.indexOf('/product')===0)
       {
           path='/product'
       }
        return (
            <div className='left-nav'>
                <Link to='/' className='left-nav-header'>
                    <img src={logo} alt='logo'></img>
                    <h1>????????????</h1>
                </Link>
                <Menu
                    mode="inline"
                    theme="dark"
                    selectedKeys={[path]}
                    defaultOpenKeys={[openKey]}
                >

                    {/* <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link to='/home'>??????</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<TaobaoCircleOutlined />} title="??????">
                        <Menu.Item key="2" icon={<TaobaoCircleOutlined />}>
                            <Link to='/category'>
                                ????????????
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<TaobaoCircleOutlined />}>
                            <Link to='/product'>
                                ????????????
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="4" icon={<UserOutlined />}>
                        <Link to='/user'>
                            ????????????
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<UserOutlined />}>
                        <Link to='/role'>
                            ????????????
                        </Link>
                    </Menu.Item>
                    <SubMenu key="sub2" icon={<RadarChartOutlined />} title="????????????">
                        <Menu.Item key="6" icon={<BarChartOutlined />}>
                            <Link to='/charts/bar'>
                                ?????????
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="7" icon={<LineChartOutlined />}>
                            <Link to='/charts/line'>
                                ?????????
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="8" icon={<PieChartOutlined />}>
                            <Link to='/charts/pie'>
                                ??????
                            </Link>
                        </Menu.Item>
                    </SubMenu> */}
                    {
                        this.menuNodes
                    }
                </Menu>
            </div>
        )
    }
}
export default withRouter(LeftNav)