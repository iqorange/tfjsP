import React, { Component, Fragment } from 'react';
import Child from './child';
import { autobind } from 'core-decorators';

class Counter extends Component {
    constructor(props){
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.state = {
            counter: 1
        }
    }

    handleBtnClick() {

        const newCounter = this.state.counter + 1;
        this.setState(
            () => { return { counter: newCounter }; },
            () => {console.log(newCounter)});

    }

    render() {
        return (
            <Fragment>
                {/* ref获取原生DOM节点 */}
                <button ref={(button) => { this.buttomElem = button }} onClick={this.handleBtnClick}>增加</button>
                {/* ref在组件上获取组件js实例 */}
                <Child ref={(child) => { this.childElem = child }} number={this.state.counter} />
            </Fragment>
        )
    }
}

export default Counter;