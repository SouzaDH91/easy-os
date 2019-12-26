'use strict';
$(function () {
    //Widgets count
    $('.count-to').countTo();

    //Sales count to
    $('.sales-count-to').countTo({
        formatter: function (value, options) {
            return '$' + value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, ' ').replace('.', ',');
        }
    });
    
    $('.assign-style').slimscroll({
		  height: '449px',
		  size: '5px'
		});
    $('#chat-conversation').slimscroll({
		  height: '277px',
		  size: '5px'
		});
    $('.table-order').slimscroll({
		  height: '413px',
		  size: '5px'
		});

    initRealTimeChart();
    initDonutChart();
    initSparkline();
    initAreaChart();
    initJqvMap();
});

var realtime = 'on';
function initRealTimeChart() {
    //Real time ==========================================================================================
    var plot = $.plot('#real_time_chart', [getRandomData()], {
        series: {
            shadowSize: 0,
            color: 'rgb(0, 188, 212)'
        },
        grid: {
            borderColor: '#f3f3f3',
            borderWidth: 1,
            tickColor: '#f3f3f3'
        },
        lines: {
            fill: true
        },
        yaxis: {
            min: 0,
            max: 100
        },
        xaxis: {
            min: 0,
            max: 100
        }
    });

    function updateRealTime() {
        plot.setData([getRandomData()]);
        plot.draw();

        var timeout;
        if (realtime === 'on') {
            timeout = setTimeout(updateRealTime, 320);
        } else {
            clearTimeout(timeout);
        }
    }

    updateRealTime();

    $('#realtime').on('change', function () {
        realtime = this.checked ? 'on' : 'off';
        updateRealTime();
    });
    //====================================================================================================
}

function initSparkline() {
    $(".sparkline").each(function () {
        var $this = $(this);
        $this.sparkline('html', $this.data());
    });
}

function initAreaChart() {
	Morris.Area({
		  element: "area_line_chart",
		  behaveLikeLine: true,
		  data: [
		    {w: '2011 Q1', x: 3, y: 0, z: 1},
		    {w: '2011 Q2', x: 45, y: 13, z: 4},
		    {w: '2011 Q3', x: 17, y: 55, z: 24},
		    {w: '2011 Q4', x: 41, y: 10, z: 9},
		    {w: '2011 Q5', x: 22, y: 31, z: 53},
		    {w: '2011 Q6', x: 35, y: 65, z: 21},
		    {w: '2011 Q7', x: 22, y: 10, z: 6}
		  ],
		  xkey: 'w',
		  ykeys: ['x', 'y', 'z'],
		  labels: ['X', 'Y', 'Z'],
		  pointSize: 0,
		  lineWidth: 0,
		  resize: true,
		  fillOpacity: 0.8,
		  behaveLikeLine: true,
		  gridLineColor: '#e0e0e0',
		  hideHover: 'auto',
		  lineColors: ['#FF9D41', '#00ced1', '#718182']
		});
}

function initDonutChart() {
    Morris.Donut({
        element: 'donut_chart',
        data: [{
            label: 'Chrome',
            value: 37
        }, {
            label: 'Firefox',
            value: 30
        }, {
            label: 'Safari',
            value: 18
        }, {
            label: 'Opera',
            value: 12
        },
        {
            label: 'Other',
            value: 3
        }],
        colors: ['rgb(255, 206, 86)', 'rgb(65, 196, 216)', 'rgb(109, 109, 109)', 'rgb(255, 99, 132)', 'rgb(75, 192, 192)'],
        formatter: function (y) {
            return y + '%'
        }
    });
}

var data = [], totalPoints = 110;
function getRandomData() {
    if (data.length > 0) data = data.slice(1);

    while (data.length < totalPoints) {
        var prev = data.length > 0 ? data[data.length - 1] : 50, y = prev + Math.random() * 10 - 5;
        if (y < 0) { y = 0; } else if (y > 100) { y = 100; }

        data.push(y);
    }

    var res = [];
    for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]]);
    }

    return res;
}

