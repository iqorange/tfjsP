import React, { Component } from 'react'
class TodoItem extends Component {
    constructor(props) {
        super(props)
        // 组件this绑定
        this.handleItemClick = this.handleItemClick.bind(this)
    }

    // 点击时触发删除事件
    handleItemClick() {
        // 改变父组件中的list数据 数据驱动思想
        this.props.deleteFunction(this.props.index)
    }

    render() {
        // 通过this.props接收父组件传过来的消息
        const { content } = this.props;
        return <li onClick={this.handleItemClick}>{ content }</li>
    }
}

export default TodoItem;