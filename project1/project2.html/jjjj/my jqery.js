$(document).ready(function () {
    // Element selector 
    console.log("my new jQuery");
    // $("p").click(function () {
    //     console.log("on click", this);
    //  $(this).hide(); ek ke bad ek hide karne ke liye
    // console.log("my new jQuery");
    // $("p").dblclick(function () {
    //     console.log("on double click", this);
    // });
    // console.log("my new jQuery");
    // $("p").mouseenter(function () {
    //     console.log("YOU ENTERD", this);
    // });
    // console.log("my new jQuery");
    // $("p").mouseleave(function () {
    //     console.log("YOU leave", this);
    // });
    // console.log("my new jQuery");
    // $("p").hover(function () {
    //     console.log("YOU hover on", this);
    // });
    // });
    //id selector
    // $("#second").click();
    //class selector
    // $(".odd").click();

    //   $('*').click(); all select
    //   $('p.odd').click(); odd class select
    //   $('p:first').click(); first eement select 

    // events in jQuery
    // MouseEvent = click,dbclick,mouseenter,mouseleave
    // KeyboardEvent =keypress,keydown,mediakeystatusmap
    // form Event=sabmit,change,focus,blar 
    // document/window event=load,resize,scroll,unload

    // multipal Element
    // $('p').on(
    //     {
    //     click: function() {
    //         console.log('thanks for clicking', this)
    //     },
    //     mouseleave:function(){
    //         console.log("mouseleave")
    //     }

    // });
    // $('#viki').hide(1000,function(){
    //     console.log('hidden')
    // });
    // $('#viki').show(1000,function(){
    //     console.log('showed')
    // });
    // $('#but').click(function(){
    //     $('#viki').fadeToggle(1000);
    // })

    // fadein()
    // fadeout()
    // fadetoggle()
    // fadeto()



    // animate function
    // $('#viki').animate({
    //     opacity:0.3,
    //     height:'150px',
    //     width:'350px'
    // },2000)//slow fast use

    // $('#viki').animate({opacity:0.3}, 4000);
    // $('#viki').animate({opacity:0.9}, 1000);
    // $('#viki').animate({width:'300px'}, 12000);
    // $('#ta').val('setting it to harry');
    // $('#ta').html('setting it to harry');
    // $('#inp').html('setting it to harry');
    // $('#viki').empty()
    // $('#viki').text('you are good')
    // $('#viki').remove()

    $("#but").click(function () {
        // console.log("bar click");

        $(".viki").toggleClass("active");
        // $(".viki").addClass("active2");
        // $(".viki").removeclass("active");


    });
    // $('.viki').css('background-color', 'red')
    // $('.viki').css('background-color')
    // 'rgb(255, 0, 0)'


});
