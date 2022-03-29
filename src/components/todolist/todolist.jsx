import React, {Component} from 'react';
import List from './List'
import Input from "./Input";
import './todolist.less'

export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.addArr = this.addArr.bind(this)
        this.changeArr = this.changeArr.bind(this)
        this.deleteElement = this.deleteElement.bind(this)
        this.state = {
            arr: [{
                name: '洗澡',
                cekd: false
            }, {
                name: '吃饭',
                cekd: false
            }, {
                name: '睡觉',
                cekd: false
            }, {
                name: '开香槟',
                cekd: false
            }, {
                name: '冲浪',
                cekd: false
            }]
        }
    }

    addArr(val) {
        this.setState({arr: [...this.state.arr, {name: val, cekd: false}]})
    }

    changeArr(index) {
        let arr = this.state.arr
        arr[index].cekd = arr[index].cekd === false ? true : false
        this.setState({arr})
    }

    deleteElement(index) {
        let arr = this.state.arr
        arr.splice(index, 1)
        this.setState({arr})
    }

    render() {
        return (
            <div>
                <Input submit={this.addArr}></Input>
                <List arr={this.state.arr} change={this.changeArr} delete={this.deleteElement}></List>
            </div>
        );
    }
}
