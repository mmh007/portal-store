//1:��ȡ�����б�
var mystyle = document.getElementById("mystyle");
//2:���¼� onchange
mystyle.onchange = function(){
    //2.1 ��ȡ��ǰ value
    var v = this.value;
    //2.2 ��value Ӧ��bodyԪ����ʽ
    document.body.className = v;
    //2.3 ��value����localStorageֵ
    localStorage.setItem("style",v);
}
//3:��ȡlocalStorageֵ�������
var style = localStorage.getItem("style");
//4:ֱ��Ӧ��bodyԪ����ʽ
if(style){
    document.body.className = style;
}
