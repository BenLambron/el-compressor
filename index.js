'use strict';

const ElCompressor = require('./elCompressor.js');
const resources = require('./resources.js');

function getSize(string) {
    return encodeURI(string).split(/%..|./).length - 1;
}

const jsonToUse = resources.json3;

console.log('Given value size:', getSize(JSON.stringify(jsonToUse)));
ElCompressor.serialize(jsonToUse, function(serialized) {
    console.log('serialized size:', getSize(serialized));
    ElCompressor.deserialize(serialized, function(deserialized) {
        console.log('deserialized size:', getSize(deserialized));
        console.log('Final test:', getSize(JSON.stringify(jsonToUse)) === getSize(deserialized));
    });
});