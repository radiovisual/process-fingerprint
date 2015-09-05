# process-fingerprint

> Create a fingerprint value that is exposed to your user environment

[![Build Status](https://travis-ci.org/radiovisual/process-fingerprint.svg)](https://travis-ci.org/radiovisual/process-fingerprint)

## Installation
```
$ npm install --save process-fingerprint
```

## Usage
```js
var fingerprint = require('process-fingerprint');

fingerprint();
// => "_pf1440759573263"
```

## Discussion

I ran into an issue recently while building a [Metalsmith + Gulp Boilerplate](https://github.com/radiovisual/metalsmith-gulp-boilerplate)
where existing fingerprint modules weren't sharing the fingerprint values nicely across the gulp and metalsmith
build processes. This lead me to the conclusion that the fingerprint value should be hoisted up to some globally-available
namespace, where the metalsmith and gulp build process could share the same fingerprint value.


## :heavy_exclamation_mark: Disclaimer 

I am sure there is a better way to create a fingerprint variable, perhaps I shouldn't be using the `process.env`
object for my own silly experiments, but for now, this approach will solve the problem of making a global
fingerprint across multiple build processes. *I will use this module with caution until my experiments lead me
to believe that this is a worthwhile fingerprinting method.*

**Please [open an issue](https://github.com/radiovisual/process-fingerprint/issues) to start a discussion, share your thoughts or offer suggestions**

## License

MIT @ [Michael Wuergler](http://www.numetriclabs.com)
