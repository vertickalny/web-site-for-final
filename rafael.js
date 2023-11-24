window.addEventListener('scroll', function() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    const scrollProgress = (window.scrollY / docHeight) * 100;

    document.getElementById('Slider').style.width = scrollProgress + '%';
})

document.addEventListener("DOMContentLoaded", function() {

    const clickSound = new Audio('062631597-tennis-applause-build-02.m4a');

    const blockElement = document.querySelector('.btn-group');
    blockElement.addEventListener('click', function() {
        clickSound.play();
    });
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        window.scrollTo(0, document.body.scrollHeight);
    }
});


$(document).ready(function(){
    $(".card-text").mouseover(function(){
        $(this).css("background-color", "#efe3cc");
    });
});
$(document).ready(function(){
    $(".card-text").mouseout(function(){
        $(this).css("background-color", "#f8f8f8");
    });
});

$(document).ready(function () {
    var $element = $("#animate");
    var position = 0;

    function animate() {
        if (position >= $(window).width() - 50) {
            position = 0;
        } else {
            position += 15;
        }

        // Use jQuery to animate the left property
        $element.animate({ left: position + "px" }, 500, animate);
    }

    // Start the animation.
    animate();
});
