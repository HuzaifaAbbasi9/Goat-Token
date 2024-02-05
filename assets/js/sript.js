$(document).ready(function(){
    $('.smooth-scrool').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 80
        }, 900, 'swing', function () {
            // window.location.hash = target;
        });
    });
    $(".nav-link").click(function () {
        if ($("#navbarSupportedContent").hasClass("show")) {
            $("#navbarSupportedContent").removeClass("show")
        }

    });

    particlesJS("particle-js", {
        "particles": {
            "number": {"value": 150, "density": {"enable": true, "value_area": 868}},
            "color": {"value": "#ffffff"},
            "shape": {
                "type": "circle",
                "stroke": {"width": 0, "color": "#000000"},
                "polygon": {"nb_sides": 3},
                "image": {"src": "img/github.svg", "width": 130, "height": 130}
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {"enable": true, "speed": 1, "opacity_min": 0, "sync": false}
            },
            "size": {"value": 3, "random": true, "anim": {"enable": true, "speed": 4, "size_min": 0.3, "sync": true}},
            "line_linked": {"enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1},
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {"enable": false, "rotateX": 600, "rotateY": 600}
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {"enable": false, "mode": "bubble"},
                "onclick": {"enable": false, "mode": "repulse"},
                "resize": true
            },
            "modes": {
                "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                "bubble": {"distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3},
                "repulse": {"distance": 400, "duration": 0.4},
                "push": {"particles_nb": 4},
                "remove": {"particles_nb": 2}
            }
        },
        "retina_detect": true
    });
    particlesJS("particle-js-1", {
        "particles": {
            "number": {"value": 150, "density": {"enable": true, "value_area": 868}},
            "color": {"value": "#ffffff"},
            "shape": {
                "type": "circle",
                "stroke": {"width": 0, "color": "#000000"},
                "polygon": {"nb_sides": 3},
                "image": {"src": "img/github.svg", "width": 130, "height": 130}
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {"enable": true, "speed": 1, "opacity_min": 0, "sync": false}
            },
            "size": {"value": 3, "random": true, "anim": {"enable": true, "speed": 4, "size_min": 0.3, "sync": true}},
            "line_linked": {"enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1},
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {"enable": false, "rotateX": 600, "rotateY": 600}
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {"enable": false, "mode": "bubble"},
                "onclick": {"enable": false, "mode": "repulse"},
                "resize": true
            },
            "modes": {
                "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                "bubble": {"distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3},
                "repulse": {"distance": 400, "duration": 0.4},
                "push": {"particles_nb": 4},
                "remove": {"particles_nb": 2}
            }
        },
        "retina_detect": true
    });
    var count_particles, stats, update;
    stats = new Stats;
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector('.js-count-particles');
    update = function () {
        stats.begin();
        stats.end();
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);

});