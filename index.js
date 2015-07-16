var fs = require('fs');

exports.load = function(filename) {
	// Load file content
	var content = fs.readFileSync(filename, {"encoding": "utf-8"});
	
	// Remove all the documentation
	content = content.replace(/(?!\S+)\s*\/?\*.*\/?/g, '');
	
	// Return clean json
	return JSON.parse(content);
}