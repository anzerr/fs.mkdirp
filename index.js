
const path = require('path'),
	fs = require('fs.promisify');

const mkdir = (dir, option) => {
	let p = path.resolve(dir);
	return fs.mkdir(p, {...option, recursive: true}).catch((error) => {
		if (error.code === 'EEXIST') {
			return true;
		}
		if (error.code === 'ENOENT') {
			return mkdir(path.dirname(p), option).then(() => {
				return fs.mkdir(p, {...option, recursive: true});
			});
		}
		return fs.stat(p).then((stat) => {
			if (!stat.isDirectory()) {
				throw error;
			}
		});
	});
};

module.exports = mkdir;
module.exports.default = mkdir;