function initJqvMap(){
	var sample_data = {"gf":"16.63","gf":"16.63","kp":"16.63","cu":"16.63","af":"16.63","al":"11.58","dz":"158.97","ao":"85.81","ag":"1.1","ar":"351.02","am":"8.83","au":"1219.72","at":"366.26","az":"52.17","bs":"7.54","bh":"21.73","bd":"105.4","bb":"3.96","by":"52.89","so":"461.33","bz":"1.43","bj":"6.49","bt":"1.4","bo":"19.18","ba":"16.2","bw":"12.5","br":"2023.53","bn":"11.96","bg":"44.84","bf":"8.67","bi":"1.47","kh":"11.36","c":"21.88","cm":"21.88","ca":"","cv":"1.57","cf":"2.11","td":"7.59","cl":"199.18","cn":"5745.13","co":"283.11","km":"0.56","cd":"12.6","cg":"11.88","cr":"35.02","ci":"22.38","hr":"59.92","cy":"22.75","cz":"195.23","dk":"","dj":"1.14","dm":"0.38","do":"50.87","ec":"61.49","eg":"216.83","sv":"21.8","gq":"14.55","er":"2.25","ee":"19.22","et":"30.94","fj":"3.15","fi":"231.98","gl":"2555.44","ga":"12.56","gm":"1.04","ge":"11.23","de":"","gh":"18.06","gr":"305.01","gd":"0.65","gt":"40.77","gn":"4.34","gw":"0.83","gy":"2.2","ht":"6.5","hn":"15.34","hk":"226.49","hu":"132.28","is":"12.77","in":"1430.02","id":"695.06","ir":"337.9","iq":"84.14","ie":"204.14","il":"201.25","jm":"13.74","jp":"","jo":"27.13","kz":"129.76","ke":"32.42","ki":"0.15","kr":"986.26","undefined":"5.73","kw":"117.32","kg":"4.44","la":"6.34","lv":"23.39","lb":"39.15","ls":"1.8","lr":"0.98","ly":"77.91","lt":"35.73","lu":"52.43","mk":"9.58","mg":"8.33","mw":"5.04","my":"218.95","mv":"1.43","ml":"9.08","mt":"7.8","mr":"3.49","mu":"9.43","mx":"1004.04","md":"5.36","mn":"5.81","me":"3.88","ma":"91.7","mz":"10.21","mm":"35.65","na":"11.45","np":"15.11","nz":"","ni":"6.38","ne":"5.6","ng":"206.66","no":"","om":"53.78","pk":"174.79","pa":"27.2","pg":"8.81","py":"17.17","pe":"153.55","ph":"189.06","pl":"438.88","pt":"223.7","qa":"126.52","ro":"158.39","ru":"","rw":"5.69","ws":"0.55","st":"0.19","sa":"434.44","sn":"12.66","rs":"38.92","sc":"0.92","sl":"1.9","sg":"217.38","sk":"86.26","si":"46.44","sb":"0.67","za":"354.41","es":"1374.78","lk":"48.24","kn":"0.56","lc":"1","vc":"0.58","sd":"65.93","sr":"3.3","sz":"3.17","se":"444.59","ch":"","sy":"59.63","tw":"426.98","tj":"5.58","tz":"22.43","th":"312.61","tl":"0.62","tg":"3.07","to":"0.3","tt":"21.2","tn":"43.86","tr":"729.05","tm":0,"ug":"17.12","ua":"136.56","ae":"239.65","us":"","uy":"40.71","uz":"37.72","vu":"0.72","ve":"285.21","vn":"101.99","ye":"30.02","zm":"15.69","zw":"5.57"};

	jQuery(document).ready(function () {
	    jQuery('#worldMap2').vectorMap({
	      map: 'world_en',
	      backgroundColor: '#FFFFFF',
	      color: '#A890D3',
	      hoverOpacity: 0.7,
	      selectedColor: 'red',
	      borderColor:'#ededed',
	      hoverColor: '#c9dfaf',
	      enableZoom: true,
	      showLabels:false,
	      showTooltip: true,
	      multiSelectRegion:true,
	      //selectedRegions: ['IT', 'FR', 'OR'],
	      onResize: function (element, width, height) {
	      },
	      scaleColors: ['#CCCCCC'],
	      values: sample_data,
	      normalizeFunction: 'linear'
	    });
	  });
	
}