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
           location.href = "login_box.html";
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

//留言列表
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


//动态获取查询图片《index.html》
function ajax({sid,type,data,dataType}){
    return new promise(function(open,err){
        //1。.创建xhr对象
        var xhr=new XMLHttpRequest();
        //2.绑定监听事件
        xhr.onreadystatechange==function(){
            if(xhr.readyState==4&&xhr.status==200){
                if(dataType!==undefined&&dataType.toLowerCase()=="json")
                    var res=JSON.parse(xhr.responseText)
                else
                    var res=xhr.responseText
                open(res);
            }
        }
        if(type.toLowerCase()=="get"&&data!==undefined){
            url+="?"+data;
        }
        //3.打开连接
        xhr.open(type.url,true);
        if(type.toLowerCase()==="post")
            //增强：设置请求消息头
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        //4.发送请求
        if(type.toLowerCase()=="post"&&data!==undefiend)
            xhr.send(data);
        else
            xhr.send(null);
    })
}





//注册页认证

var $txtName=$("input:text");
var $txtPwd=$("input:password");


//为其绑定失去焦点事件:
$txtName.blur(function(){
    vali($(this),3,9,"用户名必须介于3~9位之间!");
});
function vali($txt,minlen,maxlen,msg){
    //验证当前文本框的内容长度
    var len=$txt.val().length;
    if(len>=minlen&&len<=maxlen){//如果长度>=最小长度且长度<=最大长度,就找到当前文本框的下一个兄弟span，设置其内容
        $txt.next().html(`<img src='img/ok.png'>`);
        return true;
    }else{//否则,找到当前文本框的下一个兄弟span，设置其内容
        $txt.next().html(`<img src='img/err.png'>${msg}`);
        return false;
    }
}
$txtPwd.blur(function(){
    vali($(this),6,8,"密码必须介于6~8位之间!");
});
//查找表单，为其绑定submit事件
$("form").submit(function(e){
    //获得两个文本框的验证结果
    var rName=vali($txtName,3,9,"用户名必须介于3~9位之间!");
    var rPwd=vali($txtPwd,6,8,"密码必须介于6~8位之间!");
    //如果两个不都是true
    if(!(rName&&rPwd))
        e.preventDefault()//阻止提交！
});



///点击小图片，下方my-big中显示大图片 轮播
//1. 查找触发事件的元素
//2. 绑定事件:
$(".my-small").click(function(){
    var $img=$(this);
    //获得当前img上的自定义属性data-target的值
    var src=$img.attr("data-target");
    //.prop()
    //修改到class为my-big的大图片的src属性上
    $(".my-big").attr({src});
    //.attr({src属性:src变量})
    //.attr("src",src);
    //.prop(...)
})



//购物车1

/*数量变化*/
//1. 查找触发事件的元素
//查找div: id为ab
var div=document.getElementById("ab");
//查找div下所有button
var btns=div.getElementsByTagName("button");
//console.log(btns);//打桩
//2. 绑定事件处理函数
//遍历btns中每个找到的btn
for(var btn of btns){
    //每遍历到一个btn，就给当前btn绑定单击事件处理函数:当当前按钮被单击时自动执行一项任务
    btn.onclick=function(){
        var btn=this;//自动获得当前单击的按钮
        //3. 查找要修改的元素
        //查找当前按钮的爹的第2个孩子
        var span=btn.parentNode.children[1];
        //4. 修改元素
        //获得span的内容，转为整数
        var n=parseInt(span.innerHTML);
        if(btn.innerHTML=="+")//如果当前按钮是+
            n++;//数量就+1
        else if(n>1)//否则如果当前按钮是-,且n>1
            n--;//数量才能-1
        //将修改后的n，再放回span中
        span.innerHTML=n;

        /*计算小计*/
        //获得当前按钮的父元素的前一个兄弟的内容转为浮点数
        var btn=document.getElementById("ac")
        var price=parseFloat(
                //btn.parentNode
                //.previousElementSibling
                btn.lastElementChild
                .innerHTML
                .slice(1)//去掉开头的¥
        );
        //计算小计=单价*数量
        var subtotal=price*n;
        //查找当前按钮的爹的下一个兄弟元素,设置其内容为小计
        var btn=document.getElementById("ad")
        btn.children[0].innerHTML=`¥${subtotal.toFixed(2)}`

        /*总计: tbody中每行最后一个小计累加的和*/
        //获得tbody中每行最后一个td:
        var tds=div.querySelectorAll(
            "div>button>span:last-child"
        );
        //console.log(tds);
        var total=0;//准备保存总价
        //遍历tbody中每行最后一个td
        for(var td of tds){
            //将td的内容累加到total中
            total+=parseFloat(
                td.innerHTML.slice(1)
            );
        }
        //将total放到tfoot中最后一个格
        var span=document.getElementById("ae")
       // console.log(span)
        var ddd=document.getElementById("daa")
        var s = ddd.innerHTML;
        //console.log(s);
        //var aeDiv=document.getElementById("aeDiv")
       // console.log(aeDiv)
        var  in1= 100
        aeDiv.innerHTML=s
    }
}
//
////购物车2
//
///*数量变化*/
////1. 查找触发事件的元素
////查找table: id为data
//var div=document.getElementById("ab");
//var btns=//查找table下所有button
//    div.getElementsByTagName("button");
////console.log(btns);//打桩
////2. 绑定事件处理函数
////遍历btns中每个找到的btn
//for(var btn of btns){
//    //每遍历到一个btn，就给当前btn绑定单击事件处理函数:当当前按钮被单击时自动执行一项任务
//    btn.onclick=function(){
//        var btn=this;//自动获得当前单击的按钮
//        //3. 查找要修改的元素
//        //查找当前按钮的爹的第2个孩子
//        var span=btn.parentNode.children[1];
//        //4. 修改元素
//        //获得span的内容，转为整数
//        var n=parseInt(span.innerHTML);
//        if(btn.innerHTML=="+")//如果当前按钮是+
//            n++;//数量就+1
//        else if(n>1)//否则如果当前按钮是-,且n>1
//            n--;//数量才能-1
//        //将修改后的n，再放回span中
//        span.innerHTML=n;
//
//        /*计算小计*/
//        //获得当前按钮的父元素的前一个兄弟的内容转为浮点数
//        var btn=document.getElementById("ac")
//        var price=parseFloat(
//            //btn.parentNode
//            //.previousElementSibling
//            btn.lastElementChild
//                .innerHTML
//                .slice(1)//去掉开头的¥
//        );
//        //计算小计=单价*数量
//        var subtotal=price*n;
//        //查找当前按钮的爹的下一个兄弟元素,设置其内容为小计
//        var btn=document.getElementById("ad")
//        btn.children[0].innerHTML=`¥${subtotal.toFixed(2)}`
//
//        /*总计: tbody中每行最后一个小计累加的和*/
//        //获得tbody中每行最后一个td:
//        var tds=div.querySelectorAll(
//            "div>button>span:last-child"
//        );
//        //console.log(tds);
//        var total=0;//准备保存总价
//        //遍历tbody中每行最后一个td
//        for(var td of tds){
//            //将td的内容累加到total中
//            total+=parseFloat(
//                td.innerHTML.slice(1)
//            );
//        }
//        //将total放到tfoot中最后一个格
//        var span=document.getElementById("ae")
//        // console.log(span)
//        var ddd=document.getElementById("daa")
//        var s = ddd.innerHTML;
//        //console.log(s);
//        //var aeDiv=document.getElementById("aeDiv")
//        // console.log(aeDiv)
//        var  in1= 100
//        aeDiv.innerHTML=s
//    }
//}


