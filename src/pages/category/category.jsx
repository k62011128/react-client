import React, {Component} from 'react';
import {Card, Table, Button, message, Modal} from "antd";
import {
    PlusOutlined
} from '@ant-design/icons';
import LinkButton from "../../components/link-button";
import {reqCategorys,reqUpdateCategory,reqAddCategory} from "../../api";
import AddForm from "./add-form";
import UpdateForm from "./update-form";

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            categorys: [],
            showStatus: 0,
        }
        this.inputRef=React.createRef()
        this.title = '一级分类列表'
        this.columns = [
            {
                title: '分类名称',
                dataIndex: 'name',
            },
            {
                title: '操作',
                width: 300,
                render: (category) => (
                    <span>
                        <LinkButton onClick={() => this.showUpdateCategoryModal(category)}>修改分类</LinkButton>
                        <LinkButton>查看子分类</LinkButton>
                    </span>
                )
            },
        ];

        this.extra = (
            <Button type='primary' onClick={this.showAddCategoryModal}>
                <PlusOutlined/>
                添加
            </Button>
        );

    }

    getCategory = async () => {
        this.setState({loading: true})
        const result = await reqCategorys('0')
        this.setState({loading: false})
        if (result.status === 0) {
            const categorys = result.data
            this.setState({categorys})
        } else {
            message.error('获取信息失败!')
        }
    }
    showUpdateCategoryModal = (category) => {
        this.category = category
        this.setState({showStatus: 2})
    }
    showAddCategoryModal = () => {
        this.setState({showStatus: 1})
    }
    addCategory = () => {
        this.setState({showStatus: 0})
    }
    updateCategory = async () => {
        this.setState({showStatus: 0})
        const categoryId=this.category._id
        const categoryName=this.inputRef.current.state.value
        const result=await reqUpdateCategory({categoryName, categoryId})
        if(result.status===1){
            this.getCategory()
        }
    }
    handleCancel = () => {
        this.setState({showStatus: 0})
    };
    componentDidMount() {
        this.getCategory()
    }

    render() {
        const {categorys, loading, showStatus} = this.state
        const category = this.category||{}
        return (
            <Card title={this.title} extra={this.extra}>
                <Table
                    loading={loading}
                    bordered
                    rowKey='_id'
                    dataSource={categorys} columns={this.columns}
                    pagination={{defaultPageSize: 4, showQuickJumper: true}}/>
                <Modal title="添加分类" visible={showStatus === 1} onOk={this.addCategory} onCancel={this.handleCancel}>
                    <AddForm/>
                </Modal>
                <Modal title="修改分类" visible={showStatus === 2} onOk={this.updateCategory} onCancel={this.handleCancel}>
                    <UpdateForm categoryName={category.name} inputRef={this.inputRef}/>
                </Modal>
            </Card>
        );
    }
}
