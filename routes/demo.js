//引入上一级目录下的mysql连接池对象
const pool=require('../pool.js');
const express=require('express');
//创建空路由器
var router=express.Router();
//添加路由
//2.登录接口
router.get('/login',(req,res)=>{
	//获取用户名称和密码
	var $uname=req.query.uname;
	var $upwd=req.query.upwd;
	if(!$uname){
	 res.send('用户名为空');
	 return;
	}
	if(!$upwd){
	 res.send('密码为空');
	 return;
	}
	var sql="select * from HOME_male "+
		"where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(result.length>0){
			res.send("登录成功");
		}else{
			res.send("用户名密码错误");
		}
	});
});

//导出路由器
module.exports=router;