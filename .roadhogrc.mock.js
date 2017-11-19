var movie = require('./mockData/getMovie.json');
var logs = require('./mockData/getLogs.json');
var logNum = require('./mockData/getLogNum.json');
var summary = require('./mockData/getSummary.json');

export default {
  '/api/*': 'http://127.0.0.1:7001',
  // 'GET /api/v1/movies': (req, res) => {
  //   setTimeout(() => {
  //     res.json(movie)
  //   }, 300);
  // },
  // 'GET /api/v1/summary': (req, res) => {
  //   setTimeout(() => {
  //     res.json(summary)
  //   }, 300)
  // },
  // 'GET /api/v1/logNum': (req, res) => {
  //   setTimeout(() => {
  //     res.json(logNum)
  //   }, 300)
  // },
  // 'GET /api/v1/logs': (req, res) => {
  //   setTimeout(() => {
  //     res.json(logs)
  //   }, 300)
  // }
}
