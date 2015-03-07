#! /usr/bin/env node

var tr = require('trumpet')()
  , minimist = require('minimist')
  , argv = minimist(process.argv.slice(2))

tr.selectAll(argv._[0], function (result) {
  result.createReadStream().pipe(process.stdout)
})

process.stdin.resume()
process.stdin.pipe(tr)
