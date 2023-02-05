/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/*BUTTON*/

document.getElementById("downloadButton").addEventListener("click", function() {
    window.open("assets/Docs/Bharanidharan Resume.pdf", "_blank");
  });

/*END - BUTTON*/


/*CONTACT*/

document.getElementById("Con_Form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the form from submitting

    var field1 = document.getElementById("name").value;
    var field2 = document.getElementById("email").value;
    
    if(!field1){
        // check if field1 is empty
        document.getElementById("error").innerHTML = "name is required";
        return;
    }
    if(!field2){
        // check if field1 is empty
        document.getElementById("error").innerHTML = "email is required";
        return;
    }
    document.getElementById("message").innerHTML = "Details Submitted";
    setTimeout(function() {
     location.reload(); // reload the page after 1 seconds
    }, 1000);

    window.addEventListener("load", function() {
        document.getElementById("Con_Form").reset();
      });
    
});

/*END - CONTACT*/
