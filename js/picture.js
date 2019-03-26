$(function(){
    var  sid = location.search.split("=")[1];
    load(sid);
})
//动态获取查询图片
function load(sid){
    $.ajax({
        url: "http://127.0.0.1:3000/report/sd",//指app下的“report” 指路由report.js下的接口 “/asd”
        type: "get",
        data:{sid},
        dataType: "json",//自动转JSON.parse()
        //将片段填充回页面中原父元素内：
        success: function (data) {
            //console.log(data);
            // 第一次截取内容
            var html = "";
            for(var item of data){
                //onclick="aa" data-id="item.id"
                html+=`<img class="my_img m-auto my_pp_f " src="${item.href}" alt=""/>`
            };
            //查询
            var div = document.getElementById("pia");
            div.innerHTML = html;

        }
    })
}
