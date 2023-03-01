$(document).ready(function () {
    // header scroll
    $('.banner .underline.present').addClass('active')

    $(window).on("load scroll", function () {
        $('.banner').addClass('loaded')
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $("header").addClass("scrolled_head");
        } else {
            $("header").removeClass("scrolled_head");
        }
    });

    if ($('.underline.present').length) {
        window.addEventListener("load", function () {           
            
        });
    }
    if ($('.portfolio_slider').length) {
        $('.portfolio_slider').lightSlider({
            adaptiveHeight: true,
            item: 1,
            slideMargin: 0,
            loop: true,
            vertical: true,
        });

    }

    if ($('.slider1').length) {
        $('.slider1').owlCarousel({
            items: 1,
            loop: false,
            nav: true,
            margin: 0
        });
    }
    if ($('.news_slider').length) {
        $('.news_slider').owlCarousel({
            autoPlay: true,
            slideTransition: 'linear',
            autoplayTimeout: 0,
            autoplaySpeed: 8000,
            animateIn: 'linear',
            animateOut: 'linear',
            autoplay: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    margin: 15
                },

                750: {
                    items: 2,
                    margin: 24,
                    nav: true,
                },

                1366: {
                    items: 3,
                    margin: 20,
                    nav: true
                }
            }
        })
    }

    // Parallax scrollBehavior: 
    var initScrollTop = $(window).scrollTop();
    $('.parallax').css({ 'background-position-y': (initScrollTop / 75) + '%' });
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        $('.parallax').css({ 'background-position-y': (scrollTop / 75) + '%' });
    })

    //    Bottom scrollBehavior: 

    $('.bottom_scroll').click(function () {

        var width = $(window).width();
        if (width > 1200) {
            console.log('first condition')
            if ($('header.scrolled_head').length) {
                normalScroll();
                console.log('the element is present')
            }
            else {
                lap()
            }
        }
        else if (width > 576) {
            if ($('header.scrolled_head').length) {
                normalScroll();
            }
            else {
                tab()
            }
        }
        else if (width > 300) {
            if ($('header.scrolled_head').length) {
                normalScroll();
            }
            else {
                mobile()
            }
        }

    })
    var scrollTarget = $('.banner').next()
    function normalScroll() {
        var headerHeight = $('header').outerHeight();
        console.log(headerHeight)
        $("html, body").animate({ scrollTop: $(scrollTarget).offset().top - headerHeight }, 500);
        console.log('normalScroll')
        return 0;
    }
    function lap() {
        console.log('lap')
        var headerHeight = $('header').outerHeight() - 61;
        $("html, body").animate({ scrollTop: $(scrollTarget).offset().top - headerHeight }, 500);
        return 0;
    }
    function tab() {
        console.log('tab')
        var headerHeight = $('header').outerHeight() - 16;
        $("html, body").animate({ scrollTop: $(scrollTarget).offset().top - headerHeight }, 500);
        return 0;
    }
    function mobile() {
        console.log('mobile')
        var headerHeight = $('header').outerHeight() - 22;
        $("html, body").animate({ scrollTop: $(scrollTarget).offset().top - headerHeight }, 500);
        return 0;
    }

    // activate underline when scrolled into view 

    // finding the target section
    var scrollTarget = $('.banner').next();

    $(window).on('scroll', function () {
        $("section.content").each(function (index, element) {
            if (isScrolledIntoView($(element))) {
                $(element).addClass('active')
            }

        });
    });
    // finding height of banner
    $(window).on("load scroll resize", function () {
        let vectorHeight = $('.vector1').height();
        $("body").get(0).style.setProperty("--vectorHeight", vectorHeight + 'px');

    });
    // A0S

    AOS.init();
    AOS.init({
        duration: 1500,
    })



});

// scrolled into view 

function isScrolledIntoView(elem) {
    let extraHeight = 2;
    var docViewTop = $(window).scrollTop() - extraHeight;
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}



// Canvas 1

// Math

// function getVectorFromTwoPoints(point1, point2) {
//     return {
//         x: point2.x - point1.x,
//         y: point2.y - point1.y,
//     };
// }

// function getDistanceBetweenPoints(point1, point2) {
//     const x = point1.x - point2.x;
//     const y = point1.y - point2.y;

