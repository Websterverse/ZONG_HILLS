const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0 ,
 yValue = 0 ; 

 window.addEventListener("mousemove", (e)=>{
xValue = e.clientX - window.innerWidth/2 ;
yValue = e.clientY - window.innerHeight/2  ; 

parallax_el.forEach((el)=>{

let speedx = el.dataset.speedx ; 
let speedy = el.dataset.speedy ; 
// let zValue = e.clientX  - parseFloat(getComputedStyle(el).left) *isInLeft;
// let isInLeft =  parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1 ;

el.style.transform = ` translateX(calc(-50% + ${-xValue * speedx}px))  translateY(calc(-50% + ${-yValue * speedy }px))      `


})


 })



 // gsap 


     let timeline = gsap.timeline();

//     parallax_el.forEach((el)=>{

//          timeline.from(el,
        
//         {
//         top : `${el.offsetHeight / 2 + el.dataset.distance}px` ,
//         duration : 3.5 ,
//          } , 
//                 "1"
//         ) ;
// });


timeline.from(".text h1 ",
        
    {
    y : window.innerHeight - document.querySelector(".text h1").getBoundingClientRect().top ,
    duration : 2 ,
     } , 
       "2.5"     
    ).from(

".text h2 " , {

y : -150,
opacity : 0 , 
duration : 1.5 , 



} , 
"3"


    )  .from(".hide" , {

        opacity : 0 , 
        duration : 1.5 , 

    } , "3")


timeline.from(".bg-img", {


 top : `${document.querySelector(".bg-img").offsetHeight /2 - 200}px`  ,
 duration : 3 ,  
}, "1")

// timeline.from(".mountain_10", {


//  top : `${document.querySelector(".mountain_10").offsetHeight /2 + 700}px`  ,
//  duration : 3 ,  
// }, )

