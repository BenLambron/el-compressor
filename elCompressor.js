'use strict';

const zlib = require('zlib');


module.exports = {
    serialize: function (jsonInput, callback) {
        return zlib.deflate(JSON.stringify(jsonInput), function(error, buffer) {
            if (!error) {
            const result = buffer.toString('base64');
              if(callback && typeof callback === 'function') {
                  callback(result);
              }
              return result;
            }
            else {
                console.log(jsonInput + ' was not a valid JSON entry');
                return;
            }
        });
    },
    deserialize: function(serializedJson, callback) {
        return zlib.inflate(new Buffer(serializedJson, 'base64'), function(error, buffer) {
            if (!error) {
                const result = buffer.toString('utf8');
              if(callback && typeof callback === 'function') {
                  callback(result);
              }
              return result;
            } else {
                console.log(serializedJson + ' was not a valid Buffer entry');
                return;
            }
        });
    }
};