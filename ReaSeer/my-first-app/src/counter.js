import React, { Component, Fragment } from 'react';
import Child from './child';
import Number from './number';

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

    // 第一次Mounting，数据修改时不会执行
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    // 渲染时自动执行
    render() {
        return (
            <Fragment>
                {/* ref获取原生DOM节点 */}
                <button ref={(button) => { this.buttomElem = button }} onClick={this.handleBtnClick}>增加</button>
                {/* ref在组件上获取组件js实例 */}
                <Child ref={(child) => { this.childElem = child }} number={this.state.counter} />
                <Number count = {this.state.number} />
            </Fragment>
        )
    }

    // 挂载后自动执行
    componentDidMount () {
        console.log('componentDidMount')
    }

    // 数据更新前自动执行
    shouldComponentUpdate () {
        console.log('shouldComponentUpdate')
        // 如果页面没有变可以用false让页面不渲染
        return false
    }

    // 数据即将更新前自动执行
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    // 数据更新后自动执行
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    // ComponentWillReceiveProps在props接收时会被执行
}

export default Counter;