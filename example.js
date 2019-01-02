
const mkdir = require('./index.js');

mkdir('test').then(() => {
	return mkdir('test\\bar\\cat\\dog');
}).then(() => {
	return mkdir('test/egg/bar/dog');
}).catch(console.log);
