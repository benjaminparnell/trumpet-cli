#! /usr/bin/env node

var program = require('commander')
var tr = require('trumpet')()
var split = require('split')
var fs = require('fs')
var inputStream

program
  .version(require('./package.json').version)
  .usage('selector [file]')
  .option('-f, --first', 'only return the first matched element')
  .parse(process.argv)

if (program.args.length > 1) {
  inputStream = fs.createReadStream(program.args[1])
} else {
  inputStream = process.stdin
  inputStream.resume()
}

if (program.first) {
  tr.select(program.args[0]).createReadStream().pipe(process.stdout)
} else {
  tr.selectAll(program.args[0], function (result) {
    result.createReadStream().pipe(split(null, mapper)).pipe(process.stdout)
  })
}

inputStream.pipe(tr)

function mapper (string) {
  return string + '\n\n'
}
