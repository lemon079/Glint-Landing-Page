// ||-------------- NAVIGATION MENU

let openNavBtn = document.querySelector('.navigation-btn');
let closeNavBtn = document.querySelector('.close-menu-btn');
let navMenu = document.querySelector('.navigation-menu');
let listItems = document.querySelectorAll('.navigation-menu ul li')

const toggleMenu = () => {
    if (navMenu.style.display === 'block')
        navMenu.style.display = 'none';
    else
        navMenu.style.display = 'block';
}

openNavBtn.addEventListener('click', toggleMenu)
closeNavBtn.addEventListener('click', toggleMenu)

openNavBtn.addEventListener('click', () => {
    let tl = gsap.timeline();

    tl.from('.navigation-menu', {
        right: '-40%',
        duration: 0.5,
    })
    
    tl.from('.navigation-menu h3',{
        x : 100,
        opacity : 0,
        duration : 0.4,
    })

    tl.from('.navigation-menu ul',{
        x : 100,
        opacity : 0,
        duration : 0.4,
    })
    
    tl.from('.navigation-menu p',{
        x : 100,
        opacity : 0,
        duration : 0.4,
    })
})

listItems.forEach(item=>{
    item.addEventListener('click',()=>{
        navMenu.style.display = 'none';
    })
})

// ---------------------------------


// ||-------------- SCROLL UP BUTTON

let scrollBtn = document.querySelector('.scroll-up-btn');

scrollBtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
})


// ---------------------------------




// ||-------------- WEBSITE STATS

let websiteStatsCount = document.querySelectorAll('.website-stats p');
let awardReceived = 127;
let cupOfCoffee = 1505;
let projectCompleted = 109;
let happyClient = 102;
let a = 0;

function countDown() {

    a = a + Math.floor(Math.random() * 5);

    if (a <= awardReceived) {
        websiteStatsCount[0].innerText = a;
    }

    if (a <= cupOfCoffee) {
        websiteStatsCount[1].innerText = a;
    }

    if (a <= projectCompleted) {
        websiteStatsCount[2].innerText = a;
    }

    if (a <= happyClient) {
        websiteStatsCount[3].innerText = a;
    }

    if (a >= awardReceived && a >= cupOfCoffee && a >= projectCompleted && a >= happyClient) {
        clearInterval(countDown);
    }
}

setInterval(countDown, 20);

// ---------------------------------





// ||---------------------- PARALLAX EFFECT
var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
    delay: .6,
    transition: 'cubic-bezier(0,0,0,1)',
});

// ---------------------------------

// Container-4 overlay when hover over an image

const gallaryImages = [
    {
        imgURL: '/assets/shutterbug.webp',
        alt: 'shutterbug',
        imgName: 'shutterbug',
        serviceName: 'branding',
        gridSpan: '',
    },

    {
        imgURL: '/assets/woodcraft.webp',
        alt: 'woodcraft',
        imgName: 'woodcraft',
        serviceName: 'web design',
        gridSpan: 'class="row-span-2"',
    },

    {
        imgURL: '/assets/beetle.webp',
        alt: 'beetle',
        imgName: 'the beetle',
        serviceName: 'web developement',
        gridSpan: 'class="row-span-2"',
    },

    {
        imgURL: '/assets/grow-green.webp',
        alt: 'grow-green',
        imgName: 'grow green',
        serviceName: 'branding',
        gridSpan: 'class="row-span-2"',
    },

    {
        imgURL: '/assets/guitarist.webp',
        alt: 'guitarist',
        imgName: 'guitarist',
        serviceName: 'web design',
        gridSpan: 'class="row-span-2"',
    },

    {
        imgURL: '/assets/palmeira.webp',
        alt: 'palmeira',
        imgName: 'palmeira',
        serviceName: 'web design',
        gridSpan: '',
    },
];

let clutter = '';

