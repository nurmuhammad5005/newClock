const watchData = [
    { img: "./img/1.png", color: "#ffcc99" },
    { img: "./img/2.png", color: "#a6a6a6" },
    { img: "./img/4.png", color: "#ff4040" }, 
    { img: "./img/3.png", color: "#8bff59" },
];

let currentIndex = 0;

const watchImg = document.getElementById("watch-img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const body = document.body;

function changeWatchImage(index) {
    if (index < 0) {
        currentIndex = watchData.length - 1;
    } else if (index >= watchData.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    watchImg.style.opacity = "0";
    setTimeout(() => {
        watchImg.src = watchData[currentIndex].img;
        body.style.background = watchData[currentIndex].color;
        watchImg.style.opacity = "1";
    }, 300);
}

prevBtn.addEventListener("click", () => changeWatchImage(currentIndex - 1));
nextBtn.addEventListener("click", () => changeWatchImage(currentIndex + 1));
