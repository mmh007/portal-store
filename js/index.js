//var showPro=document.getElementById("showPro").firstChild;
//var product=showPro.nextElementSibling;
//console.log(product);
//showPro.onmouseenter=function(){
//    product.classList.remove("d-none");
//};
//showPro.onmouseleave=function(){
//    product.classList.add("d-none");
//
//下拉
$(function(){
    $(".my_naw>ul>li:nth-child(6)").mousemove(function(){
        $("#showPro").css("display","block");
    }).mouseout(function(){
        $("#showPro").css("display","none");
    })
})

//  <!-- 导航边栏-->

//window.onscroll=function(){
//    var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
//    console.log(scrollTop);
//    if(scrollTop>=410) {
//        sidebar.style.display = "block";
//        console.log(1111111);
//    }
//    if(scrollTop<410) {
//        sidebar.style.display = "none";
//    }
//    if(scrollTop>600){
//        sidebar.style.color = "red";
//    }
//}
window.onscroll=function(){
    var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
    console.log(scrollTop);

    if(scrollTop>=500) {
        sidebar.style.display = "block";
    }
    var sidebar1=document.getElementById("sidebar1");
        //console.log(sidebar1);
    if(scrollTop>600 && scrollTop<1200){sidebar1.style.color = "red";}
    if(scrollTop>1201){sidebar1.style.color = "black";}

    var sidebar2=document.getElementById("sidebar2");
        //console.log(sidebar2);
    if(scrollTop>1260 && scrollTop<2200){sidebar2.style.color = "Blue ";}
    if(scrollTop>2201){sidebar2.style.color = "black";}

    var sidebar3=document.getElementById("sidebar3");
        //console.log(sidebar3);
    if(scrollTop>=2300 && scrollTop<2800){sidebar3.style.color = "green";}
    if(scrollTop>2801){sidebar3.style.color = "black";}

    var sidebar4=document.getElementById("sidebar4");
        //console.log(sidebar4);
    if(scrollTop>=2900 && scrollTop<3340){sidebar4.style.color = "purple";}
    if(scrollTop>4001){sidebar4.style.color = "black";}

    var sidebar5=document.getElementById("sidebar5");
    //console.log(sidebar4);
    if(scrollTop>=2900 && scrollTop<3340){sidebar5.style.color = "purple";}
    if(scrollTop>4001){sidebar4.style.color = "black";}

    if(scrollTop<400) {
        sidebar.style.display = "none";
    }
    if(scrollTop>3360) {
        sidebar.style.display = "none";
    }
}

//<!--正则表达式-->
$("#phone").blur(function(){
    var str=/^1[3-8]\d{11}$/;
    //console.log(111);
    if(!str.test($(this).val)){
        alert(`手机号号码有误`);
    }else{
        console.log(111);
    }
});


//动态获取查询图片
$(function(){//避免造成全局变量的全局污染
    $.ajax({
        url: "http://127.0.0.1:3000/report/asd",//指app下的“report” 指路由report.js下的接口 “/asd”
        type: "get",
        dataType: "json",//自动转JSON.parse()
        //将片段填充回页面中原父元素内：
        success: function (data) {
            //console.log(data);
            // 第一次截取内容
            var res = data;
            var pei = data;
            var data = res.slice(0,3);
            var html = "";
            for(var item of data){
                html+=`<div id="img2" class="m-0 p-1 mt-3 my_pp_fd my_pp" onclick="aa(${item.sid})">
                            <h3 class="my_nav">${item.title}</h3>
                            <h4 class="my_nav my_to">${item.details}</h4>
                            <img class=" my_img m-auto my_pp_f" src="${item.href}" alt=""/>
                        </div>`
            };
            //查询
            var div = document.getElementById("my_sql");
            //console.log(div);
            div.innerHTML = html;

            // 第二次截取内容
            var data = res.slice(3,6);
            var html = "";
            for(var tem of data){
                html+=`<div id="img9" class="m-0 p-1 mt-3 my_pp_fd my_pp" onclick="aa(${tem.sid})">
                            <h3 class="my_nav">${tem.title}</h3>
                            <h4 class="my_nav my_to">${tem.details}</h4>
                            <img class=" my_img1 m-auto" src="${tem.href}" alt=""/>
                        </div>`
            };
            //查询
            var div = document.getElementById("my_sq");
            //console.log(div);
            div.innerHTML = html;

            // 第三次截取内容
            var data = pei.slice(6,9);
            var html = "";
            for(var te of data){
                html+=`<div id="img9" class="m-0 p-1 mt-3 my_pp_fd my_pp"  onclick="ac(${te.sid})">
                            <h3 class="my_nav">${te.title}</h3>
                            <h4 class="my_nav my_to">${te.details}</h4>
                            <img class=" my_img1 m-auto" src="${te.href}" alt=""/>
                        </div>`
            };
            //查询
            var div = document.getElementById("my_sqin");
            div.innerHTML=html;
        }
    })
})

