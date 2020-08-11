/**
 * 队列
 **/
class Queue {
    constructor() {
        this.data = [];
    }

    // 入队
    add(element) {
        this.data.push(element);
        return this.data.length;
    }

    // 出队
    remove(){
        if (this.data.length){
            this.data.shift();
            return this.data.length;
        }
        return false;
    }

    // 查看队首元素
    peek(){
        return this.data[0];
    }

    // 清空队列
    clear() {
        this.data = [];
    }

    // 是否为空
    isEmpty() {
        return this.data.length === 0;
    }
}
