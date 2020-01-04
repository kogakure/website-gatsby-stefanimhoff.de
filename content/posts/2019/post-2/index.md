---
title: Post 2 (Code Example)
date: '2019-12-19T18:10:00'
description: 'This is another description'
published: true
---

Another **Blog post**!!!

```sh
npm install --save-dev gulp-webp@2.1.1
echo "Hello World"
```

```js
webp: {
  src: productionAssets + '/images/**/*.{jpg,jpeg,png}',
  dest: productionAssets + '/images/',
  options: {}
},
```

```js{2,10-12}
var gulp = require('gulp');
var webp = require('gulp-webp');
var config = require('../../config').webp;

/**
 * Convert images to WebP
 */
gulp.task('webp', function() {
  return gulp
    .src(config.src)
    .pipe(webp(config.options))
    .pipe(gulp.dest(config.dest));
});
```

```js
this.willBe(highlighted);
```

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTP_ACCEPT} image/webp
  RewriteCond %{DOCUMENT_ROOT}/$1.webp -f
  RewriteRule (.+)\.(jpe?g|png)$ $1.webp [T=image/webp,E=accept:1]
</IfModule>

<IfModule mod_headers.c>
  Header append Vary Accept env=REDIRECT_accept
</IfModule>

AddType image/webp .webp
```
