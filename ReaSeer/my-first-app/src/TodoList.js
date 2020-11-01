import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './style.css'

// TodoLisr组件，Fragment可以把jsx的一群标签进行打包而不会污染代码
class TodoList extends Component {
    // 构造器，存放变量
    // 在组件创建的时候被执行，用于创建数据，数据绑定在state中
    constructor(props) {
        // 复用父类的方法
        super(props);
        // 构造时直接bind this，优化代码和性能
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        // 强制作用域绑定
        this.handleItemClick = this.handleItemClick.bind(this)
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
        // 按下回车并且不为空
        if(e.keyCode === 13 && e.target.value !== ''){
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

    // 分离item渲染模块
    getListItems(){
        return this.state.list.map((value, index) => {
            // 组件传值
            // 父组件通过属性的方式向子组件传值
            return (
                <TodoItem 
                    content = {value}
                    index = {index}
                    key = {index}
                    deleteFunction = {this.handleItemClick}
                />
            )
        })
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
                <label htmlFor='myinput'><span>请输入内容：</span></label>
                <input
                    id='myinput'
                    // css样式
                    className='input'
                    // 赋值变量的时候要用花括号包围
                    value={this.state.inputValue}
                    // this指向绑定bind，否则this会访问不到
                    // 数据驱动/响应式的编程思想
                    onChange={this.handleInputChange}
                    // 回车自动添加到TodoList
                    onKeyUp={this.handleKeyUp}
                />
                <ul>
                    {this.getListItems()}
                </ul>
            </Fragment>
        );
    }
}

export default TodoList;