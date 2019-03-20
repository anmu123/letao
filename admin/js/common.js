$(function(){

    // nav二级菜单的显示和隐藏
    $('.category').on('click',function(){
        $(this).next().stop().slideToggle();
    })
    

    // 左边菜单的显示和隐藏
    $('.lt_main .topbar .left').click(function(){
        console.log('我要躲起来了');
        console.log( $('.lt_aside'));
        
            $('.lt_aside,.lt_main,.lt_main .topbar').toggleClass('now');
    })

    // 退出功能
    $('.lt_main .topbar .right').click(function(){

        $('#logoutModal').modal('show');
    })
    
    // 给确定按钮注册事件
    $('.confirm').click(function(){

        // 参数1 : 直接就是url地址
        // 参数2 : 可选的data
        // 参数3 : success的回调
       $.get('/employee/employeeLogout',function(info){
            if(info.success){
                location.href = 'login.html'
            }
       }) 

    })














})