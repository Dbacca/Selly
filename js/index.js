$( document ).ready(function(e) {
  $(".scroll").on('click', function(){
    var nextSect = $(this).attr('next');
    var nextSectID = $('#' + nextSect);
    $(window).scrollTo(nextSectID, {duration:800 });
      return false;
    });

    var waypoint = new Waypoint({
    element: $('.content')[0],
    handler: function(){
      $('.sidebar').addClass('menu-fixed');
      console.log('Product Waypoint Triggered');
      }
    });
    var waypoint = new Waypoint({
      element: $('.stripes1')[0],
      handler: function(){
      $('.sidebar').removeClass('menu-fixed');
    	}
    });
// add active class to current section

      var waypoint = new Waypoint({
        element: $('#product1')[0],
        handler: function(){
            console.log('Lorem Section Reached');
            $('.sbNav li').removeClass('active');
            $('#lorem').addClass('active');
        },
        offset: -30
        });
      var waypoint = new Waypoint({
        element: $('#product2')[0],
        handler: function(){
            console.log('Gravida Section Reached');
            $('.sbNav li').removeClass('active');
            $('#gravida').addClass('active');
        },
        offset: -30
        });
        var waypoint = new Waypoint({
          element: $('#featuresSect')[0],
          handler: function(){
              console.log('Ut Sagittis Section Reached');
              $('.sbNav li').removeClass('active');
              $('#ut').addClass('active');
          },
          offset: -30
          });
        var waypoint = new Waypoint({
            element: $('#ctaSect')[0],
            handler: function(){
                console.log('Ut Sagittis Section Reached');
                $('.sbNav li').removeClass('active');
                $('#sign_up').addClass('active');
            },
            offset:-30
            });

        var waypoint = new Waypoint({
            element: $('#teamSect')[0],
            handler: function(){
                console.log('Team Section Reached');
                $('.sbNav li').removeClass('active');
                $('#vel').addClass('active');
            },
            offset: -30
            });
/* creat a click handler for menu items that over rides the default click action, adds the active class to that section, and uses scroll to to go to the section*/
$('.loremLink').on('click', function(event){
  $(window).scrollTo('#product1' , {duration:800 })
  $('.sbnav li').removeClass('.active');
  $('#lorem').addClass('active');


});
$('.gravidaLink').on('click', function(event){
  $(window).scrollTo('#product2' , {duration:800 })
  $('.sbnav li').removeClass('.active');
  $('#gravida').addClass('active');

});
$('.utLink').on('click', function(event){
  $(window).scrollTo('#featuresSect' , {duration:800 });
  $('.sbnav li').removeClass('.active');
  $('#ut').addClass('active');

});
$('.sign_upLink').on('click', function(event){
  $(window).scrollTo('#ctaSect' , {duration:800 });
  $('.sbnav li').removeClass('.active');
  $('#sign-up').addClass('active');

});
$('.velLink').on('click', function(event){
  $(window).scrollTo('#teamSect' , {duration:800 });
  $('.sbnav li').removeClass('.active');
  $('#vel').addClass('active');
});



function validateEmail(sEmail) {

   var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  //  this filter checks for email syntax
   if (filter.test(sEmail)) {
       return true;
   }
   else {
       return false;
   }
};

$('#btnValidate').on('click', function() {
       var sEmail = $('#txtEmail').val();
       console.log(sEmail);
       if ($.trim(sEmail).length == 0) {
           alert('Please enter valid email address');
           e.preventDefault();
       }
       if (validateEmail(sEmail)) {
           alert('Thanks, your email has been submitted.Look for a note from us soon ');
       }
       else {
           alert('Invalid Email Address');
           e.preventDefault();
       }
   });
});
