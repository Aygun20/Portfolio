$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY > 40) 
        $("nav").addClass("sticky");
      else
        $("nav").removeClass("sticky");
    });
  });

// function navSlide() {
//   const burger = document.querySelector(".burger");
//   const nav = document.querySelector(".nav-links");
//   const navLinks = document.querySelectorAll(".nav-links li");
  
//   burger.addEventListener("click", () => {
//       nav.classList.toggle("nav-active");
      
//       navLinks.forEach((link, index) => {
//           if (link.style.animation) {
//               link.style.animation = ""
//           } else {
//               link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
//           }
//       });
//       burger.classList.toggle("toggle");
//   });
  
// }

// navSlide();

function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  
  burger.addEventListener("click", () => {
      //Toggle Nav
      nav.classList.toggle("nav-active");
      
      //Animate Links
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = ""
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
          }
      });
      //Burger Animation
      burger.classList.toggle("toggle");
  });
  
}

navSlide();

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
})

//   $(".box-y1").mouseover(function(){
//     $(".box-y1").css({
//       transform: "translateY(-2.5rem)",
//       transition:".3s"
//     });
//   });
//   $(".box-y1").mouseout(function(){
//     $(".box-y1").css({
//       transform: "translateY(0)",
//       transition:".3s"
//     });
//   });

// $(document).ready(function(){
//   $(".box-y2").mouseover(function(){
//     $(".box-y2").css({
//       transform: "translateY(-2.5rem)",
//       transition:".3s"
//     });
//   });
//   $(".box-y2").mouseout(function(){
//     $(".box-y2").css({
//       transform: "translateY(0)",
//       transition:".3s"
//     });
//   });
// });

// $(document).ready(function(){
//   $(".box-y3").mouseover(function(){
//     $(".box-y3").css({
//       transform: "translateY(-2.5rem)",
//       transition:".3s"
//     });
//   });
//   $(".box-y3").mouseout(function(){
//     $(".box-y3").css({
//       transform: "translateY(0)",
//       transition:".3s"
//     });
//   });
// });

// $(document).ready(function(){
//   $(".box-y4").mouseover(function(){
//     $(".box-y4").css({
//       transform: "translateY(-2.5rem)",
//       transition:".3s"
//     });
//   });
//   $(".box-y4").mouseout(function(){
//     $(".box-y4").css({
//       transform: "translateY(0)",
//       transition:".3s"
//     });
//   });
// });


const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change",()=>{
  var x =document.getElementById("price1");
  if (x.innerHTML ==="$14"){
    x.innerHTML = "$159";
  }else{
    x.innerHTML = "$14";
  }
  var y =document.getElementById("price2");
  if (y.innerHTML ==="$30"){
    y.innerHTML = "$350";
  }else{
    y.innerHTML = "$30";
  }
  var z =document.getElementById("price3");
  if (z.innerHTML ==="$50"){
    z.innerHTML = "$550";
  }else{
    z.innerHTML = "$50";
  }
});
//   $(".box-y1").mouseover(function(){
//     $(".box-y1").css({
//       transform: "translateY(-2.5rem)",
//       transition:".3s"
//     });
//   });
//   $(".box-y1").mouseout(function(){
    // $(".box-y1").css({
    //   transform: "translateY(0)",
    //   transition:".3s"
    // });
//   });
$(document).ready(function(){
  $("#box1").mouseover(function(){
    $(".line-box1").css({
      width:"24rem",
      transition:".5s"
    });
  });
  $("#box1").mouseout(function(){
    $(".line-box1").css({
      width:"0",
      transition:".5s"
    });
  });
});

$(document).ready(function(){
  $("#box2").mouseover(function(){
    $(".line-box2").css({
      width:"24rem",
      transition:".5s"
    });
  });
  $("#box2").mouseout(function(){
    $(".line-box2").css({
      width:"0",
      transition:".5s"
    });
  });
});

$(document).ready(function(){
  $("#box3").mouseover(function(){
    $(".line-box3").css({
      width:"24rem",
      transition:".5s"
    });
  });
  $("#box3").mouseout(function(){
    $(".line-box3").css({
      width:"0",
      transition:".5s"
    });
  });
});

$(document).ready(function(){
  $("#box4").mouseover(function(){
    $(".line-box4").css({
      width:"24rem",
      transition:".5s"
    });
  });
  $("#box4").mouseout(function(){
    $(".line-box4").css({
      width:"0",
      transition:".5s"
    });
  });
});

$(document).ready(function(){
  $(".nav-link1").mouseover(function(){
    $(".line-none1").css({
      width:"2rem",
      left:"1rem",
      transition:".5s"
    });
  });
  $(".nav-link1").mouseout(function(){
    $(".line-none1").css({
      width:"0",
      left:"-2rem",
      transition:".5s"
    });
  });
});

$(document).ready(function(){
  $(".nav-link2").mouseover(function(){
    $(".line-none2").css({
      width:"2rem",
      left:"1rem",
      transition:".5s"
    });
  });
  $(".nav-link2").mouseout(function(){
    $(".line-none2").css({
      width:"0",
      left:"-2rem",
      transition:".5s"
    });
  });
});

$(document).ready(function(){
  $(".nav-link3").mouseover(function(){
    $(".line-none3").css({
      width:"2rem",
      left:"1rem",
      transition:".5s"
    });
  });
  $(".nav-link3").mouseout(function(){
    $(".line-none3").css({
      width:"0",
      left:"-2rem",
      transition:".5s"
    });
  });
});

$(document).ready(function(){
  $(".nav-link4").mouseover(function(){
    $(".line-none4").css({
      width:"2rem",
      left:"1rem",
      transition:".5s"
    });
  });
  $(".nav-link4").mouseout(function(){
    $(".line-none4").css({
      width:"0",
      left:"-2rem",
      transition:".5s"
    });
  });
});

$(document).ready(function(){
  $(".nav-link5").mouseover(function(){
    $(".line-none5").css({
      width:"2rem",
      left:"1rem",
      transition:".5s"
    });
  });
  $(".nav-link5").mouseout(function(){
    $(".line-none5").css({
      width:"0",
      left:"-2rem",
      transition:".5s"
    });
  });
});

// $('#checkbox').click(function() {
//   if($('price1').val() == "$14"){
//     $('price1').val("$159");
//     button2();
//   }
//   else{
//     $('price1').val("$159");
//     button1();
//   }
// });
// function button1(){
//    $('#checkbox').val("$14");
//  }
//  function button2(){
//    $('#checkbox').val("$159");
//  }


 
