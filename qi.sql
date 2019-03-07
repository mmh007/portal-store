SET NAMES UTF8;
DROP DATABASE IF EXISTS qi;
CREATE DATABASE qi CHARSET=UTF8;
USE qi;

/** 1主标题 **/
CREATE TABLE HOME_title(
	sid INT PRIMARY KEY AUTO_INCREMENT,  #编号
	title  VARCHAR(68)				#标题
);
/** 1插入主标题数据 **/
INSERT INTO HOME_title VALUES
	(NULL,'家园一角'),
	(NULL,'关于我们'),
	(NULL,'投资组合'),
	(NULL,'博客'),
	(NULL,'商店'),
	(NULL,'联系方式');
       

/** 2轮播图 **/
CREATE TABLE HOME_img(
	sid INT PRIMARY KEY AUTO_INCREMENT, #编号
	content VARCHAR(60)	    		       #内容图片路径
);

/** 2轮播图 **/
INSERT INTO  HOME_img VALUES
(NULL,'public/imges/slide1.jpg'),
(NULL,'public/imges/slide2.jpg'),
(NULL,'public/imges/slide3.jpg');


/**-3工艺模板项目**/
CREATE TABLE HOME_craft(
	sid INT PRIMARY KEY AUTO_INCREMENT,  #编号
	title VARCHAR(120),				#小标题
	content VARCHAR(1000)			#内容
);

/**3插入工艺数据**/
INSERT INTO HOME_craft VALUES
	(NULL,'特色工艺模板项目','制作是我们的专长，我们制作漂亮的网站和模板');
	

/**-4项目磨块**/
CREATE TABLE HOME_proj(
	sid INT PRIMARY KEY AUTO_INCREMENT,  #编号
	title VARCHAR(120),				#小标题
	intro VARCHAR(60)			        #简介
);

/**4插入项目磨块数据**/
INSERT INTO HOME_proj VALUES
	(NULL,'检查的项目磨片制作','制作是我们的专长，我们制作漂亮的网站和模板'),
	(NULL,'检查的项目磨片制作','制作是我们的专长，我们制作漂亮的网站和模板'),
	(NULL,'检查的项目磨片制作','制作是我们的专长，我们制作漂亮的网站和模板'),
	(NULL,'检查的项目磨片制作','制作是我们的专长，我们制作漂亮的网站和模板'),
	(NULL,'检查的项目磨片制作','制作是我们的专长，我们制作漂亮的网站和模板'),
	(NULL,'检查的项目磨片制作','制作是我们的专长，我们制作漂亮的网站和模板'),
	(NULL,'检查的项目磨片制作','制作是我们的专长，我们制作漂亮的网站和模板'),
	(NULL,'检查的项目磨片制作','制作是我们的专长，我们制作漂亮的网站和模板'),
	(NULL,'检查的项目磨片制作','制作是我们的专长，我们制作漂亮的网站和模板');


/**4-1项目磨块图片**/
CREATE TABLE HOME_pro_sh(
	sid INT PRIMARY KEY AUTO_INCREMENT,  #编号
	content VARCHAR(1000)			#内容
	);

/**4-1插入项目磨块图片数据**/
INSERT INTO HOME_pro_sh VALUES
	(NULL,'public/imges/portfolio2.jpg'),
	(NULL,'public/imges/portfolio3.jpg'),
	(NULL,'public/imges/portfolio4.jpg'),
	(NULL,'public/imges/portfolio5.jpg'),
	(NULL,'public/imges/portfolio6.jpg'),
	(NULL,'public/imges/portfolio7.jpg'),
	(NULL,'public/imges/portfolio8.jpg'),
	(NULL,'public/imges/portfolio9.jpg'),
	(NULL,'public/imges/portfolio10.jpg');


/**4-2项目磨块图片**/
CREATE TABLE HOME_pro_art(
	sid INT PRIMARY KEY AUTO_INCREMENT,  #编号
	content VARCHAR(1000)			#内容
	);

/**4-2插入项目磨块图片数据**/
INSERT INTO HOME_pro_art VALUES
	(NULL,'public/imges/portfolio2.jpg'),
	(NULL,'public/imges/portfolio3.jpg'),
	(NULL,'public/imges/portfolio4.jpg'),
	(NULL,'public/imges/portfolio5.jpg');

