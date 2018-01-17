!function() {
	var nhlMap = {version: '0.1.0'};

	//Expose the package components
	if (typeof module === 'object' && module.exports) {
		// The package is loaded as a node module
		this.d3 = require('d3');
		module.exports = nhlMap;
	} else {
		// This file is loaded in the browser
		this.nhlMap = nhlMap;
	}

}();