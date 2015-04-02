# trump

A very small command line interface to [substack/node-trumpet](http://github.com/substack/node-trumpet).

# Installation

```
npm install -g trump
```

# Usage

```bash
# pipe things into it
curl https://daycalc.appspot.com/07/01/2015 | trump '#date-info'

# read from files
trump 'a' index.html

# get the first matching element
trump -f 'a' index.html
```

# Options

## -f, --first
Get the first element that matches a selector from the input.

# Why

I wanted to be able to do what the curl example above did in a script, and decided
to use [trumpet](http://github.com/substack/node-trumpet) to do it.

# Your module name is the coolest

I know, I know.
