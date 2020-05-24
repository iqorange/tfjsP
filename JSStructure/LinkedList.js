/**
 * 链表
 **/

// 节点
class Node {
    constructor(element) {
        this.element = elementl
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    append(element){
        let node = new Node(element);
        let  current;
        if (!this.head){
            this.head = null
        }else{
            current = this.head;
            while (current.next){
                current = current.next;
            }
            current.next = node;
        }
        ++this.length;
    }

    insert(position, element){
        let current;
        let previous;
        let index = 0;
        let node = new Node(element);
        if (position>=0 && position<=this.length){
            if (position === 0){
                node.next = this.head;
                this.head = node;
            }else{
                current = this.head;
                while (index<position){
                    previous = current;
                    current = current.next;
                    index++;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
        }
    }

    removeAt(position){
        let current;
        let previous;
        let index = 0;
        if (position>-1 && position<this.length){
            current = this.head;
            if (position === 0){
                this.head = current.next;
            }else{
                while (index<position){
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = current.next;
            }
            --this.length;
            return true;
        }
        return false;
    }

    remove(element){
        let index = 0;
        let current = this.head;
        while (current){
            if (current.element === element){
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    isEmpty(){
        return this.length === 0;
    }

    size(){
        return this.length;
    }
}
