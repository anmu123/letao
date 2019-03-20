// 柱状图


// 后台返回的数据
var data = {
    title: '2018年注册人数',
    list: [
        { month: '1月', count: 1000, count1: 500 },
        { month: '2月', count: 2020, count1: 500 },
        { month: '3月', count: 1500, count1: 500 },
        { month: '4月', count: 2000, count1: 500 },
        { month: '5月', count: 3000, count1: 500 },
        { month: '6月', count: 800, count1: 500 }
    ]
}

var months = [];
var counts = [];
var counts1 = [];
for (var i = 0; i < data.list.length; i++) {
    months.push(data.list[i].month)
    counts.push(data.list[i].count)
    counts1.push(data.list[i].count1)
}



var myChart = echarts.init(document.querySelector('.lt_content .left'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: '2019年注册人数'
    },
    tooltip: {},
    legend: {
        data: ['人数','在线人数']
    },
    xAxis: {
        data: months
    },
    yAxis: {},
    series: [{
        name: '人数',
        type: 'bar',
        data: counts
    },
    {
        name: '在线人数',
        type: 'bar',
        data: counts1
    },
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);




// 饼状图
var cirChart = echarts.init(document.querySelector('.lt_content .right'));
option = {
    title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' },
                { value: 135, name: '视频广告' },
                { value: 1548, name: '搜索引擎' }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
cirChart.setOption(option);