var myChart = echarts.init(document.getElementById('chartArea_map'));
var min_data = 9;
var max_data = 15;

var option = {
    timeline:{
        data:[
            '2015-01-01','2015-02-01','2015-03-01','2015-04-01','2015-05-01','2015-06-01','2015-07-01','2015-08-01', '2015-09-01','2015-10-01', '2015-11-01', '2015-12-01'
        ],
        label: {
            formatter: function(s) {
                return s.slice(0, 7);
            },
            textStyle: {
                color: '#FFF'
            }
        },
        autoPlay: true,
        playInterval: 2000,
        lineStyle:{
            color: 'rgba(248,252,240,0.8)',
            width: 1,
            type: 'dashed'
        },
        controlStyle:{
            itemSize: 15,
            itemGap: 5,
            normal : {
                color : '#FFF'
            },
            emphasis : {
                color : '#1e90ff'
            }
        }
    },
    options:[
        {
            title : {
                'text':'demo-data',
                'subtext':'数据虚构，如有雷同，纯属巧合',
                'textStyle': {
                    fontSize: 25,
                    fontWeight: 'bolder',
                    color: 'white'
                }
            },
            dataRange: {
                min: 0,
                max : 53000,
                text:['高','低'],           // 文本，默认为数值文本
                calculable : true,
                x: 'left',
                width: '80%',
                color: [
                        '#cfd6e1',
                        '#7ca0dc',
                        '#0743a5'
                    ],
                textStyle: {
                    color: '#FFF'
                }
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['2014-01-01','2014-02-01','2014-03-01','2014-04-01','2014-05-01','2014-06-01','2014-07-01','2014-08-01', '2014-09-01','2014-10-01', '2014-11-01', '2014-12-01','2015-01-01','2015-02-01','2015-03-01','2015-04-01','2015-05-01','2015-06-01','2015-07-01','2015-08-01', '2015-09-01','2015-10-01', '2015-11-01', '2015-12-01'],
                    show : false
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    min: min_data,
                    max: max_data,
                    splitNumber: 0,
                    show : false
                }
            ],
            grid: {
                x: '12%',
                y: '85%',
                width: '80%',
                height: '10%',
                borderWidth: 0
            },
            itemStyle: {
                normal: {
                    borderColor: '#6495ed',
                    borderWidth: 5
                }
            },
            series : [
                {
                    'name':'GDP',
                    'type':'map',
                    mapLocation: {
                        x: 'center',
                        y: 'top',
                        width:'60%'
                    },
                    'data': dataMap.dataGDP['2006']
                },
                {
                    name:'最高气温',
                    type:'line',
                    data:[11, 11, 15, 13, 12, 13, 10, 11, 11, 15, 13, 12, 13, 10, 11, 11, 15, 13, 12, 13, 10, 11, 11, 15],
                    grid: {
                        width:'80%',
                        height:'10%',
                        borderWidth:0
                    }
                }
            ]
        },
        {
            title : {'text':'demo-data'},
            series : [
                {'data': dataMap.dataGDP['2005']}
            ]
        },
        {
            title : {'text':'demo-data'},
            series : [
                {'data': dataMap.dataGDP['2009']}
            ]
        },
        {
            title : {'text':'demo-data'},
            series : [
                {'data': dataMap.dataGDP['2005']}
            ]
        },
        {
            title : {'text':'demo-data'},
            series : [
                {'data': dataMap.dataGDP['2006']}
            ]
        },
        {
            title : {'text':'demo-data'},
            series : [
                {'data': dataMap.dataGDP['2007']}
            ]
        },
        {
            title : {'text':'demo-data'},
            series : [
                {'data': dataMap.dataGDP['2008']}
            ]
        },
        {
            title : {'text':'demo-data'},
            series : [
                {'data': dataMap.dataGDP['2009']}
            ]
        },
        {
            title : {'text':'demo-data'},
            series : [
                {'data': dataMap.dataGDP['2010']}
            ]
        },
        {
            title : {'text':'demo-data'},
            series : [
                {'data': dataMap.dataGDP['2011']}
            ]
        },
        {
            title : {'text':'demo-data'},
            series : [
                {'data': dataMap.dataGDP['2003']}
            ]
        },
        {
            title : {'text':'demo-data'},
            series : [
                {'data': dataMap.dataGDP['2004']}
            ]
        }
    ]
};
// 为echarts对象加载数据
myChart.showLoading({
    text: '程序猿拼命加载中...'
});
myChart.hideLoading();
myChart.setOption(option);