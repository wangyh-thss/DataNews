var isArray = function (obj) {    // 判断对象是否是数组的标准方法
    return Object.prototype.toString.call(obj) === "[object Array]";
};

var getParams = function (query) {
    var pairs,
        map,
        params = {};

    pairs = query.split('&');

    for (var i=0, len=pairs.length; i<len; i++) {
        map = pairs[i].split('=');

        if (map[0] in params) {
            if (isArray(params[map[0]])) {
                params[map[0]].push(map[1]);
            } else {
                params[map[0]] = [params[map[0]], map[1]];
            }
        } else {
            params[map[0]] = map[1];
        }
    }
    return params;
};

var renderPage = function(data, params) {
    var countryData = data['country'];
    var cityData = data[params.city];
    
}

$(function() {
    var params = getParams(location.search.split('?')[1]);
    $.getJson('/DataJounalism/static/js/data.json', function(data) {
        renderPage(data, params);
    })
})