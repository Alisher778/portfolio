$(document).ready(function(){

//Dropdown menu on click
  $('#menu-bar').click(function(){
    
    $('.nav-list').addClass('overlay');
    $('.nav-list').slideDown(600); 
  });

//Close button on dropdown menu
  $('i#close-btn').click(function(){
      $('ul.nav-list').removeClass('overlay');
    
  });

  //On scroll event Change navbar background-color 
  $(window).scroll(function(){
    let contactPage = $('#contact').position().top;
    let nav = $('nav');
    let scrollPosition = $(window).scrollTop();

    if(scrollPosition > contactPage){
      nav.css('backgroundColor', 'transparent');
    }else if(scrollPosition >80){
      nav.css({'backgroundColor':'black', 'height':'55px', 'padding': '20px 0 5px 0'})
    }else{
      nav.css('backgroundColor', 'transparent');
    }
  })

  

  $('nav li a').click(function(){
    
    $('.nav-list').removeClass('overlay');
    $(this).addClass('active');
  })
  //on Scroll nav list color active
  $(document).scroll(function() {
     let scroll_top = $(window).scrollTop();
     let aboutPage = $('#about').position().top;
     let projectsPage = $('#projects').position().top;
     let skillsPage = $('#skills').position().top;
     let contactPage = $('#contact').position().top;


      if(scroll_top > contactPage){
        $('.nav-list a').removeClass('active');
        $('#contactLink').addClass('active');
        // $('.link').show();
        $('.link, a:nth-of-type(1)').show().addClass('animated zoomIn');
        $('.link, a:nth-of-type(2)').show().addClass('animated zoomIn');
        $('.link, a:nth-of-type(3)').show().addClass('animated zoomIn');
      }else if(scroll_top+150 > skillsPage) {
        $('.nav-list a').removeClass('active');
        $('#skillsLink').addClass('active');
        $('.skill-set li').show();
        $('.skill-set li:nth-of-type(1)').addClass('animated slideInLeft');
        $('.skill-set li:nth-of-type(2)').addClass('animated slideInRight');
        $('.skill-set li:nth-of-type(3)').addClass('animated slideInLeft');
      }else if(scroll_top+150 > projectsPage){
        $('.nav-list a').removeClass('active');
        $('#projectsLink').addClass('active');
        $('.all-projects li').show();
        $('.all-projects li:nth-of-type(1)').addClass('animated slideInLeft');
        $('.all-projects li:nth-of-type(2)').addClass('animated slideInUp');
        $('.all-projects li:nth-of-type(3)').addClass('animated slideInRight');
      }else if(scroll_top+200 >  aboutPage){
        $('.nav-list a').removeClass('active');
        $('#aboutLink').addClass('active');
        $('.photo img').show().addClass('animated fadeInLeft');
        $('.info').css("display", "flex").addClass('animated lightSpeedIn');
      }else{
        $('.nav-list a').removeClass('active');
        $('#homeLink').addClass('active')
      }
  });


  // Media query On .hidden click display project details

  // $('.hidden').click(function(){
  //   $(this).next().show();
  // })

});