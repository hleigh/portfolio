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

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.home__button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL CLIENTS*/
sr.reveal('.clients__content',{interval: 400}); 

/*SCROLL WORK*/
sr.reveal('.work__container',{interval: 300});

/*SCROLL CONTACT*/
sr.reveal('.contact__content',{interval: 200}); 

/*===== Mix it up =====*/
const mixer = mixitup('.work__container', {
    selectors: {
        target: '.work__content'
    },
    animation: {
        duration: 400
    }
});

/* Active work */
const workLink = document.querySelectorAll('.work__item')

function workAction() {
    workLink.forEach(n => n.classList.remove('active-work'))
    this.classList.add('active-work')
}

workLink.forEach(n => n.addEventListener('click', workAction))
