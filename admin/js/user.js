$(function(){


    var pageSize = 5;
    var id,isDelete;
    render(1)
// 点击按钮,禁用或启用用户
$('tbody').on('click','.btn',function(){
    // 弹出模态框
    // 给确定按钮注册点击事件
    // 发送ajax请求
    // 根据结果,启用或禁用用户
    $('#userModal').modal('show')
    // 获取到用户名的id 以及 启用禁用的状态 
    id = $(this).parent().data('id');
    isDelete = $(this).hasClass('btn-success') ? 1 : 0;



})
// 用户状态更新
$('.update').on('click',function(){
    console.log('启用了');

    $.ajax({
        type: 'post',
        url: '/user/updateUser',
        data : {
            id:id,
            isDelete:isDelete,
        },
        success:function(info){
            if(info.success){
                $('#userModal').modal('hide')
                render(page)
            }
        }



    })
    


})




// 发送ajax请求,获取数据,渲染
    function render(page){


        $.ajax({
            type: 'get',
            url: '/user/queryUser',
            data: {
              page:page,
              pageSize : pageSize,
            },
            success: function(info){
                console.log(info);
                
               var html = template('user_tpl',info)
               $('tbody').html(html)
             // 分页插件
               $("#paginator").bootstrapPaginator({
                bootstrapMajorVersion:3,//默认是2，如果是bootstrap3版本，这个参数必填
                currentPage:page,//当前页
                totalPages:Math.ceil(info.total/info.size),//总页数
                size:"small",//设置控件的大小，mini, small, normal,large
                onPageClicked:function(event, originalEvent, type,newPage){
                  //为按钮绑定点击事件 page:当前点击的按钮值
                
                  page = newPage;
                  render(page);
                  
                }
              });
            } 
        
        })

    }


})







