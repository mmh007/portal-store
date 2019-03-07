//引入上一级目录下的mysql连接池对象
const express=require('express');
const pool=require('../pool.js');
//创建空路由器
var router=express.Router();
//1.用户注册
//获取post请求的数据
router.post('/register',(req,res)=>{
  //判断用户名是否为空
 // console.log(obj);
  var obj=req.body;
  var $uname=obj.uname;
  if(!$uname){
    res.send({code:401,msg:'name required'});
    //阻止继续往后执行
    return;
  };
  //验证密码是否为空
  var $upwd=obj.upwd;
  if(!$upwd){
    res.send({code:402,msg:'upwd required'});
    return;
  };
  //执行SQL语句，将注册的数据插入到pi_user数据表中，成功响应 {code:200,msg:'register suc'}
  pool.query('INSERT INTO HOME_male SET ?',[obj],(err,result)=>{
    if(err) throw err;
    //是否添加成功
    if(result.affectedRows>0){
      res.send({code:200,msg:'register suc'});
    }
  });
});

//导出路由器
module.exports=router;