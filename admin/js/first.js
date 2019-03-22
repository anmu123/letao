$(function () {

    // var page, pageSize;
    // 显示一级分类模态框
    $('.btn_add').click(function () {

        $('#firstModal').modal('show');

    })
    // 表单校验功能
    var $form = $('form');
    $form.bootstrapPaginator({
        fields: {
            categoryName: {
                validators: {
                    notEmpty: {
                        message: '一级分类名不能为空'
                    },


                }
            }

        },
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
    })
    // 一级分类确定按钮
    // 渲染表单
    $.ajax({
        type: 'get',
        url: '/category/queryTopCategory',
        data: {
            page: 1,
            pageSize: 10,
        },
        success: function (info) {
            console.log(info);
            var html = template('first_tpl', info);
            $('tbody').html(html)

            // 分页
            $(".pagintor").bootstrapPaginator({
                bootstrapMajorVersion: 3,
                currentPage: 1,
                totalPages: 10,
                size: 'normal',
                onPageClicked: function (event, originalEvent, type, page) {
                    console.log(page);

                }


                // bootstrapMajorVersion:3,//默认是2，如果是bootstrap3版本，这个参数必填
                // currentPage:1,//当前页
                // totalPages:10,//总页数
                // size:"small",//设置控件的大小，mini, small, normal,large
                // onPageClicked:function(event, originalEvent, type,page){
                //   //为按钮绑定点击事件 page:当前点击的按钮值
                // }
            });

        }
    })





})