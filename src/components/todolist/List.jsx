import React, {Component} from 'react';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.showLiTrue = this.showLiTrue.bind(this)
        this.showLiFalse = this.showLiFalse.bind(this)
        this.changeStatus = this.changeStatus.bind(this)
    }
    changeStatus(index) {
        this.props.change(index)
    }
    showLiFalse() {
        return this.props.arr.map((item, index) => {
            if (item.cekd === false) {
                return (
                    <div className='row'>
                        <input type='checkbox' checked={false} onClick={(e)=>this.changeStatus(index)}/>
                        <li className='lis'>{item.name}</li>
                        <a onClick={(e)=>{this.props.delete(index)}} className='listA'>删除</a>
                    </div>
                )
            }
        })
    }
    showLiTrue() {
        return this.props.arr.map((item, index) => {
            if (item.cekd === true) {
                return (
                    <div className='row'>
                        <input type='checkbox' checked={true} onClick={(e)=>this.changeStatus(index)}/>
                        <li className='lis'>{item.name}</li>
                        <a onClick={(e)=>{this.props.delete(index)}} className='listA'>删除</a>
                    </div>
                )
            }
        })
    }
    render() {
        return (
            <div>
                <div>未做完的事:</div>
                <ul>
                    {this.showLiFalse()}
                </ul>
                <div>已做完的事:</div>
                <ul>
                    {this.showLiTrue()}
                </ul>
            </div>
        );
    }
}
