'use strict';

var assert = require('assert');
var fingerprint = require('./');

var key = "__processFingerprint";

describe("process-fingerprint", function(){

    it('should set a fingerprint value on process.env', function(done){
        var fp = fingerprint();
        assert(process.env.hasOwnProperty(key));
        done();
    });

    it('should return the fingerprint if already set on `process.env`', function(done){
        process.env[key] = 'ABC123';
        var fp = fingerprint();
        assert.equal(fp, 'ABC123');
        done();
    });

    it('should return a fingerprint value', function(done){
        assert(fingerprint());
        assert.equal(fingerprint().substring(0,3), "_pf");
        done();
    });

    it('should return the same value when called multiple times', function(done){
        var value1 = fingerprint();
        var value2 = fingerprint();
        var value3 = fingerprint();
        assert.equal(value1, value2);
        assert.equal(value2, value3);
        done();
    });

    afterEach(function(){
        delete process.env[key];
    });

});


