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
