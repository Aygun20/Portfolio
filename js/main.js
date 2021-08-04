
// $('.fixed-link a').on('click',function(e){
//     if (this.hash !== ''){
//     e.preventDeafult();

//     const hash = this.hash;

//     $('html,body').animate(
//         {
//             scrollTop: $(hash).offset().top
//         },
//         200
//     );
//     }
// });

// var scroll = new SmoothScroll('.fixed-link a[href*="#"]', {
// 	speed: 1500,
// 	speedAsDuration: true
// });


// let mouseCursor = document.querySelector(".cursor");
// let navLinks = document.querySelectorAll('.nav-links li');
// let heading = document.querySelectorAll('h1');

// window.addEventListener('mousemove', cursor);

// function cursor(e) {
//     mouseCursor.style.top = e.pageY + 'px';
//     mouseCursor.style.left = e.pageX + 'px';
// }

// navLinks.forEach(link =>{
//     link.addEventListener("moueseleave", () =>{
//         mouseCursor.classList.remove("link-grow");
//         link.classList.remove("hovered-link")
//     });
//     link.addEventListener("moueseover", () =>{
//         mouseCursor.classList.add("link-grow");
//         link.classList.add("hovered-link")
//     });
// });
// heading.forEach(link =>{
//     link.addEventListener('moueseover', () =>{
//         mouseCursor.classList.add("link-grow");
//     });
// });

