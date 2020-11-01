import React, { Component } from 'react'
class TodoItem extends Component {
    constructor(props) {
        super(props)
        // 组件this绑定
        this.handleItemClick = this.handleItemClick.bind(this)
    }

    // 点击时触发删除事件
    handleItemClick() {
        // 组件引入
        const { deleteFunction, index } = this.props;
        // 改变父组件中的list数据 数据驱动思想
        deleteFunction(index)
    }

    render() {
        // 通过this.props接收父组件传过来的消息
        const { content } = this.props;
        // 子组件想要和父组件通信，它要调用父组件传递过来的方法
        return <li onClick={this.handleItemClick}>{ content }</li>
    }
}

export default TodoItem;