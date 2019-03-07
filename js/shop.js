//1:获取下拉列表
var mystyle = document.getElementById("mystyle");
//2:绑定事件 onchange
mystyle.onchange = function(){
    //2.1 获取当前 value
    var v = this.value;
    //2.2 将value 应用body元素样式
    document.body.className = v;
    //2.3 将value保存localStorage值
    localStorage.setItem("style",v);
}
//3:获取localStorage值如果存在
var style = localStorage.getItem("style");
//4:直接应用body元素样式
if(style){
    document.body.className = style;
}
