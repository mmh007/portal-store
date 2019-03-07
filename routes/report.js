//引入上一级目录下的mysql连接池对象
const express=require('express');
const pool=require('../pool.js');
//创建空路由器
var router=express.Router();
//1.发表留言
//获取post请求的数据
router.get('/teee',(req,res)=>{
    //判断用户名是否为空
     //console.log(obj);
    var obj=req.query;
    //console.log(obj);
    var $lname=obj.lname;
    //var lname=/^\d[a-z A-Z]{3,4}$/
    if(!$lname){
        res.send({code:401,msg:'lname required'});
        //阻止继续往后执行
        return;
    };
    //验证邮箱是否为空
    var $email=obj.email;
    if(!$email){
        res.send({code:402,msg:'email required'});
        //阻止继续往后执行
        return;
    };
    //验证电话号码是否为空
    var $phone=obj.phone;
    if(!$phone){
        res.send({code:403,msg:"phone required"});
        return;
    };
    //验证表单内容是否为空
    var $message=obj.message;
    if(!$message){
        res.send({code:404,msg:"message requirend"});
        return;
    }
    //执行SQL语句，将注册的数据插入到HOME_report数据表中，成功响应 {code:200,msg:'register suc'}
    pool.query('INSERT INTO HOME_reports SET ? ',[obj],(err,result)=>{
        if(err) throw err;
        //是否添加成功
        if(result.affectedRows>0){
            res.send(result);
        }
    });
});
//发表成功显示页面
router.get('/getme',(req,res)=>{
    //sql
    var sql="SELECT * FROM HOME_reports";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:result});
        }else{
            res.send({code:-1,msg:"错误！"});
        }
    });
});
//导出路由器
module.exports=router;