//     return Math.sqrt(x * x + y * y);
// }

// // Animation constants

// const FRAME_DURATION = 1000 / 60; // 60fps frame duration ~16.66ms
// const getTime = typeof performance === 'function' ? performance.now : Date.now;

// // Global requestAnimationFrame ID so we can cancel it when user clicks on "Draw again"
// let rafID;

// // Function to animate line drawing
// function drawLine(startPoint, endPoint, drawingSpeed = 5, onAnimationEnd, startingLength = 0) {
//     let lastUpdate = getTime();

//     // Set initial state
//     let currentPoint = startPoint;
//     const vector = getVectorFromTwoPoints(startPoint, endPoint);
//     const startToEndDistance = getDistanceBetweenPoints(startPoint, endPoint);

//     const lineStep = drawingSpeed / startToEndDistance;

//     vectorStep = {
//         x: vector.x * lineStep,
//         y: vector.y * lineStep,
//     };

//     const animate = () => {
//         const now = getTime();
//         const delta = (now - lastUpdate) / FRAME_DURATION;

//         const deltaVector = {
//             x: vectorStep.x * delta,
//             y: vectorStep.y * delta,
//         };

//         // Add starting length if any
//         if (startingLength) {
//             const startingLengthFactor = startingLength / startToEndDistance;

//             deltaVector.x += vector.x * startingLengthFactor;
//             deltaVector.y += vector.y * startingLengthFactor;

//             // We've drawn it once, we don't want to draw it again
//             startingLength = 0;
//         }

//         // Set next point
//         let nextPoint = {
//             x: currentPoint.x + deltaVector.x,
//             y: currentPoint.y + deltaVector.y
//         };

//         let newStartingLength = 0;
//         let isFinished = false;

//         const startToNextPointDistance = getDistanceBetweenPoints(startPoint, nextPoint);

//         // The next point is past the end point
//         if (startToNextPointDistance >= startToEndDistance) {
//             newStartingLength = startToNextPointDistance - startToEndDistance;
//             isFinished = true;
//             nextPoint = endPoint;
//         }

//         // Draw line segment
//         ctx.beginPath();
//         ctx.moveTo(currentPoint.x, currentPoint.y);
//         ctx.lineTo(nextPoint.x, nextPoint.y);
//         ctx.stroke();

//         if (isFinished) {
//             if (onAnimationEnd) {
//                 onAnimationEnd(newStartingLength);
//             }
//             return;
//         }

//         // Move current point to the end of the drawn segment
//         currentPoint = nextPoint;

//         // Update last updated time
//         lastUpdate = now;

//         // Store requestAnimationFrame ID so we can cancel it
//         rafID = requestAnimationFrame(animate);
//     };

//     // Start animation
//     animate();
// }

// function drawPolygon(vertices, drawingSpeed = 5, onAnimationEnd, startingLength = 0, startingPointIndex = 0) {
//     const start = vertices[startingPointIndex];
//     const end = vertices[startingPointIndex + 1];

//     if (startingPointIndex + 1 >= vertices.length) {
//         if (onAnimationEnd) {
//             onAnimationEnd();
//         }
//         return;
//     }

//     drawLine(start, end, drawingSpeed, (startingLength) => {
//         const newIndex = startingPointIndex + 1;

//         drawPolygon(vertices, drawingSpeed, onAnimationEnd, startingLength, newIndex)
//     }, startingLength);
// }


// // Demo
// var fullHeight = document.getElementById('vector1').height();
// console.log(fullHeight)


// const vertices = [
//     { x: 0, y: fullHeight },
//     { x: 250 + '%', y: 10 },
//     { x: 500, y: 500 },
//     { x: 300, y: 300 },
// ];

// const canvas = document.getElementById('vector1'),
//     ctx = canvas.getContext('2d');
// ctx.fillStyle = '#fff';

// ctx.lineCap = 'round';
// ctx.lineWidth = 3;

// function draw() {
//     // Cancel previous animation
//     cancelAnimationFrame(rafID);
//     // Clear canvas
//     ctx.fillRect(0, 0, 500, 500);

//     // Draw polygon
//     drawPolygon(vertices, 5, () => console.log('done'));
// }

// draw();
