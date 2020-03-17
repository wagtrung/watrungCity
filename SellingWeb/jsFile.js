
var boxModal = document.getElementById('Modal');
var boxlogin = document.getElementById('login');
var boxRegister = document.getElementById('register');

var btnModal = document.getElementById('btnModal');
var btnlogin = document.getElementById('loginbtn');
var btnRegister = document.getElementById('registerbtn');
var btnModalLogin = document.getElementById('btnModalLogin');

//add event----------------------------------------------------------------
btnlogin.addEventListener('click', openLoginfunc);
btnRegister.addEventListener('click', openRegisterfunc);

btnModal.addEventListener('click', openfunc);
btnModalLogin.addEventListener('click', openfuncLogin);




//function----------------------------------------------------------------

var close = document.querySelectorAll(".closebtn"); //button to close modal
for (var i = 0; i < close.length; i++) {
    close[i].addEventListener("click", closefunc);
}
function closefunc() {
    boxModal.style.display ="none";
}


function openfunc() {

    boxModal.style.display = "flex";
    boxRegister.style.display = "block";
    boxlogin.style.display = "none";

}

function openfuncLogin() {

    boxModal.style.display = "flex";
    boxRegister.style.display = "none";
    boxlogin.style.display = "block";

}

function openLoginfunc() {

    boxRegister.style.display = "none";
    boxlogin.style.display = "block";
}

function openRegisterfunc() {

    boxlogin.style.display = "none";
    boxRegister.style.display = "block";
}

$('.search-button').click(function () {
    $('.search-button').parent().toggleClass('open');
});


$('.container').click(function () {
    $('.search-button').parent().removeClass('open');

});


$('.header').mouseenter(function () {

    $('#logo').parent().addClass('pop');
    

});

$('.container').mouseenter(function () {

    $('#logo').parent().removeClass('pop');

});



$('.select').mouseenter(function () {
    $('.select ~ span').parent().toggleClass('bum');
    $('.selectList').parent().toggleClass('bum');
    
});



$('.container').mouseenter(function () {

    $('.selectList').parent().removeClass('bum');
    $('.select ~ span').parent().removeClass('bum');
    
});


$(".ctgli:has(.ctgulChild)").click(function (e) {
    e.preventDefault();
    //li_HAVE_Child-hasShowed-hasSlideD
    if($(this).hasClass('showed')){
        //-x-hasShowed
        $('.ctgli').removeClass('showed');
        //-x-hasSlideD
        $(this).children('.ctgulChild').slideUp();
        
    }
    
    else{
        
        $('.ctgulChild').slideUp();
        $('.ctgli').removeClass('showed');

        $(this).addClass('showed');
        $(this).children('.ctgulChild').slideToggle();
      
    }
});

$('.ctgli').click(function(){
    $(this).toggleClass('wtok');
});

   


