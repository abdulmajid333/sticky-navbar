


window.addEventListener('scroll', () => {
    
    let navbar = document.getElementById("navdiv");
    
    if(window.scrollY >= 37){
        navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky');
    }
});