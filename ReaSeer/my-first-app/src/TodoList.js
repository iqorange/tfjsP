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
            inputValue: '',
            list: [
                'learn React',
                'learn Component',
                'learn React-Dom'
            ]
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

    // 采集用户回车键来快速加入TodoList
    handleKeyUp(e){
        if(e.keyCode === 13){
            // input框中现在的对象
            // this.state.inputValue
            // 展开拷贝一份state中的list的内容到这里的list
            const list = [...this.state.list, this.state.inputValue];
            this.setState({
                // 清空input框中的内容
                inputValue: '',
                // 键值对相同时可以简写
                list
            });
        }
    }

    // 点击这个元件自动删除
    handleItemClick(index){
        // 拷贝一个副本，保持数据安全
        const list = [...this.state.list];
        // 删除传过来的index值对应的元素
        list.splice(index, 1);
        // 重新进行赋值
        this.setState({
            list
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
                    // 会车自动添加到TodoList
                    onKeyUp={this.handleKeyUp.bind(this)}
                />
                <ul>
                    {this.state.list.map((value, index) => {
                        return (
                            <li
                                // 加入key值可以让性能更高
                                key={index} 
                                // 绑定一个可以点击删除的能力
                                // 绑定作用域时把index传递过去
                                onClick={this.handleItemClick.bind(this, index)}
                            >
                                {value}
                            </li>
                        )
                    })}
                </ul>
            </Fragment>
        );
    }
}

export default TodoList;