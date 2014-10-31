hexo-deployer-rsync-permission-fix [![NPM version][npm-image]][npm-url]
================

Fix for problems with permissions when deploying [Hexo] using rsync on Windows.

## Install

Install using [npm][npm-url] by executing this in your blogs root:

    $ npm install hexo-deployer-rsync-permission-fix --save

## When to use

Use it when you want to apply read and execute permissions for all the files in target
deployment directory. This solved my problem when after `hexo deploy` I got 403 error on every page of my blog.

## Usage

Just install it.

## TODO

- convert to CoffeeScript
- add support for multiple deployment methods in config
- add Gemnasium DepStat

## License
MIT +no-false-attribs

[![NPM downloads][npm-downloads]][npm-url]

[npm-url]: https://npmjs.org/package/hexo-deployer-rsync-permission-fix
[npm-image]: http://img.shields.io/npm/v/hexo-deployer-rsync-permission-fix.svg?style=flat
[npm-downloads]: http://img.shields.io/npm/dm/hexo-deployer-rsync-permission-fix.svg?style=flat

[Hexo]: http://hexo.io/
