'use strict';

const fs = require('fs');
const path = require('path');
const sendToWormhole = require('stream-wormhole');
const uuidv4 = require('uuid/v4');

module.exports = function* () {
  const stream = yield this.getFileStream();
  const streamFile = stream.filename.split('.');
  const len = streamFile.length;
  const filename = `${uuidv4(streamFile[len - 2])}.${streamFile[len - 1]}`;
  // console.log(filename);
  // console.log(stream);
  let filepath = path.join(this.app.config.baseDir, `dist/uploads/${filename}`);
  if (stream.fields.title === 'mock-error') {
    filepath = path.join(this.app.config.baseDir, `app/public/uploads/not-exists/dir/${filename}`);
  } else if (stream.fields.title === 'mock-read-error') {
    filepath = path.join(this.app.config.baseDir, `dist/uploads/read-error-${filename}`);
  }
  this.logger.warn('Saving %s to %s', stream.filename, filepath);
  try {
    yield saveStream(stream, filepath);
  } catch (err) {
    yield sendToWormhole(stream);
    throw err;
  }

  this.body = {
    file: filename,
    fields: stream.fields,
  };
};


function saveStream(stream, filepath) {
  return new Promise((resolve, reject) => {
    if (filepath.indexOf('/read-error-') > 0) {
      stream.once('readable', () => {
        const buf = stream.read(10240);
        // console.log('read %d bytes', buf.length);
        setTimeout(() => {
          reject(new Error('mock read error'));
        }, 1000);
      });
    } else {
      const ws = fs.createWriteStream(filepath);
      stream.pipe(ws);
      ws.on('error', reject);
      ws.on('finish', resolve);
    }
  });
}
