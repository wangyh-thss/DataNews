var myChart = echarts.init(document.getElementById('chartArea_map'));
var min_data = 9;
var max_data = 15;

function markData(newData, oldData){
    originalData = option.series[currentSeries].data[newData];
    option.series[currentSeries].data[newData] = {value: originalData, symbol: 'emptypin', symbolSize: 8};
    if(oldData != -1){
        originalData = option.series[currentSeries].data[oldData].value;
        option.series[currentSeries].data[oldData] = originalData;
    }
    myChart.clear();
    myChart.setOption(option);
    lastChanged = newData;
}

function eConsole(param) {
    console.log(param);
    if (typeof param.seriesIndex != 'undefined') {
        newsIndex = param.dataIndex + instanceOne.imageFocusMax;
    }
    instanceOne.glideTo(newsIndex);
    markData(param.dataIndex, lastChanged);
}

var convertData = function(data) {
	var res = [];
	for (var i = 0; i < data.length; i++) {
		var geoCoord = geoCoordMap[data[i].name];
		if (geoCoord) {
			res.push({
				name: data[i].name,
				value: geoCoord.concat(data[i].value)
			});
		}
	}
	return res;
};

option = {
	baseOption: {
		timeline: {
			data: ['2015-01-01', '2015-02-01', '2015-03-01', '2015-04-01', '2015-05-01', '2015-06-01', '2015-07-01', '2015-08-01', '2015-09-01', '2015-10-01', '2015-11-01', '2015-12-01'],
			label: {
				formatter: function(s) {
					var date = new Date(s);
					var dateString = date.getFullYear() + '-' + (date.getMonth() + 1);
					//console.log(dateString);
					return dateString;
				},
				textStyle: {
					color: '#ffffff'
				}
			},
			autoPlay: true,
			playInterval: 2500,
			lineStyle: {
				color: 'rgba(248,252,240,0.8)',
				width: 1,
				type: 'dashed'
			},
			controlStyle: {
				itemSize: 15,
				itemGap: 15,
				normal: {
					//color: '#ff0000',
					borderColor: '#ffffff'
				},
				emphasis: {
					//color : '#1e90ff',
					borderColor: '#1e90ff'
				}
			}
		},
		backgroundColor: '#404a59;',
		title: {
			'text': 'demo-data',
			'subtext': '数据虚构，如有雷同，纯属巧合',
			'textStyle': {
				fontSize: 25,
				fontWeight: 'bolder',
				color: 'white'
			}
		},
		tooltip: {
			trigger: 'item',
			enterable: true,
			formatter: function(params, ticket, callback) {
				return '<iframe src="click-try.html?city=' + params.name + '" width="640px" height="360px"></iframe>';
			}
		},
		legend: {
			orient: 'vertical',
			y: 'bottom',
			x: 'left',
			data: ['pm2.5'],
			textStyle: {
				color: '#fff'
			},
			padding: 10
		},
		geo: {
			map: 'china',
			label: {
				emphasis: {
					show: false
				}
			},
			roam: true,
			itemStyle: {
				normal: {
					areaColor: '#323c48',
					borderColor: '#111'
				},
				emphasis: {
					areaColor: '#2a333d'
				}
			}
		},

		xAxis: [{
			type: 'category',
			data: ['2015-01-01', '2015-02-01', '2015-03-01', '2015-04-01', '2015-05-01', '2015-06-01', '2015-07-01', '2015-08-01', '2015-09-01', '2015-10-01', '2015-11-01', '2015-12-01'],
			show: false
		}],
		yAxis: [{
			type: 'value',
			min: min_data,
			max: max_data,
			splitNumber: 0,
			show: false
		}],
		grid: {
			width: '60%',
			height: '10%',
			bottom: '10%',
			left: 'center',
			borderWidth: 0
		},
		series: [{
			name: '城市数据',
			type: 'scatter',
			legendHoverLink: false,
			coordinateSystem: 'geo',
			data: convertData(mapData),
			symbolSize: function(val) {
				return val[2] / 10;
			},
			label: {
				normal: {
					formatter: '{b}',
					position: 'right',
					show: false
				},
				emphasis: {
					show: true
				}
			},
			itemStyle: {
				normal: {
					color: '#ddb926'
				}
			}
		}, {
			name: 'Top 5',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			data: convertData(mapData.sort(function(a, b) {
				return b.value - a.value;
			}).slice(0, 6)),
			symbolSize: function(val) {
				return val[2] / 10;
			},
			showEffectOn: 'render',
			rippleEffect: {
				brushType: 'stroke'
			},
			hoverAnimation: true,
			label: {
				normal: {
					formatter: '{b}',
					position: 'right',
					show: true
				}
			},
			itemStyle: {
				normal: {
					color: '#f4e925',
					shadowBlur: 10,
					shadowColor: '#333'
				}
			},
			zlevel: 1
		}, {
			name: '最高气温',
			type: 'line',
			data: [11, 11, 15, 13, 12, 13, 10, 11, 11, 15, 13, 12]
		}]
	},
	options: []
};

myChart.showLoading({
	text: 'Loading...'
});
myChart.hideLoading();
myChart.setOption(option);