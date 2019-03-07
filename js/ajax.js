//用户注册
function register() {
    //1.创建异步对象xhr
    var xhr = new XMLHttpRequest();
    //2.绑定监听
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var result = xhr.responseText;
            alert("注册成功！")
            console.log(result);
            //跳转页面文件location.href
           //location.href = "index.html";
        }
    }
    //3.打开链接，创建请求
    xhr.open("post","/user/register",true);
    var formdata = "uname=" + uname.value + "&upwd=" + upwd.value;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //4.发送请求
    xhr.send(formdata);
}
//用户登录
function login(){
    //1.创建异步对象xhr
    var xhr=new XMLHttpRequest();
    //2.监听事件
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            var result=xhr.responseText;
            d1.innerHTML=result;//结果显示页面
             alert("已登录")
            console.log(result);
            //跳转页面文件location.href
            location.href = "index.html";
        }
    }
    //3.打开连接，创建请求
    //var uname=document.getElementById("uname");
    //var upwd=document.getElementById("upwd");
    var un=uname.value;
    var up=upwd.value;
    xhr.open("get","/demo/login?uname="+un+"&upwd="+up,true);
    //4.发送请求
    xhr.send(null);
}



//发表留言
function teee() {
    //1.创建异步对象xhr
    var xhr = new XMLHttpRequest();
    //2.绑定监听
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var result = xhr.responseText;
             alert("发表成功！")
             //console.log(result);
            //跳转页面文件location.href
            location.href = "message.html";
        }
    }
    //3.打开链接，创建请求
    xhr.open("get","/report/teee?lname=" + lname.value + "&email=" +email.value + "&phone=" + phone.value + "&message=" + message.value,true);
    //4.发送请求
    xhr.send(null);
}
//console.log(name.value);
//

//留言
function getme(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200) {
            var result = xhr.responseText;
            var obj = JSON.parse(result).msg;
            var msg = document.getElementById("getme");
            var html ="";
            for(var item of obj){
                var html =`<tbody class="my_s">
                        <tr class="mt-5 my_b">
                            <td class="my_bon">姓 名：</td>
                            <td class="my_bonnta">${item.lname}</td>
                            <td class="my_d my_bon">邮 件：</td>
                            <td class="my_bonnta">${item.email}</td>
                        </tr>
                        <tr class="mt-2 my_b">
                            <td class="my_bon">电 话：</td>
                            <td class="my_bonntd">${item.phone}</td>
                        </tr>
                        <tr class="mt-2 my_b">
                            <td class="my_bon" width="60">详 情：</td>
                            <td class="my_bonnt">${item.message}</td>
                        </tr>
                    </tbody>`
                document.getElementById("table").innerHTML += html;
            }
            //msg.innerHTML=obj;
            //alert("成功！")
        }
    }
    xhr.open("get","/report/getme",true)
    xhr.send(null)
}