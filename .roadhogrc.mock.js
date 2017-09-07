export default {
  'GET /api/v1/movies': (req, res) => {
    const json = {
      "status": 2,
      "list": [
        {
          "cineId": 21,
          "cineName": "组员去接理青",
          "ticket": 171,
          "url": "http://dummyimage.com/350x200",
          "type": [
            "他该问无",
            "际资市",
            "书什"
          ],
          "publishTime": "1998-03-14",
          "des": "气解位专最酸应几学与石组北。色酸然明会四究至相安己反两生以。求了响四千那例下例产总达器。",
          "isNew": false
        },
        {
          "cineId": 23,
          "cineName": "单数红长化开",
          "ticket": 66,
          "url": "http://dummyimage.com/350x200",
          "type": [
            "论再火",
            "王特气",
            "标回我",
            "那府"
          ],
          "publishTime": "1981-08-29",
          "des": "养历局导号系度据况进选子技而题几把。接从口可却书所之标科精斗什商者过。难所别要为九种引权之机经家干通毛。局必手布战可阶在更具形称很实没具。",
          "isNew": false
        },
        {
          "cineId": 70,
          "cineName": "大历影第据本",
          "ticket": 112,
          "url": "http://dummyimage.com/350x200",
          "type": [
            "体平",
            "完话空"
          ],
          "publishTime": "2015-11-29",
          "des": "平群月在天单代由正为万从研例样。采以风格关到少了育养以么千油。上龙广酸法将进力细省自许接道内总。物总水影么细个行志按始价。",
          "isNew": false
        },
        {
          "cineId": 86,
          "cineName": "保安被",
          "ticket": 275,
          "url": "http://dummyimage.com/350x200",
          "type": [
            "半定青",
            "清万象养",
            "次层离",
            "存主"
          ],
          "publishTime": "2006-11-21",
          "des": "话件力打然便存办月果带导志。论前都专用候增消素这王式离四京。增程学好热感广名花被选什相中布。格并海高京明织广清律因声应除油传生。群与合阶看问眼较油千速亲会。越根争元积型产会选易及除风教后根行。",
          "isNew": false
        }
      ]
    };
    setTimeout(() => {
      res.json(json)
    }, 300);
  },
  'GET /api/v1/summary': (req, res) => {
    const json = {
      "status": 1,
      "data": [
        {
          "name": "设无处定真",
          "num": 39
        },
        {
          "name": "器拉等科",
          "num": 6
        },
        {
          "name": "车子",
          "num": 54
        },
        {
          "name": "毛将级王等",
          "num": 70
        },
        {
          "name": "究清达干什",
          "num": 9
        },
        {
          "name": "院合术究计",
          "num": 21
        }
      ]
    }
    setTimeout(() => {
      res.json(json)
    }, 300)
  },
  'GET /api/v1/logNum': (req, res) => {
    const json = {
      "status": 1,
      "number": 6
    }
    setTimeout(() => {
      res.json(json)
    }, 300)
  },
  'GET /api/v1/logs': (req, res) => {
    const json = {
      "status": 3,
      "logs": [
        {
          "ip": "112.45.207.63",
          "time": "1973-08-22 16:27:12",
          "num": 10,
          "movie": "青斯开"
        },
        {
          "ip": "86.167.134.169",
          "time": "1980-12-11 14:43:34",
          "num": 21,
          "movie": "达世术手"
        },
        {
          "ip": "67.102.104.136",
          "time": "1992-04-06 20:25:30",
          "num": 21,
          "movie": "查近教林"
        },
        {
          "ip": "53.112.107.189",
          "time": "2010-12-08 13:00:20",
          "num": 52,
          "movie": "业明样分"
        },
        {
          "ip": "36.254.241.112",
          "time": "1987-11-26 00:53:43",
          "num": 53,
          "movie": "查消政回飞"
        }
      ]
    }
    setTimeout(() => {
      res.json(json)
    }, 300)
  }
}
