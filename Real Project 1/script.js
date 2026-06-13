// Fade Up Animation

const elements = document.querySelectorAll("section, h1, p, img");

elements.forEach((el) => {
    el.classList.add("fade-up");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

elements.forEach((el) => observer.observe(el));


// Floating Food Images

const foodImages = document.querySelectorAll(
    'main section:last-child img'
);

foodImages.forEach((img, index) => {
    img.animate(
        [
            { transform: "translateY(0px)" },
            { transform: "translateY(-15px)" },
            { transform: "translateY(0px)" }
        ],
        {
            duration: 2500 + (index * 300),
            iterations: Infinity
        }
    );
});


// Video autoplay fix

const video = document.querySelector("video");

if(video){
    video.muted = true;
    video.play().catch(() => {});
}