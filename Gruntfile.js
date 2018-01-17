module.exports = function(grunt) {

	// Grunt initialization and tasks
	grunt.initConfig({
		
		// Import package configuration
		pkg: grunt.file.readJSON('package.json'),

		// Concatenation Task
		concat: {
			js: {
				src: [
					'src/start.js',
					'src/end.js'
				],
				dest: 'nhlMap.js'
			}
		},

		// Uglify Task
		uglify: {
			options: {
				mangle: false
			},
			js: {
				files: {
					'nhlMap.min.js': ['nhlMap.js']
				}
			}
		},

		// JSHint Task
		jshint: {
			all: [
				'Gruntfile.js'
			]
		}
	});

	// Load the grunt plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
};