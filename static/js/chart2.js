var newsIndex = -1;
var instanceOne = new ImageFlow();
var myChart = null;
var lastChanged = -1;
var currentSeries = 0;

function markData(newData, oldData) {
    originalData = option.series[currentSeries].data[newData];
    option.series[currentSeries].data[newData] = {
        value: originalData,
        symbol: 'emptypin',
        symbolSize: 8
    };
    if (oldData != -1) {
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

var domReady = function(handler) {
    domReadyEvent.add(handler);
};

var myChart = echarts.init(document.getElementById('con1'));
var imgsrc = new Array("static/images/1.jpg", "static/images/2.jpg", "static/images/3.jpg", "static/images/4.jpg", "static/images/5.jpg", "static/images/6.jpg", "static/images/7.jpg", "static/images/8.jpg", "static/images/9.jpg", "static/images/10.jpg", "static/images/11.jpg", "static/images/12.jpg");

option = {
    //tooltip : {
    //    trigger: 'axis',
    //    padding: 10,
    //    formatter:function(params, ticket, callback){
    //        //console.log(params[0].dataIndex);
    //        var imgindex = params[0].dataIndex;
    //        var txt = params[0].name + " related news" + "<br/>";
    //        txt += "<img src="+imgsrc[imgindex]+" width=\"140\" >"; //添加对应的图片
    //        return txt;
    //    }
    //},
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06', '2015-07', '2015-08', '2015-09', '2015-10', '2015-11', '2015-12'],
        splitLine: false,
        axisLine: {
            width: 0
        }
    }],
    yAxis: [{
        type: 'value',
        scale: true,
        axisLabel: {
            formatter: '{value} °C' //纵坐标单位
        },
        splitLine: false
    }],
    series: [{
        name: '最高气温',
        type: 'line',
        data: [11, 11, 15, 13, 12, 13, 10, 11, 11, 15, 13, 12]
    }, {
        name: '最低气温',
        type: 'line',
        data: [1, -2, 2, 5, 3, 2, 0, 1, -2, 2, 5, 3]
    }]
};


// 为echarts对象加载数据
myChart.showLoading({
    text: '程序猿拼命加载中...'
});
myChart.hideLoading();
myChart.setOption(option);
myChart.on(ecConfig.EVENT.CLICK, eConsole);
//myChart.on(ecConfig.EVENT.HOVER, eConsole);
myChart.on(ecConfig.EVENT.DBLCLICK, eConsole);

domReadyEvent.init();

/* Create ImageFlow instances when the DOM structure has been loaded */
domReady(function() {
    instanceOne.init({
        ImageFlowID: 'starsIF',
        captions: false,
        slider: false,
        startID: Number($("#S_Num").val()) + 1
    });
    if (newsIndex != -1) {
        instancesOne.glideTo(newsIndex);
    }
});