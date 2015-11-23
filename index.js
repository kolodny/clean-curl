#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var _ = argv._;
var url = _[0] === 'curl' ? _[1] : _[0];

var ignore = 'Pragma,Accept-Encoding,Accept-Language,User-Agent,Accept,Referer,Connection,Cache-Control'.split(',');
var cleanedArgsMap = {};
argv.H.forEach(function(arg) {
  var key = arg.split(':')[0];
  if (key) cleanedArgsMap[key] = arg;
});
ignore.forEach(function(prop) {
  delete cleanedArgsMap[prop]
});
argv.H = [];
for (var key in cleanedArgsMap) {
  argv.H.push(cleanedArgsMap[key]);
}

delete argv._;
if (argv.compressed === true) {
  delete argv.compressed;
}

var switches = [];
for (var flag in argv) {
  var dashes = flag.length === 1 ? '-' : '--';
  if (!(argv[flag] instanceof Array)) argv[flag] = [argv[flag]];
  argv[flag].forEach(function(index) {
    switches.push(dashes + flag + ' ' + index);
  });
}

console.log('curl ' + url + ' ' + switches.join(' '));
