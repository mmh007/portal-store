//������һ��Ŀ¼�µ�mysql���ӳض���
const express=require('express');
const pool=require('../pool.js');
//������·����
var router=express.Router();
//1.��������
//��ȡpost���������
router.get('/teee',(req,res)=>{
    //�ж��û����Ƿ�Ϊ��
     //console.log(obj);
    var obj=req.query;
    //console.log(obj);
    var $lname=obj.lname;
    //var lname=/^\d[a-z A-Z]{3,4}$/
    if(!$lname){
        res.send({code:401,msg:'lname required'});
        //��ֹ��������ִ��
        return;
    };
    //��֤�����Ƿ�Ϊ��
    var $email=obj.email;
    if(!$email){
        res.send({code:402,msg:'email required'});
        //��ֹ��������ִ��
        return;
    };
    //��֤�绰�����Ƿ�Ϊ��
    var $phone=obj.phone;
    if(!$phone){
        res.send({code:403,msg:"phone required"});
        return;
    };
    //��֤�������Ƿ�Ϊ��
    var $message=obj.message;
    if(!$message){
        res.send({code:404,msg:"message requirend"});
        return;
    }
    //ִ��SQL��䣬��ע������ݲ��뵽HOME_report���ݱ��У��ɹ���Ӧ {code:200,msg:'register suc'}
    pool.query('INSERT INTO HOME_reports SET ? ',[obj],(err,result)=>{
        if(err) throw err;
        //�Ƿ���ӳɹ�
        if(result.affectedRows>0){
            res.send(result);
        }
    });
});
//����ɹ���ʾҳ��
router.get('/getme',(req,res)=>{
    //sql
    var sql="SELECT * FROM HOME_reports";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:result});
        }else{
            res.send({code:-1,msg:"����"});
        }
    });
});
//����·����
module.exports=router;