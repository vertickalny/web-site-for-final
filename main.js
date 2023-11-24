window.addEventListener('scroll', function() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    const scrollProgress = (window.scrollY / docHeight) * 100;

    document.getElementById('Slider').style.width = scrollProgress + '%';
})

document.addEventListener("DOMContentLoaded", function() {

    const clickSound = new Audio('f1-151254.mp3');

    const imtextElement = document.querySelector('.dropdown-item');
    imtextElement.addEventListener('click', function() {
        clickSound.play();
    });
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        window.scrollTo(0, document.body.scrollHeight);
    }
});

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}


// Get a reference to the element to be animated.
var element = document.getElementById("animate");

// Set the initial position of the element.
var position = 0;

// Function to animate the element.
function animate() {
    if (position >= window.innerWidth - 50) {
        // Reset the position when it reaches the right edge.
        position = 0;
    } else {
        // Move the element to the right.
        position += 15;
    }

    // Apply the new position to the element.
    element.style.left = position + "px";

    // Request the next frame for animation.
    requestAnimationFrame(animate);
}

// Start the animation.
animate();


const audio = new Audio('10e1076dfd6c701.mp3');

// Get a reference to the element with class 'logo1'
const logo1 = document.querySelector('.logo1');

const initialTime = 0;

// Add a click event listener to the 'logo1' element
logo1.addEventListener('click', function() {
    // Play the audio
    audio.currentTime = initialTime;

    audio.addEventListener('ended', function() {
        // Здесь вы можете выполнить загрузку вашего сайта
        window.location.href = 'https://en.wikipedia.org/wiki/Big_Three_(tennis)';
    })
    audio.play();
});







// $('img').on('contextmenu', function(e) {    e.preventDefault();
//     return false;});