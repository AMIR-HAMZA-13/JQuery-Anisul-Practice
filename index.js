
//      1. html documen text change

// change h1 with javaScript
//document.querySelector('h1').innerHTML = 'hello this is change';

// smae work with JQuery
// $('.my-div h1').text('Hello World')
// $('#p1, .my-div h1').text('this is p1 id changed.')


//     2.  html document text bold
//$('#p2').html('<b> goodby </b>')

//   3.   add element  adding after
//$('#p2').append(' good by')


//   4.  add element adding before
//$('#p2').prepend(' good by')


//  5.  before and after use kore new element make ..  and it's work p h etc.

// var mypara1 =$('<p></p>').text('This is a Paragraph upper.')
// $('#p2').before(mypara1)

// var mypara1 =$('<p></p>').text('This is a Paragraph lower.')
// $('#p2').after(mypara1)



//  6.  Atribute value print
// by javaScript
// var myattr = document.querySelector('a').getAttribute('href');
// console.log(myattr);

//by jQuery
//$('a').attr('href')

//    7.  setAttribute
// with javascript
//document.querySelector('a').setAttribute('href', 'https://www.youtube.com/');

// with jQuery
//$('a').attr('href', 'https://www.youtube.com/')

//    8.   css menuculate with jQuery
// $('#p2').css('color','red')
// $('#p2').css('fontSize','5rem')
// $('#p2').css('fontStyle','italic')

// multipul JQuary
// $('#p2').css({'color':'red', 'fontSize':'4rem', 'fontStyle':'italic'});



//  9.   style add with style.css
//with javascript
// document.querySelector('#p2').classList.add('style1'); //style add
// document.querySelector('#p2').classList.remove('style1');// style remove


// with jQuery
// $('#p2').addClass('style1');// add style
// $('#p2').removeClass('style1');// remove style

// $('#p2').addClass('style1 style2');// ekadhik add style



//   10.  add event listenner
// with javascript
// ocument.querySelector('button').addEventListener('clicdk', function(){
//     document.querySelector('h2').innerHTML = 'You have clicked this button.';
// })

//with JQuery
// $('button').click(function(){// ekhane mouseOver, mouseOut etc add kora jay
//     $('h2').text('you have clicked me with jQuery')
// })

// //  toggleClass it's work to 2 ways 1 click style add and 2 clicked remove style
// $('button').click(function(){
//     $('h2').toggleClass('style1 style2')
// })


//  11.   how to add listener to multipul element
//with javascript
// var totalButtons = document.querySelectorAll('.myButton').length;
// for (i = 0; i < totalButtons; i++) {
//     document.querySelectorAll('.myButton')[i].addEventListener('click', function () {
//         var text = this.innerHTML;
//         document.querySelector('h1').innerHTML = text + ' is clicked';
//     })
// }

// with jQuery  same work
// $('.myButton').click(function () {
//     var value = this.innerHTML;
//     $('h1').text(value + ' is Clicekd')
// })

// onclick er khetre
// $('.myButton').on('click', function () { // ekhane click er jaygay 'mouseover', 'mouseout' etc add kora jay
//     var value = this.innerHTML;
//     $('h1').text(value + ' is Clicekd')
// })


//     12.       from  make with JQuery
$('#loginButton').click(function () {
    var password1 = $('#pass1').val();
    var password2 = $('#pass2').val();
    if (password1 != "" && password2 != "") {
        if (password1 == password2) {
            alert('successfully Login')
        } else {
            alert('password mismatch')
        }
    } else {
        alert('Please enter password')
    }

})


// 13.  jQuery animation
// $('#btn').click(function(){
//     $('#div1').hide(); // show kora jay ,, tar jonno style e age theke hide kore rakhte hobe.
// })
// $('#btn').click(function(){
//     $('#div1').show(5000); // eta diye 5 second por show hobe
// })

// hide and show together work
// $('#btn').click(function(){
//     $('#div1').hide(5000).show(5000); 
// })
//use toggle  
// $('#btn').click(function(){
//     $('#div1').toggle(5000); //ekshathe duto kaj show and hide
// })


//fadeOut  dhire dhire odirsho hoye jabe 
// $('#btn').click(function(){
//     $('#div1').fadeOut(5000);
// })

// $('#btn').click(function(){
//     $('#div1').fadeIn(5000);
// })

// fadeOut and fadeIn togather work
// $('#btn').click(function(){
//          $('#div1').fadeIn(5000).fadeOut(4000);
//      })

//fadeToggle
// $('#btn').click(function () {
//     $('#div1').fadeToggle(5000);
// })


//fadeTo it's work for opacity out and in 'ujjolora bara komay'
// $('#btn').click(function () {
//          $('#div1').fadeTo(5000, 0.5);
//      })

//   14. slideUp and slideDown
//slideUp it's work for upore odirsho hoye jay.
    //  $('#btn').click(function () {
    //     $('#div1').slideUp(5000);
    // })

    // slideDown and slideUp together works eta diye  niser dike neme jay

    // $('#btn').click(function () {
    //     $('#div1').slideUp(5000).slideDown(5000);
    // })

// toggle slide up down togathe work
    // $('#btn').click(function () {
    //     $('#div1').slideToggle(5000);
    // })


    //animate methode
    // $('#btn').click(function () {
    //         $('#div1').animate({opacity:'0.5'},2000);
    //         $('#div1').animate({height:'200px', width:'900px', marginLeft:'30px'},2000);

    //     })