//放大镜
//查找要修改的ul
var $ulImgs=$("#preview>div>div:last ul");
//定义mowed保存已经左移的li的个数
var moved=0;
var $lett=document.getElementById("lett");
//单击右边按钮向左移li
$("#preview>div>div:last>img:last")
    .click(function(){
        var $btnRight=$(this);
        //如果当前按钮不是禁用的
        if(!$btnRight.is(".disabled")){
            moved++;//左移的li个数+1
            //ul的marginLeft永远等于moved*-62
            $ulImgs.css("margin-left",-62*moved);
            //如果多余的li已经移动完了
            if($lett.length-moved==1)
            //就禁用当前按钮
                $btnRight.addClass("disabled");
            //只要右边按钮点了一下，左边按钮一定启用
            $btnRight.prevAll("img").removeClass("disabled")
        }
    })
//单击左边按钮向左移li
$("#preview>div>div:last>img:first")
    .click(function(){
        var $btnLeft=$(this);
        //如果当前按钮不是禁用的
        if(!$btnLeft.is(".disabled")){
            moved--;//左移的li个数-1
            //ul的marginLeft永远等于moved*-62
            $ulImgs.css("margin-left",-62*moved);
            //如果左移的li已经移动完了
            if(moved==0)
            //就禁用当前按钮
                $btnLeft.addClass("disabled");
            //只要右边按钮点了一下，左边按钮一定启用
            $btnLeft.nextAll("img").removeClass("disabled")
        }
    })
/*鼠标进入小图片，切换中图片和大图片*/
//保存中图片元素:
var $mImg=$("#preview>div>img");
var $lgDiv=$("#div-lg");
//利用冒泡: 为ulImgs绑定鼠标进入
//当鼠标进入img时，才触发
$ulImgs.on("mouseenter","img",function(){
    //获得当前img的data-md和data-lg，分别给中图片和大图片设置新路径
    var $img=$(this);
    $mImg.attr("src",$img.attr("data-md"));
    $lgDiv.css(
        "background-image",
        `url(${$img.attr("data-lg")})`
    );
})
/*鼠标进出中图片，控制遮罩层和大图片的显示隐藏*/
//查找遮罩层:
var $mask=$("#mask");
//查找supermask: 作为中图片和半透明遮罩层上层的保护层
var $smask=$("#super-mask");
//为superMask绑定鼠标进入事件和鼠标移出事件
$smask.hover(
    function(){//当鼠标进入时，都显示
        $mask.removeClass("d-none");
        $lgDiv.removeClass("d-none");
    },
    function(){//当鼠标移出时，都隐藏
        $mask.addClass("d-none");
        $lgDiv.addClass("d-none");
    }
)
    //为superMask绑定鼠标移动事件
    .mousemove(function(e){
        var offsetX=e.offsetX;
        var offsetY=e.offsetY;
        var top=offsetY-175/2;
        var left=offsetX-175/2;
        //如果top或left<0,就拉回0
        //如果top或left>175,就拉回175
        if(top<0) top=0; else if(top>175) top=175
        if(left<0) left=0;
        else if(left>175) left=175;
        $mask.css({top,left});
        //让lgDiv的背景图片位置跟随top和left移动
        $lgDiv.css("background-position",`-${1/2*left}px -${2*top}px`)
    })



//切换下一页
//$(".tabs:has([data-toggle=tab])")
//    .on("click","[data-toggle=tab]",e=>{
//        var $tar=$(e.target);
//        if(!$tar.parent().is(".active")){
//            $tar.parent().addClass("active")
//                .siblings().removeClass("active");
//            var id=$tar.attr("href");
//            $(id).addClass("active")
//                .siblings().removeClass("active");
//        }
//    })