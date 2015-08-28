'use strict';

module.exports = function () {

    var key = "__processFingerprint";


    if (process.env.hasOwnProperty(key)) {

        return process.env[key];

    } else {

        var d = new Date().getTime();
        process.env[key] = "_pf" + d;
        return process.env[key];

    }

};

