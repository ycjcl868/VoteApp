var express = require('express');
var router = express.Router();
var api = require('../api');

/* GET home page. */
router.get('/', function(req, res, next) {
    req.session.ip = req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'] : '127.0.0.1';
    res.render('index', { title: '首页 - 电影投票系统',page:'index' });
});

router.get('/news',function (req, res, next) {
   res.render('news',{title:'动态页 - 电影投票系统',page:'news'}); 
});

router.get('/summary',function (req, res, next) {
   res.render('summary',{title:'统计页 - 电影投票系统',page:'summary'}); 
});

module.exports = router;
