'use strict';

const ElCompressor = require('./elCompressor.js');

const json = {
    line1: 'test1',
    line2: 'test2',
    line3: 'test3'
};

ElCompressor.serialize(json, function(serialized) {
    console.log('serialized:', serialized);
    ElCompressor.deserialize(serialized, function(deserialized) {
        console.log('deserialized:', deserialized);
        console.log('Final test:', JSON.stringify(json) === deserialized);
    });
});