function aa(sid){
    location.href="picture.html?sid="+sid;
}
function ab(sid){
    location.href="picture.html?sid="+sid;
}
function ac(sid){
    location.href="picture.html?sid="+sid;
}































//正则表达式 电话号码
//$("#phone").blur(function(){
//    var str=/^1[1-9]\d{11}$/;
////      console.log(111);
//    if(!str.test($(this).val)){
//        alert(`手机号号码有误`);
//    }
//});

//放大缩小
//
//
//function adjustHeightOfPage(pageNo) {
//
//    var offset = 80;
//    var pageContentHeight = 0;
//
//    var pageType = $('div[data-page-no="' + pageNo + '"]').data("page-type");
//
//    if( pageType != undefined && pageType == "gallery") {
//        pageContentHeight = $(".cd-hero-slider li:nth-of-type(" + pageNo + ") .tm-img-gallery-container").height();
//    }
//    else {
//        pageContentHeight = $(".cd-hero-slider li:nth-of-type(" + pageNo + ") .js-tm-page-content").height() + 20;
//    }
//
//    if($(window).width() >= 992) { offset = 120; }
//    else if($(window).width() < 480) { offset = 40; }
//
//    // Get the page height
//    var totalPageHeight = $('.cd-slider-nav').height()
//        + pageContentHeight + offset
//        + $('.tm-footer').height();
//
//    // Adjust layout based on page height and window height
//    if(totalPageHeight > $(window).height())
//    {
//        $('.cd-hero-slider').addClass('small-screen');
//        $('.cd-hero-slider li:nth-of-type(' + pageNo + ')').css("min-height", totalPageHeight + "px");
//    }
//    else
//    {
//        $('.cd-hero-slider').removeClass('small-screen');
//        $('.cd-hero-slider li:nth-of-type(' + pageNo + ')').css("min-height", "100%");
//    }
//}
//
///*
// Everything is loaded including images.
// */
//$(window).load(function(){
//
//    adjustHeightOfPage(1); // Adjust page height
//
//    /* Gallery One pop up
//     -----------------------------------------*/
//    $('.gallery-one').magnificPopup({
//        delegate: 'a', // child items selector, by clicking on it popup will open
//        type: 'image',
//        gallery:{enabled:true}
//    });
//
//    /* Gallery Two pop up
//     -----------------------------------------*/
//    $('.gallery-two').magnificPopup({
//        delegate: 'a',
//        type: 'image',
//        gallery:{enabled:true}
//    });
//
//    /* Gallery Three pop up
//     -----------------------------------------*/
//    $('.gallery-three').magnificPopup({
//        delegate: 'a',
//        type: 'image',
//        gallery:{enabled:true}
//    });
//
//    /* Collapse menu after click
//     -----------------------------------------*/
//    $('#tmNavbar a').click(function(){
//        $('#tmNavbar').collapse('hide');
//
//        adjustHeightOfPage($(this).data("no")); // Adjust page height
//    });
//
//    /* Browser resized
//     -----------------------------------------*/
//    $( window ).resize(function() {
//        var currentPageNo = $(".cd-hero-slider li.selected .js-tm-page-content").data("page-no");
//
//        // wait 3 seconds
//        setTimeout(function() {
//            adjustHeightOfPage( currentPageNo );
//        }, 1000);
//
//    });
//
//    // Remove preloader (https://ihatetomatoes.net/create-custom-preloading-screen/)
//    $('body').addClass('loaded');
//
//});
