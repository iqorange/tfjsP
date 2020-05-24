/**
  * 栈
 **/
class Stack{
    constructor() {
        this.data = [];
    }

    // 入栈
    push(element) {
        this.data.push(element);
        return this.data.length;
    }

    // 出栈
    pop() {
        if (this.data.length){
            this.data.pop()
            return this.data.length;
        }
        return false;
    }

    // 查看栈顶
    peek() {
        return this.data[this.data.length - 1];
    }

    // 是否为空
    isEmpty() {
        return this.data.length === 0;
    }

    // 清空栈
    clear() {
        this.data = [];
    }
}
