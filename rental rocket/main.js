let menu = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar') ;

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay:  400,
    reset: true
})

sr.reveal('.text',{delay: 200, origin: 'top'})
sr.reveal('.form-container form',{delay: 100, origin: 'left'})
sr.reveal('.ride-container .box',{delay: 100, origin: 'top'})
sr.reveal('.services-container .box ',{delay: 100, origin: 'top'})
sr.reveal('.about-container .box',{delay: 100, origin: 'top'})
sr.reveal('.reviews-container',{delay: 100, origin: 'top'})
sr.reveal('.newsletter .box',{delay: 100, origin: 'bottom'})

  


const form = document.getElementById('subscribe-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const thankYouMessage = document.getElementById('thank-you-message');

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // Show thank you message and hide input
            thankYouMessage.style.display = 'block';
            form.reset(); // Reset the form
        } else {
            alert('There was a problem with your submission.');
        }
    });
});



