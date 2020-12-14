import React, { Component } from 'react';

class Number extends Component {
    // 每个组件都能有自己的生命周期函数
    componentWillmount() {
        console.log("child componentWillmount")
    }
    render() {
        return <div>{this.props.count}</div>
    }
}

export default Number;