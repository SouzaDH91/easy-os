'use strict';
$("#sparkline1").sparkline([0, 23, 43, 35, 44, 45, 56, 37, 40, 45, 56, 7, 10, 44, 45, 56, 37, 40, 45, 56, 7, 10], {
	    type: 'line',
	    width: '100%',
	    height: '70',
	    lineColor: '#ffffff',
	    fillColor: 'transparent',
	    lineWidth: 1.5,
	    spotRadius: 4,
	    spotColor: '#ffffff',
	    minSpotColor: '#ffffff',
	    maxSpotColor: '#ffffff',
	    highlightSpotColor: '#ffffff',
	    highlightLineColor: '#ffffff'
	});
   $("#sparkline2").sparkline([5,6,7,9,9,5,3,2,2,4,6,7], {
	    type: 'line',
	    width: '100%',
	    fillColor: '#5fc29d54',
	    lineColor: '#ffffff',
	    lineWidth: 1,
	    spotRadius: 2,
	    spotColor: '#ffffff',
	    minSpotColor: '#ffffff',
	    maxSpotColor: '#ffffff',
	    highlightSpotColor: '#ffffff',
	    highlightLineColor: '#ffffff',
	    height: '70',
   });
  