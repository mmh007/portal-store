const mysql=require('mysql');
//创建连接池对象
var pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'qi',
  connectionLimit:20
});
//导出连接池对象
module.exports=pool;



//http://127.0.0.1:3000/user/register
//{"code":200,"msg":"register suc"}