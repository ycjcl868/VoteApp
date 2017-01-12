var express = require('express');
var router = express.Router();
var api = require('../api');


/**
 * 获取电影
 */
router.get('/getMovie',function (req, res, next) {
    api.getMovie(function (result) {
        res.json(result);
    });
});

/**
 * 获取统计数据
 */
router.get('/getSummary',function (req, res, next) {
   api.getSummary(function (result) {
       res.json(result);
   });
});

/**
 * 获取日志
 */
router.get('/getLog',function (req, res, next) {
    api.getLog(function (result) {
        res.json(result);     
    });
});


/**
 * 获取日志数
 */
router.get('/getNum',function (req, res, next) {
    api.getNum(function (result) {
       res.json(result); 
    });
});


/**
 * 执行投票操作(POST)
 * @param userIP 用户ip
 * @param token  用户唯一标识加密(ip+'godcan').md5()
 * @param cineId 电影id
 * @param province  省份
 *
 * 返回：state // 状态或票数
 *      cineId // 电影id
 */
router.post('/doVote', function(req, res, next) {
    var params = {};
    var send = res;
    params.userIP = req.session.ip;
    params.token = api.cryptoToken(req.session.ip);
    params.cineId = req.body.cineId;
    api.getProvince(req.session.ip,function (res) {
        params.province = res;
        console.log(params);
        
        api.doVote(params,function (res) {
            console.log(res);
            send.send(res);
        })
    });
});













module.exports = router;
