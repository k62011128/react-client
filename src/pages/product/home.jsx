import React, {Component} from 'react';
import {Table, Card, Select, Input, Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import LinkButton from "../../components/link-button";
import {PAGE_SIZE} from "../../utils/constants";
import {reqSearchProducts,reqProducts} from "../../api";

const Option = Select.Option
export default class ProductHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total:0,
            loading:false,
            searchName:'',
            searchType:'productName',
            products: [{
                name:'华硕',
                desc:'华硕描述',
                price:5000,
                status:1,
                operation: { name:'华硕',
                    desc:'华硕描述',
                    price:5000,
                    status:1,}
            },{
                name:'华硕',
                desc:'华硕描述',
                price:5000,
                status:1,
                operation:''
            },{
                name:'华硕',
                desc:'华硕描述',
                price:5000,
                status:1,
                operation:''
            },{
                name:'华硕',
                desc:'华硕描述',
                price:5000,
                status:1,
                operation:''
            }],
        }
        this.columns = this.initColumns()
    }

    initColumns = () => {
        return ([
            {   width:200,
                title: '商品名称',
                dataIndex: 'name',
            },
            {
                title: '商品描述',
                dataIndex: 'desc',
            },
            {
                width:150,
                title: '价格',
                dataIndex: 'price',
                render: (price) => {
                    return (
                        '$' + price
                    )
                }
            },
            {
                width:150,
                title: '状态',
                dataIndex: 'status',
                render: (status) => {
                    return (
                        <span>
                            <Button type='primary'>
                               {status===1?'下架':'上架'}
                            </Button>
                            <span>
                                {status===1?'在售':'已下架'}
                            </span>
                       </span>
                    )
                }
            }, {
                width:150,
                title: '操作',
                dataIndex: 'operation',
                render:(product)=>{
                    return (
                        <span>
                            <LinkButton onClick={()=>this.props.history.push('/product/detail', product)}>详情</LinkButton>
                            <LinkButton>修改</LinkButton>
                        </span>
                    )
                }

            },])
    }
    getProducts=async (pageNumber)=>{
        // this.setState({loading:true})
        // const {searchName,searchType}=this.state
        // let result
        // if(searchName) {
        //   result=await reqSearchProducts({pageNumber,pageSize:PAGE_SIZE,searchName,searchType})
        // }else{
        //  result=await reqProducts(pageNumber,PAGE_SIZE)
        // }
        // this.setState({loading:false})
        // if(result.status===0)
        // {
        //     const {total,list}=result.data
        //     this.setState({
        //         total,
        //         products:list
        //     })
        // }
    }
    componentDidMount() {
        this.getProducts(1)
    }

    render() {
        const {products,total,loading,searchName,searchType} = this.state
        const title = (
            <span>
                <Select
                    value={searchType}
                    style={{width: 150}}
                    onChange={value => this.setState({searchType:value})}>
                    <Option value='productName'>按名称搜索</Option>
                    <Option value='productDesc'>按描述搜索</Option>
                </Select>
                <Input
                    placeholder='关键字'
                    style={{width: 150, margin: '0 15px'}}
                    value={searchName}
                    onChange={event => this.setState({searchName:event.target.value})}/>
                <Button type='primary'>搜索</Button>
            </span>
        )
        const extra = (
            <Button type='primary'  onClick={()=>this.props.history.push('/product/update')}>
                <PlusOutlined/>
                添加
            </Button>
        )
        return (
            <Card title={title} extra={extra}>
                <Table
                    loading={loading}
                    bordered
                    rowkey='_id'
                    columns={this.columns}
                    dataSource={products}
                    pagination={{
                        defaultPageSize:PAGE_SIZE,
                        showQuickJumper:true,
                        total:total,
                        onchange:this.getProducts(1)
                    }}
                />
            </Card>
        );
    }
}
