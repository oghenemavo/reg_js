$(document).ready(function(){
    var $prev = $('.previousx');
    var $next = $('.nextx');
    var mode = "auto";
    $prev.on({
      click: function(e){
        e.preventDefault();
        mode = "manual";
        showPreviousImage();
      }
    });
    $next.on({
      click: function(e){
        e.preventDefault();
        mode = "manual";
        showNextImage();
        
      }
    });
    
    setInterval(function(){
      if(mode==="auto"){
        showNextImage();
      }
    },5000);
    
    function showNextImage(){
        var $actEl = $('.activx');
        var $nextEl = $actEl.next('.slidex');
        if($nextEl.length){
          $actEl.removeClass('activx');
          $nextEl.addClass('activx');
        }else{
          $actEl.removeClass('activx');
          $('.slidex:first-child').addClass('activx');
        }
    }
    
    function showPreviousImage(){
        var $actEl = $('.activx');
        var $prevEl = $actEl.prev('.slidex');
        if($prevEl.length){
          $actEl.removeClass('activx');
          $prevEl.addClass('activx');
        }else{
          $actEl.removeClass('activx');
          $('.slidex.last').addClass('activx');
        }
    }
  });





  (function($) { 
    $(function() { 
  
      //  open and close nav 
      $('#navbar-toggle').click(function() {
        $('nav ul').slideToggle();
      });
  
  
      // Hamburger toggle
      $('#navbar-toggle').on('click', function() {
        this.classList.toggle('active');
      });
  
  
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.navbar-dropdown').slideToggle("slow");
  
        // Close dropdown when select another dropdown
        $('.navbar-dropdown').not($(this).siblings()).hide("slow");
        e.stopPropagation();
      });
  
  
      // Click outside the dropdown will remove the dropdown class
      $('html').click(function() {
        $('.navbar-dropdown').hide();
      });
    }); 
  })(jQuery); 