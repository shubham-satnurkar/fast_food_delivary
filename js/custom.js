let navToggle = document.getElementById('navToggle');
let navCollpase = document.getElementById('navCollapse');
navToggle.addEventListener('click', function(){
    navCollpase.classList.toggle('active');
    console.log('Clicked')
})