
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var SwiperLeft = new Swiper(".mySwiperLeft", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }
    
});




// const progressCircle = document.querySelector(".autoplay-progress svg");
// const progressContent = document.querySelector(".autoplay-progress span");
var SwiperCenter = new Swiper(".mySwiperCenter", {
    direction: "vertical",
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    
    
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }
});



// const progressCircle = document.querySelector(".autoplay-progress svg");
// const progressContent = document.querySelector(".autoplay-progress span");
var SwiperRight = new Swiper(".mySwiperRight", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-nexttt",
        prevEl: ".swiper-button-prevtt"
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }
});


// SwiperCenter.controller.control = this.SwiperRight;
// SwiperRight.controller.control = this.SwiperCenter;

// SwiperCenter.controller.control = this.SwiperLeft;
// SwiperLeft.controller.control = this.SwiperCenter;

// SwiperLeft.controller.control = this.SwiperRight;

// SwiperRight.controller.control = this.SwiperLeft;

SwiperRight.controller.control = [SwiperCenter, SwiperLeft];
SwiperLeft.controller.control = [SwiperCenter, SwiperRight];
// SwiperCenter.controller.control = [SwiperLeft, SwiperRight];

