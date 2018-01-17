// Bar chart
nhlMap.chart.barchart = function() {
	'use strict';

	// Default Attribute Container
	var attributes = {
		width: 0,
		height: 0,
		margin: {}
	};

	// Charting Function

	// Initialize the SVG Element
	chart.svgInit = function(svg) {

		// Compute the width and height of the charting area
		var margin = chart.margin(),
			width = chart.width() - margin.left - margin.right,
			height = chart.height() - margin.top - margin.bottom,
			translate = nhlMap.svg.translate;

		// Set the size of the svg element
		svg
			.attr('width', chart.width())
			.attr('height', chart.height());

		// Chart Container
		svg.append('g')
			.attr('class', 'chart')
			.attr('transform', translate(margin.left, margin.top));

		// X Axis Container
		svg.append('g')
			.attr('class', 'axis xaxis')
			.attr('transform', translate(margin.left, margin.top + height));

		// Y Axis Container
		svg.append('g')
			.attr('class', 'axis yaxis')
			.attr('transform', translate(margin.left, margin.top));
	};

	// Create an accessor function for the given attribute
	function createAccessor(attr) {

		function accessor(value) {
			if (!arguments.length) { return attributes[attr]; }
			attributes[attr] = value;
			return chart;
		}

		return accessor;
	}

	// Create accessors for each element in attributes
	for (var attr in attributes) {
		if ((!chart[attr]) && (attributes.hasOwnProperty(attr))) {
			chart[attr] = createAccessor(attr);
		}
	}

	return chart;
};