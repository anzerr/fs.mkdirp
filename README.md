
### `Intro`
![GitHub Actions status | linter](https://github.com/anzerr/fs.mkdirp/workflows/linter/badge.svg)
![GitHub Actions status | publish](https://github.com/anzerr/fs.mkdirp/workflows/publish/badge.svg)
![GitHub Actions status | test](https://github.com/anzerr/fs.mkdirp/workflows/test/badge.svg)

mkdir with 'p' on the base mkdir '{recursive: true}' doesn't seem to work so here's this little util

#### `Install`
``` bash
npm install --save git+https://github.com/anzerr/fs.mkdirp.git
npm install --save @anzerr/fs.mkdirp
```

### `Example`
``` javascript
const mkdir = require('fs.mkdirp');

mkdir('foo/bar/cat/dog').catch(console.log);
```
