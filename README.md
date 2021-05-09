# roaming

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


## EsLint on PhpStorm

https://youtrack.jetbrains.com/issue/WEB-38922
$ /Applications/PhpStorm.app/Contents/plugins/JavaScriptLanguage/languageService/eslint/bin/eslint-plugin.js

remplace 
$ this.cliEngine = require(packagePath).CLIEngine; 
par 
$ this.cliEngine = require(packagePath + "lib/cli-engine").CLIEngine;