'use strict';

const zlib = require('zlib');

function backToUserWithCallback(callback, result) {
    if (callback && typeof callback === 'function') {
        callback(result);
    }
    return result;
}

function erroHandler (errorString) {
    console.log(errorString);
    return;
}

module.exports = {
    serialize: function (jsonInput, callback) {
        return zlib.deflate(JSON.stringify(jsonInput), function (error, buffer) {
            if (!error) {
                return backToUserWithCallback(callback, buffer.toString('base64'));
            }
            else {
                return errorHandler(jsonInput + ' was not a valid JSON entry');
            }
        });
    },
    deserialize: function (serializedJson, callback) {
        return zlib.inflate(new Buffer(serializedJson, 'base64'), function (error, buffer) {
            if (!error) {
                return backToUserWithCallback(callback, buffer.toString('utf8'));
            } else {
                return errorHandler(serializedJson + ' was not a valid Buffer entry');
            }
        });
    }
};