gallaryImages.forEach((image) => {
    clutter +=
        `<a href="#" ${image.gridSpan}>
    <img src="${image.imgURL}" alt="${image.alt}" />
    <i class="fa-solid fa-link"></i>
    <div>
        <p>${image.imgName}</p>
        <p>${image.serviceName}</p>
    </div>
    </a>`;
})
document.querySelector('.gallery').innerHTML = clutter;

// ---------------------------------



// ||------------------------- BRAND CAROUSAL

let brandCarousal = new Splide('.brand-carousal', {
    type: 'loop',
    perPage: 6,
    rewind: true,
    arrows: false,
    gap: '3rem', // gap between each item
    breakpoints: {
        500: {
            perPage: 2,
            gap: '2rem',
        },
        800: {
            perPage: 3,
            gap: '2rem',
        },



    }
});

brandCarousal.on('pagination:mounted', function (data) {
    // You can add your class to the UL element
    data.list.classList.add('splide__pagination--custom');

    // `items` contains all dot items
    data.items.forEach(function (item) {
        item.button.style.backgroundColor = '#39b54a';
    });
});

brandCarousal.mount();

// ---------------------------------






// || -------------------------- USER REVIEWS CAROUSAL

let userReviews = new Splide('.user-reviews-carousal', {
    type: 'loop',
    perPage: 1,
    rewind: true,
    pagination: false,
    gap: '5rem', // gap between each item

    breakpoints: {
        640: {
            gap: '1rem',
            arrows: false,
            pagination: true,
        }
    }
});

userReviews.on('pagination:mounted', function (data) {
    // You can add your class to the UL element
    data.list.classList.add('splide__pagination--custom');

    // `items` contains all dot items
    data.items.forEach(function (item) {
        item.button.style.backgroundColor = '#39b54a';
    });
});


userReviews.mount();

// ---------------------------------





// || ----------------------- ANIMATIONS

function animate(className, x = 0, y = 0, opacity = 1, duration = 0, stagger = 0, repeat = 0, start = 'top 75%', end = 'top 90%') {
    gsap.from(className, {
        y,
        x,
        opacity,
        duration,
        stagger,
        repeat,
        yoyo: true,
        ease : 'power2.out'
    })
}

function animateOnScroll(className, x = 0, y = 0, opacity = 1, duration = 0, stagger = 0, start = 'top 75%', end = 'top 90%') {
    gsap.from(className, {
        y,
        x,
        opacity,
        duration,
        stagger,
        scrollTrigger: {
            scroller: 'body',
            trigger: className,
            scrub: 1,
            start,
            end,
        },
    })
}

animate('.scroll-down-btn', 0, 10, 0, 0.8, 0, -1);
animate('.hero-container .container-1-content', 50, 0, 0, 1, 0);

animateOnScroll('.we-are-glint-container .container-heading', 0, 100, 0, 1, 0);
animateOnScroll('.we-are-glint-container .container-heading + p', 0, 100, 0, 1, 0);

animateOnScroll('.what-we-do-container .container-heading', 0, 100, 0, 1, 0);
animateOnScroll('.what-we-do-container .services-container .service', 100, 0, 0, 2, 2, 'top 75%', 'bottom 20%');

animateOnScroll('.recent-works-container .container-heading h2', 0, 100, 0, 1, 0);
animateOnScroll('.recent-works-container .container-heading span', 0, 100, 0, 1, 0);
animateOnScroll('.recent-works-container .gallery a', 0, 50, 0, 2, 4, 'top 50%', 'bottom 10%');

animateOnScroll('.our-clients-container .container-heading', 0, 100, 0, 1, 0);
animateOnScroll('.our-clients-container .brand-carousal', 0, 100, 0, 1, 0);
animateOnScroll('.our-clients-container .user-reviews-carousal', 0, 100, 0, 2, 0, '20% 90%', '20% 90%');

animateOnScroll('.contact-us-container .container-heading', 0, 100, 0, 1, 0);
animateOnScroll('.contact-us-container .middle-container', -200, 0, 0, 2, 0, '50% 90%', '50% 100%');

animateOnScroll('footer .inner-container section', -200, 0, 0, 2, 0, '50% 90%', '50% 100%');




// ---------------------------------