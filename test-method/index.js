'use strict';

const anotherTestMethod = require('./another-test-method');

exports.main = () => 'test method';
exports.anotherTestMethod = anotherTestMethod.main;