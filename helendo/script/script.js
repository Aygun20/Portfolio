$('.home-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// $(document).ready(function(){
//   $(window).scroll(function(){
//     if(this.scrollY > 40) 
//       $(".navbar").addClass("sticky");
//     else
//       $(".navbar").removeClass("sticky");
//   });

// });
$(document).ready(function(){
  $('.sidebarBtn').click(function(){
    $('.sidebar').toggleClass('active');
    $('.sidebarBtn').toggleClass('toggle');
  });
});
$(document).ready(function(){
    $(".hover-yellow").on({
      mouseenter: function(){
        $(this).fadeIn(1000).css("color", "#dcb14a");
      },  
      mouseleave: function(){
        $(this).css("color", "#000");
      }, 
      click: function(){
        $(this).css("color", "red");
      }  
    });
  });

  $(function(){
    const nexticon='<i class="fas fa-arrow-right"></i>';
    const previcon='<i class="fas fa-arrow-left"></i>';

    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      navText:[previcon,nexticon],
      dots:false,
      responsive:{
          0:{
              items:2
          },
          1000:{
              items:4
          }
      }
  });
  
  });
//  $(document).ready(function(){
//    $('.img-box1').mouseenter(function(){
//      $('div.img-over-back').addClass('.img-over-next');
//    });
//  });
$(document).ready(function(){
  $("#hide").mouseenter(function(){
    $("p").hide();
  });
  $("#show").mouseleave(function(){
    $("p").show();
  });
});
$(function(){
$(".img-box1"). mouseenter(function(){
    $(".img-over1").css({"opacity": "1","transform":"translateX(0)","transition":".7s"})();
  });
  $(".img-box1"). mouseleave(function(){
  $(".img-over1").css({"opacity": "0","transform":"translateX(100px)","transition":".7s"})();
});
});
$(function(){
  $(".img-box2"). mouseenter(function(){
      $(".img-over2").css({"opacity": "1","transform":"translateX(0)","transition":".7s"})();
    });
    $(".img-box2"). mouseleave(function(){
    $(".img-over2").css({"opacity": "0","transform":"translateX(100px)","transition":".7s"})();
  });
  });
  $(function(){
    $(".img-box3"). mouseenter(function(){
        $(".img-over3").css({"opacity": "1","transform":"translateX(0)","transition":".7s"})();
      });
      $(".img-box3"). mouseleave(function(){
      $(".img-over3").css({"opacity": "0","transform":"translateX(100px)","transition":".7s"})();
    });
    });

  $(".thinLine").on({
    mouseenter: function(){
      $(this).css("background-color", "#dcb14a");
    },
    mouseleave: function(){
      $(this).css("background-color", "#888");
    }
  });
  (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let sale = "Nov 31, 2021 00:00:00",
        countDown = new Date(sale).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
  
            countdown.style.display = "none";
            content.style.display = "block";
  
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());