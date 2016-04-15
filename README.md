# OωO

[![npm](https://img.shields.io/npm/v/owo.svg?style=flat-square)](https://www.npmjs.com/package/owo)
[![npm](https://img.shields.io/npm/l/owo.svg?style=flat-square)](https://www.npmjs.com/package/owo)
[![devDependency Status](https://img.shields.io/david/dev/DIYgod/owo.svg?style=flat-square)](https://david-dm.org/DIYgod/OwO#info=devDependencies)
[![npm](https://img.shields.io/npm/dt/owo.svg?style=flat-square)](https://www.npmjs.com/package/owo)
[![%e2%9d%a4](https://img.shields.io/badge/made%20with-%e2%9d%a4-ff69b4.svg?style=flat-square)](https://www.anotherhome.net/)

Lovely Emoticon and Emoji Keyboard for textarea or input

## Introduction

[Demo](http://diygod.github.io/OwO/demo)

Screenshot

![OwO](http://i.imgur.com/eRSh95i.jpg)

## Install

```js
$ npm install owo
```

## Usage

### HTML

```html
<link rel="stylesheet" href="OwO.min.css">
<!-- ... -->
<div class="OwO"></div>
<!-- ... -->
<script src="OwO.min.js"></script>
```

### JS

```js
var OwO_demo = new OwO({
    logo: 'OωO表情',
    container: document.getElementsByClassName('OwO')[0],
    target: document.getElementsByClassName('OwO-textarea')[0],
    api: './OwO.json',
    position: 'down',
    width: '100%',
    maxHeight: '250px'
});
```

#### Options

```js
{
    logo: 'OωO表情',                                               // OwO button text, default: `OωO表情`
    container: document.getElementsByClassName('OwO')[0],         // OwO container, default: `document.getElementsByClassName('OwO')[0]`
    target: document.getElementsByClassName('OwO-textarea')[0],   // OwO target input or textarea, default: `document.getElementsByTagName('textarea')[0]`
    api: './OwO.json',                                            // OwO Emoticon data api, default: `https://api.anotherhome.net/OwO/OwO.json`
    position: 'down',                                             // OwO body position, default: `down`
    width: '100%',                                                // OwO body width, default: `100%`
    maxHeight: '250px'                                            // OwO body max-height, default: `250px`
}
```

#### Work with module bundler

```js
var OwO = require('owo');
var OwO_demo = new OwO({
    // ...
});
```

### Data API

Provide emoticon data for OwO.

[Example](https://api.anotherhome.net/OwO/OwO.json)

## Run in development

```js
$ npm install
$ npm run dev
```

## Make a release

```js
$ npm install
$ npm run build
```

## LICENSE

MIT © [DIYgod](http://github.com/DIYgod)