const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
    ease:"4",
});


gsap.from(".line1", {
    y:150,
    duration:0.9,
    stagger:0.3,
    delay:0.5
})



// now animation
var now = document.querySelector(".now")
setInterval(function(){
    gsap.to(".now", {
        textContent:"NOW",
        fontFamily:"Playfair Display",
        fontStyle:"italic",
        delay:0.5,
         color: "transparent" ,
         webkitTextStroke: "1px pink",
    })
},500);
setInterval(function(){
    gsap.to(".now", {
        textContent:"NOW",
        fontFamily:"Inter",
        fontStyle:"normal",
        color:"pink"
    })
},1000);


// increasing numbers
var start1 = document.querySelector(".start");
var grow = 0;
var x = setInterval(function(){
    if(grow<100) {
        start1.textContent = grow++;
    }
    else {
        start1.textContent = 100;
    }
},40)


gsap.to(".loader", {
    y:"-1000",
    delay:"5",
    duration:"1.7",
    ease:"power2",
});


document.addEventListener("mousemove", function(hi){
    gsap.to(".crsr", {
        x:hi.x,
        y:hi.y,
        display:"flex",
    })
});



// web/dev text animation
function webdevtext(){
    var wd = document.querySelector(".webdev");
    wd.addEventListener("mouseenter", function(){
        gsap.to(".webdev", {
            color:"transparent",
            webkitTextStroke:"1px pink",
            textDecoration:"none",
            delay:0.1,
            borderBottom:"1px solid pink",
            fontFamily:"Playfair Display",
            fontStyle:"italic",
        })
    });
    
    wd.addEventListener("mouseleave", function(){
        gsap.to(".webdev", {
            delay:0.1,
            color:"pink",
            border:"0px",
            fontFamily:"Inter",
            fontStyle:"normal",  
            
            // textDecoration:"underline",
        })
    })
    


}
webdevtext();


gsap.from(".extrad", {
    y:"200",
    duration:"0.6",
    delay:"5.5",
    stagger:"0.2",
});




function magnetcursor() {
    Shery.makeMagnet(".nav div" , {});
Shery.makeMagnet(".heading-bar" , {});
Shery.makeMagnet(".heading-bar1" , {});
}
magnetcursor();


gsap.from(".topline", {
    y:"-100",
    duration:"1",
});

setInterval(function(){


    var pong = gsap.timeline();
    pong.to(".circletext", {
        y:"100",
        delay:"0",
        duration:"1",
    })
    pong.to(".circletext", {
        y:"-200",
        delay:"0",
        duration:"2",
    })



},3000)

