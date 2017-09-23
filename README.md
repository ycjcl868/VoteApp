# voteApp

[![Build Status](https://travis-ci.org/ycjcl868/VoteApp.svg?branch=refactor-egg-0721)](https://travis-ci.org/ycjcl868/VoteApp)

## QuickStart

#### Snapshot


##### Index Page
![](https://ycjcl868.github.io/VoteApp/img/new-1.png)

##### Log Page
![](https://ycjcl868.github.io/VoteApp/img/new-2.png)

##### Summary Page
![](https://ycjcl868.github.io/VoteApp/img/new-3.png)

### Settings
mysql is disallow by default, if you want to enable the mysql db, please change the files as follow .

```
// import vote.sql into your mysql

// config/plugin.js
exports.mysql = {
- enable: false,
+ enable: true,
  package: 'egg-mysql',
};

// config/config.default.js , modify the your db settings exactly.
config.mysql = {
  client: {
    // host
    host: 'your db server',
    // port
    port: '3306',
    // user
    user: 'your db user',
    // passwd
    password: 'your passwd',
    database: 'vote',
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
};
```

### Development

```shell
# install the dependencies
$ npm install
```

```shell
# Front-End debug
$ npm run dev:client
$ open http://localhost:8000/
```

```shell
# Egg backend
$ npm run dev:server
$ open http://localhost:7001/news
```

```shell
# Front-End + Egg backend
$ npm run dev
$ open http://localhost:7001/news
```
### Deploy

Use `EGG_SERVER_ENV=prod` to enable prod mode

```shell
$ EGG_SERVER_ENV=prod npm start
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm run test-local` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org
