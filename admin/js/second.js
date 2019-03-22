$(function () {
    var page = 1;
    var pageSize = 5;
    render(1);

    /* 
    1. 添加二级分类的功能
    2. 显示模态框
    3. 准备添加二级分类的表单
    4. 表单校验功能
    5. 表单校验通过，发送ajax请求
    6. 重新渲染
  */
    $('.btn_add').click(function () {

        $('#secondModal').modal('show')

        // 渲染一级分类
        $.ajax({
            type: 'get',
            url: '/category/queryTopCategoryPaging',
            data: {
                page: page,
                pageSize: pageSize,
            },
            success: function (info) {
                console.log(info);

                $('.dropdown-menu').html(template('second_tpl2', info))



            }

        })
    })

    // 一级分类选择功能
    $('.dropdown-menu').on('click', 'li', function () {
        var id = $(this).data('id')
        console.log(id);

        $('.dropdown-text').text($(this).children().text())


    })





    function render(page) {
        $.ajax({
            type: 'get',
            url: '/category/querySecondCategoryPaging',
            data: {
                page: page,
                pageSize: pageSize,
            },
            success: function (info) {
                // console.log(info);

                var html = template('second_tpl', info);
                console.log(info);
                
                $('tbody').html(html);

                // 分页插件
                $("#pagintor").bootstrapPaginator({
                    bootstrapMajorVersion:3,//默认是2，如果是bootstrap3版本，这个参数必填
                    currentPage:page,//当前页
                    totalPages:Math.ceil(info.total/info.size),//总页数
                    size:"small",//设置控件的大小，mini, small, normal,large
                    onPageClicked:function(event, originalEvent, type,p){
                      //为按钮绑定点击事件 page:当前点击的按钮值
                  
                      page = p;
                      render(page)
                    }
                  });


            }

        })
    }















})