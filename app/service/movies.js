const moment = require('moment');


module.exports = app => {
  return class Index extends app.Service {
    * listMovies() {
      const movies = yield app.mysql.select('cine');
      const newMovies = movies.map((item, i) => {
        return Object.assign(item, {
          url: item.poster,
          type: item.type.split('/'),
          des: item.description,
          isNew: item.isNew === 1,
          publishTime: moment(item.publishTime).format('YYYY-MM-DD'),
        });
      });
      return {
        status: 2,
        list: newMovies,
      };
    }
    * addMovie(newMovie) {
      const { cineName } = newMovie;
      const isExist = yield app.mysql.get('cine', {
        cineName,
      });
      if (isExist) {
        return {
          status: -1,
          info: '已经存在该电影',
        };
      }
      const result = yield app.mysql.insert('cine', newMovie);
      return {
        status: result.affectedRows,
        info: '添加成功',
      };
    }
    * updateMovie(id, newInfo) {
      if (!id) {
        return {
          status: -3,
          info: '请输入电影id',
        };
      }
      const isExist = yield app.mysql.get('cine', {
        id,
      });
      if (!isExist) {
        return {
          status: -1,
          info: '没有该电影',
        };
      }
      const newMovie = Object.assign({
        id: +id,
      }, newInfo);
      const result = yield app.mysql.update('cine', newMovie);
      return {
        status: result.affectedRows,
        info: '更新成功',
      };
    }
    * removeMovie(id) {
      if (!id) {
        return {
          status: -3,
          info: '请输入电影id',
        };
      }
      const isExist = yield app.mysql.get('cine', {
        id,
      });
      if (!isExist) {
        return {
          status: -1,
          info: '没有该电影',
        };
      }
      const result = yield app.mysql.delete('cine', {
        id,
      });
      return {
        status: result.affectedRows,
        info: '删除成功',
      };

    }
  };
};
