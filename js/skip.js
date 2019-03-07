//跳转页面，自动关闭为3秒钟
function task(){
    window.location.href="index.html";
    window.myClose();
}
var n=setTimeout(task,3000);
function myClose(){
    clearTimeout(n);
}
