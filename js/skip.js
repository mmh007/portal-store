//��תҳ�棬�Զ��ر�Ϊ3����
function task(){
    window.location.href="index.html";
    window.myClose();
}
var n=setTimeout(task,3000);
function myClose(){
    clearTimeout(n);
}
