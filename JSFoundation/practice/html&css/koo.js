// ECMA262
~((window) => {
    function Koo(id){
        this.elem = window.document.getElementById(id);
    }
    Koo.prototype.html = function(mes) {
        var elem = this.elem;
        if(mes){
            elem.innerHTML = mes;
            return this;
        }else{
            return elem.innerHTML;
        }
    }
    Koo.prototype.on = function(type, fn){
        this.elem.addEventListener(type, fn);
        return this;
    }
    Koo.prototype.foreach = function(e, fn){
        if(e instanceof Array){
            e.forEach((item, index) => {
                fn(item, index);
            })
        }else if(e instanceof Object){
            for(k in e){
                if(e.hasOwnProperty(k)){
                    fn(k, e[k]);
                }
            }
        }
        return this;
    }
    Koo.prototype.date = () => {
        let dt = new Date();
        return dt.getFullYear() + '-' + 
            ((dt.getMonth()+1)<10?'0'+(dt.getMonth()+1):(dt.getMonth()+1)) + '-' + 
            (dt.getDate()<10?'0'+dt.getDate():dt.getDate());
    }
    Koo.prototype.rand = () => {
        return Math.round(Math.random() * 10000000000);
        // rand += '0000000000',
        // rand = rand.slice(0, 10);
        // return rand;
    }
    Koo.prototype.bindEvent = (elem, type, selector, fn) => {
        if(fn == null){
            fn = selector;
            selector = null;
        }
        elem.addEventListener(type, (e) => {
            var target;
            if (selector) {
                target = e.target;
                if(target.matches(selector)){
                    fn.call(target, e);
                }
            }else{
                fn(e);
            }
        });
    }
    Koo.prototype.ajax = (type, url, fn, message){
        var xhr = new XMLHttpRequest();
        xhr = open(type, url, true);
        xhr.onreadystatechange = () => {
            // async
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    fn(xhr.responseText);
                }
            }
        }
        xhr.send(message);
    }
    window.Koo = Koo;
})(window)

var ajax = XMLHttpRequest()
ajax.open();
ajax.onreadystatechange = function(){
    if(ajax.readyState){
        
    }
}