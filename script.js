window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

const stopConfetti = () => {
    setTimeout (function() {
        confetti.stop();
    }, 8000);//interval for which confetti would fall
};

stopConfetti();

// const autoscroll = () => {
//         window.scrollBy({
//             behavior:"smooth",
//             top: window.innerHeight
//         });
// }
// function scrollCallback () {
//     for(let i=1; i<=7; i++){
//         setTimeout (function() {
//             autoscroll();
//         })
//     }
// }
// setInterval(autoscroll, 10000);//each slide showing time

// window.addEventListener("scroll", function(){
//     if(window.scrollY >= window.innerHeight){
//         //confetti.start(); //do something
//         stopConfetti();
//     }
// })

//Gsap Animation

gsap.from("#page2 .images",{
    scale:0,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page2 .images",
        scroller:"body",
        start:"top 60%"
    }
})

//vedio playback

const vids = document.querySelectorAll("video");
window.onscroll = function (e) {
    e = window.scrollY;
    for (let i = 2; i <= vids.length; i++) {
        if (e == i*window.innerHeight) {
            vids[i-2].play();
            vids[i-2].onended = function () {
                window.scrollBy({
                    behavior:"smooth",
                    top: window.innerHeight
                });
            }
        } else {
            vids[i-2].pause();
            vids[i-2].currentTime = 0;
        }
    }
    
};

// dataUrl = c.toDataURL();
// your_div.style.background='url('+dataUrl+')';

//preventscroll

window.onload = function() {
    disableScroll();
}