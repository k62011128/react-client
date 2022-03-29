import React, {Component} from 'react';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.submitInput= this.submitInput.bind(this)
        this.changeTxt = this.changeTxt.bind(this)
        this.state = {
            txt: ''
        }
    }

    changeTxt(e) {
        this.setState({txt:e.target.value})
    }

    submitInput() {
        this.props.submit(this.state.txt)
    }

    render() {
        const {txt} = this.state
        return (
            <div>
                <input type="text" placeholder='在此输入要做的事' onChange={this.changeTxt}/>
                <button onClick={this.submitInput} form='nameForm'>提交</button>
            </div>
        );
    }
}
