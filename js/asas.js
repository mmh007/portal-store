var mian=document.getElementById("mian");
var mychart=echarts.init(main);
var option = {
    //title: {text: '折线图堆叠'},//标题
    tooltip: {trigger: 'scatter'},//scatter手的形状
    tooltip: {trigger: 'axis'},//线条
    legend: {data:['CEO','web开发','经理','销售','员工']},//二级标题
    grid: {left: '3%',right: '4%',bottom: '0%',top:'20%',containLabel: true},//边距调整
    toolbox: {feature: {saveAsImage: {}}},//下载按钮
    xAxis: {type: 'category',boundaryGap: false,data: ['一月','二月','三月','四月','五月','六月','七月']},
    yAxis: {type: 'value'},
    series: [{name:'CEO',type:'line',stack: '总量',data:[120, 132, 101, 134, 90, 230, 210]},
        {name:'web开发',type:'line',stack: '总量',data:[220, 182, 191, 234, 290, 330, 310]},
        {name:'经理',type:'line',stack: '总量',data:[150, 232, 201, 154, 190, 330, 410]},
        {name:'销售',type:'line',stack: '总量',data:[320, 332, 301, 334, 390, 330, 320]},
        {name:'员工',type:'line',stack: '总量',data:[82, 32, 91, 934, 290, 130, 120]}
    ]
};
mychart.setOption(option);


// //
// //1:获取容器
// var main=document.getElementById("main");
// //2:创建echarts对象
// var mycharts=echarts.init(main)
// //3:创建配置
// var option={
//     title:{text:"项目简介"},
//     xAxis:{data:["经理","web","销售","助力"]},
//     yAxis:{},
//     series:[{type:"bar",data:["60","35","60","80"]}]
// }
// //4:将配置项添加chearts对象
// mycharts.setOption(option)