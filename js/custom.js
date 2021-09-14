//hide -- show -- toggle;
$('#btn1').click(function(){
    $('.group1 p').hide();
});

$('#btn2').click(function(){
    $('.group1 p').show();
});

$('#btn3').click(function(){
    $('.group1 p').toggle();
});

//slideUp -- slideDown -- slideToggle;
$('#btn4').click(function(){
    $('.group2 p').slideUp();
});

$('#btn5').click(function(){
    $('.group2 p').slideDown();
});

$('#btn6').click(function(){
    $('.group2 p').slideToggle();
});

//fadeOut -- fadeIn -- fadeToggle;

$('#btn7').click(function(){
    $('.group3 p').fadeOut();
});

$('#btn8').click(function(){
    $('.group3 p').fadeIn();
});

$('#btn9').click(function(){
    $('.group3 p').fadeToggle();
});

//addclass -- removeClass -- toggleClassl;
$('#btn10').click(function(){
    $('.group4 .box').addClass('bg');
});

$('#btn11').click(function(){
    $('.group4 .box').removeClass('bg');
});

$('#btn12').click(function(){
    $('.group4 .box').toggleClass('bg');
});



$('#run').click(function(){
    $('.main-box .square').animate({
        top:'0px',
        left:'550px',
    });
});

$('#run').click(function(){
    $('.main-box .square').animate({
        top:'550px',
        left:'550px',
    });
});

$('#run').click(function(){
    $('.main-box .square').animate({
        top:'550px',
        left:'0px',
    });
});

$('#run').click(function(){
    $('.main-box .square').animate({
        top:'0px',
        left:'0px',
    });
});
