var express = require('express');
var router = express.Router();
var md5 = require('md5');

var token = md5('godcan');
var api = require('../api');

var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../dist/upload/');
    },
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
});
var upload = multer({  storage: storage });


/**
 * 登陆页面
 */
router.get('/login',function(req,res,next){
    if(!req.session.adminID){
        console.log('req.session.authcode:'+req.session.authcode);
        res.render('admin/login');
    }
});

/**
 * 主页
 */
router.get('/',isLogin,function(req, res, next) {
    res.render('admin/home',{name: req.session.adminID,page:'home'});
});

/**
 * 电影页
 */
router.get('/movie',isLogin,function(req,res,next){
    api.getMovie(function (result) {
        var data = JSON.parse(result);
        res.render('admin/movie',{data:data,name: req.session.adminID,page:'movie'});
    });

});
/**
 * 退出
 */
router.get('/loginout',isLogin,function(req,res,next){
    req.session.userID = '';
    res.redirect('/admin/login');
});

/**
 * 日志页
 */
router.get('/log',isLogin,function (req, res, next) {
    api.getLog(function (result) {
       var data = JSON.parse(result);
        res.render('admin/log',{data:data,name:req.session.adminID,page:'log'});
    });
    
});





/**
 * 登陆验证
 * 
 */
router.post('/login',function(req,res,next){
    var username = req.body.username;
    var password = md5(req.body.password);
    var usercode = 1;
    var authcode = 1;
    
    var params = {};
    console.log(username);
    console.log(password);

    if(username && password){
        if(usercode !== authcode){
            params = {status:0,info:'验证码错误'};
        }else if(username == ''){
            params = {status:-1,info:'用户名错误'};
        }else{
            if(username == 'kylin' && password == '4fb1ea2fccc51a29a3285c603287d006'){
                params = {status:1,info:'登陆成功',adminID:'kylin'};
                req.session.adminID = 'kylin';
            }else{
                params = {status:-2,info:'密码错误'};
            }
        }
    }else{
        params = {status:0,info:"参数错误"};
    }
    
    res.json(params);
});


/**
 * 添加电影
 * 
 */
router.post('/movie/add',isLogin,function (req, res, next) {
    var params = {};
    params.token = token;
    params.cineName = req.body.cineName;
    params.url = req.body.url;
    params.type = req.body.type;
    params.des = req.body.des;
    
    api.addMovie(params,function (result) {
        console.log(result);
        res.json(result);
    });
    
    
    
});

/**
 * 删除电影
 */
router.post('/movie/del',isLogin,function (req, res, next) {
    var params = {};
    params.token = token;
    params.cineId = req.body.cineId;
    
    api.delMovie(params,function (result) {
       console.log(result);
       res.json(result);
    });
    
});

/**
 * 修改电影
 */
router.post('/movie/edit',isLogin,function (req, res, next) {
    var params = {};
    params.token = token;
    params.cineId = req.body.cineId;
});

/**
 * 上传图片
 */
router.post('/upload',isLogin,upload.single('upload'),function (req, res, next) {
    
    var params = {};
    if(req.file){
        var filename = req.file.filename;
        params = {status:1,filename:filename};
    }else{
        params = {status:-1};
    }
    res.json(params);
});



/**
 * 是否已经登陆
 */

function isLogin(req,res,fun) {
    if(!req.session.adminID){
        console.log('Access Denied');
        res.redirect('/admin/login');
    }else{
        fun();
    }
}



module.exports = router;