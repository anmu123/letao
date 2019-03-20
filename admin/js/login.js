$(function () {


    //使用表单校验插件
    $('.form').bootstrapValidator({
        //1. 指定不校验的类型，默认为[':disabled', ':hidden', ':not(:visible)'],可以不设置
        excluded: [':disabled', ':hidden', ':not(:visible)'],

        //2. 指定校验时的图标显示，默认是bootstrap风格
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },

        //3. 指定校验字段
        fields: {
            //校验用户名，对应name表单的name属性
            username: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    //长度校验
                    stringLength: {
                        min: 3,
                        max: 6,
                        message: '用户名长度必须在3到6之间'
                    },
                    callback: {
                        message: '用户名错误'
                    }

                }
            },
            password: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    //长度校验
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: '用户名长度必须在6到12之间'
                    },
                    callback: {
                        message: '密码错误'
                    }

                }
            },
        }

    });





    // 表单注册校验成功的事件
    $(".form").on('success.form.bv', function (e) {
        e.preventDefault();
        //使用ajax提交逻辑

        $.ajax({
            type: 'post',
            url: '/employee/employeeLogin',
            data:$(".form").serialize(),
            success:function(info){
                if(info.error === 1000){

                    // 调用 updateStatus 把 username 改成失败状态
                    // 参数1: 修改哪个字段
                    // 参数2: 修改的状态
                    // 参数3: 指定显示哪个错误信息
                    $('.form')
                    .data('bootstrapValidator')
                    .updateStatus('username', 'INVALID', 'callback')
                }
                if(info.error === 1001){
                    // alert('密码错误')
                    $('.form')
                    .data('bootstrapValidator')
                    .updateStatus('password','INVALID',"callback")
                }
                if(info.success){
                   location.href = 'index.html'
                }
            }
        })
    })

    // 重置表单
    // console.log($('[type=reset]'));
    
    $('[type=reset]').on('click',function(){

        $('.form').data('bootstrapValidator').resetForm(true);


    })
    


})
