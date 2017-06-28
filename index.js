'use strict';

const proxyquire = require('proxyquire'),
    proxyquireMethod = proxyquire(
        './test-method', 
        {
            './another-test-method': {
                main: () => 'booya'
            }
        }
    );

console.log(
    proxyquireMethod.main()
);
console.log(
    proxyquireMethod.anotherTestMethod()
);