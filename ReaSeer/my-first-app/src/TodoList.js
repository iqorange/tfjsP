import React, { Component, Fragment } from 'react'

// TodoLisr组件，Fragment可以把jsx的一群标签进行打包而不会污染代码
class TodoList extends Component {
    // 构造器，存放变量
    // 在组件创建的时候被执行，用于创建数据，数据绑定在state中
    constructor(props) {
        // 复用父类的方法
        super(props);
        // 定义变量参数数据
        this.state = {
            inputValue: 'hello world',
            list: []
        }
    }
    // 动态绑定数据内容
    handleInputChange(e){
        // 函数调用this的时候要注意让调用者绑定this
        // React中，设置组件状态要像微信小程序那样使用setState方法而不是直接赋值。
        this.setState({
            inputValue: e.target.value
        });
    }

    render() {
        return (
            // react的页面包裹，就像大白兔的糖纸一样入口即化
            <Fragment>
                {/* 数据绑定 */}
                <input
                    // 赋值变量的时候要用花括号包围
                    value={this.state.inputValue}
                    // this指向绑定bind，否则this会访问不到
                    // 数据驱动/响应式的编程思想
                    onChange={this.handleInputChange.bind(this)}
                />
                <ul>
                    <li>learn React</li>
                    <li>learn Component</li>
                </ul>
            </Fragment>
        );
    }
}

export default TodoList;