/**4-3项目磨块图片**/
CREATE TABLE HOME_pro_de(
	sid INT PRIMARY KEY AUTO_INCREMENT,  #编号
	content VARCHAR(1000)			#内容
	);

/**4-3插入项目磨块图片数据**/
INSERT INTO HOME_pro_de VALUES
	(NULL,'public/imges/portfolio6.jpg'),
	(NULL,'public/imges/portfolio7.jpg'),
	(NULL,'public/imges/portfolio8.jpg'),
	(NULL,'public/imges/portfolio9.jpg');


/**4-4项目磨块图片**/
CREATE TABLE HOME_pro_na(
	sid INT PRIMARY KEY AUTO_INCREMENT,  #编号
	content VARCHAR(1000)			#内容
	);

/**4-4插入项目磨块图片数据**/
INSERT INTO HOME_pro_na VALUES
	(NULL,'public/imges/portfolio2.jpg'),
	(NULL,'public/imges/portfolio3.jpg'),
	(NULL,'public/imges/portfolio4.jpg'),
	(NULL,'public/imges/portfolio5.jpg');


/**5插入项目模板**/
CREATE TABLE HOME_temp(
	sid INT PRIMARY KEY AUTO_INCREMENT,  #编号
	content VARCHAR(1000)			#内容
	);

/**5-1插入项目图片数据**/
INSERT INTO HOME_temp VALUES
	(NULL,'public/imges/home1-ipad-iphone.png');


/**6插入OUR模板**/
CREATE TABLE HOME_our(
	sid INT PRIMARY KEY AUTO_INCREMENT,  #编号
	content VARCHAR(1000)			#内容
	);

/**6-1插入OUR简介数据**/
INSERT INTO HOME_our VALUES
	(NULL,'Crafting is our speciality, we craft beautifull web site and templates, your business with us will benefit in most better way, so why wait buy now and gain great web site from our team.');


/**7插入SERVICES模板**/
CREATE TABLE HOME_services(
	sid INT PRIMARY KEY AUTO_INCREMENT,  #编号
	content VARCHAR(1000)			#内容
	);

/**7-1插入SERVICESJ简介数据**/
INSERT INTO HOME_services VALUES
	(NULL,'We are a special team, a lot of members but with big potential to work for the best of our customers. Our knights can really show fantastic ideas and work.');


/**8插入TABLES模板**/
CREATE TABLE HOME_tables(
	sid INT PRIMARY KEY AUTO_INCREMENT,  #编号
	content VARCHAR(1000)			#内容
	);

/**8-1插入TABLES简介数据**/
INSERT INTO HOME_tables VALUES
	(NULL,'We are a special team, a lot of members but with big potential to work for the best of our customers. Our knights can really show fantastic ideas and work.');


/**9插入FORM模板**/
CREATE TABLE HOME_form(
	sid INT PRIMARY KEY AUTO_INCREMENT,  #编号
	content VARCHAR(1000)			#内容
	);

/**9-1插入FORM简介数据**/
INSERT INTO HOME_form VALUES
	(NULL,'What to speak directly to us, we are here and waiting for you to tell us what you thing of this theme. So don?t hesitate and contact us and rate our template.');


/**10插入用户名、密码**/
CREATE TABLE HOME_male(
	sid INT PRIMARY KEY AUTO_INCREMENT,  #编号
	uname VARCHAR(16),				#用户
	upwd VARCHAR(16)				#密码
);

/**10插入用户名、密码**/
INSERT INTO HOME_male VALUES
	(NULL,'mmh','124578');

/**11插入留言**/
CREATE TABLE HOME_reports(
	sid INT PRIMARY KEY AUTO_INCREMENT,  #编号
	lname VARCHAR(16),				#用户
	email VARCHAR(30),				#邮箱
	phone CHAR(20),					#电话
	message VARCHAR(500)			#留言
);


/**11插入留言内容**/
INSERT INTO HOME_reports VALUES
(NULL,'马美华','1245718734@qq.com','18249216771','合作愉快!');