var request = require('request');
var md5 = require('md5');

var timeout = 8000;
var baiduAK = 'xxxxxxxxxxxxxx';

module.exports = {
    /**
     * 获取电影信息
     * @param fun 回调函数
     */
    getMovie:function (fun) {
        request.get('http://123.207.100.172/VoteSystem/cine/news.do',function (err, req, res) {
            fun(res);
        })
    },
    /**
     * 执行投票操作
     * @param params
     * @param fun
     */
    doVote:function(params,fun){
      request.post({
          url: 'http://123.207.100.172/VoteSystem/user/poll.do',
          form:params,
          timeout:timeout
      },function (err, req, res) {
          if(err){
              fun(JSON.stringify({state:-2}));
          }else{
              fun(res);
          }
      })  
    },
    /**
     * 添加电影
     */
    addMovie:function(params,fun){
        request.post({
            url:'http://123.207.100.172/VoteSystem/insert/cine.do', 
            form:params,
            timeout:timeout
        },function(err,req,res){
            if(err){
                fun({state:-2});
            }else{
                fun(res);
            }
        });
    },
    /**
     * 删除电影
     */
    delMovie:function (params, fun) {
        request.post({
            url:'http://123.207.100.172/VoteSystem/delete/cine.do',
            form:params,
            timeout:timeout
        },function(err,req,res){
            if(err){
                fun({state:-2});
            }else{
                fun(res);
            }
        });
    },
    getSummary:function (fun) {
      request.get('http://123.207.100.172/VoteSystem/obtain/data.do',function (err, req, res) {
          fun(res);
      });
    },
    /**
     * 获取日志数
     */
    getNum:function (fun) {
      request.get('http://123.207.100.172/VoteSystem/info/count.do',function (err, req, res) {
         fun(res); 
      });
    },
    /**
     * 获取日志信息
     */
    getLog:function (fun) {
        request.get('http://123.207.100.172/VoteSystem/info/news.do',function (err, req, res) {
            fun(res);
        })
    },
    /**
     * 加密token 
     * @param userIP 用户ip
     */
    cryptoToken:function(userIP,fun){
        return md5(userIP + 'xxxxxx');
    },
    getProvince:function (userIP,fun) {
        
        request.get('http://api.map.baidu.com/location/ip?ip='+userIP+'&ak='+baiduAK+'&coor=bd09ll',function (err, req, res) {
            if(err){
                fun({state:-2});
            }
            var json = JSON.parse(res);
            var province = '陕西省';
            // console.log(json.status);
            if(json.status === 0){
                 province = json.content.address_detail.province;    
            }
            console.log(json);
            // console.log(province);
            fun(province);
        })
    }
};