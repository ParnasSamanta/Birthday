let e = document.querySelector(".countdown");
let p = document.querySelector("page0");
let counttime = 1;//11
const tick = () => {
    const k = setInterval(() => {
        e.innerHTML = `<div>${counttime-1}</div>`;
        counttime--;
        if (counttime <= 0) {
            e.innerHTML = "<div>Let's Go!</div>";
        }
        if (counttime < 0) {
            clearInterval(k);
            window.scrollBy({
                behavior:"smooth",
                top: window.innerHeight
            });
            Run();
            setTimeout(function() {
                stopAnimation = true;
                c.style.visibility = "hidden";
                confetti.start();
                anim();
              }, 10000);
            setTimeout(function() {
                window.scrollBy({
                    behavior:"smooth",
                    top: window.innerHeight
                });
                Canvas.style.visibility = "hidden";

                confetti.stop();  
            },21047)
            enableScroll();
        }

    },1000);
};
window.addEventListener('click',tick);