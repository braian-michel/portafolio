
/*===== MENU SHOW (mostrar menu) =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('menuIcon','navMenu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.menu_link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('navMenu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));



/*===== SCROLL REVEAL ANIMATION (efecto desplazamiento de objetos) =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME (desplazar inicio)*/
sr.reveal('.home_title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home_img',{delay: 400}); 
sr.reveal('.home_social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about_img',{}); 
sr.reveal('.about_subtitle',{delay: 400}); 
sr.reveal('.about_text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills_subtitle',{}); 
sr.reveal('.skills_text',{}); 
sr.reveal('.skills_data',{interval: 200}); 
sr.reveal('.skills_img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.project_img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact_input',{interval: 400}); 

/*SCROLL DASH*/
sr.reveral('.dash',{interval: 200});
sr.reveral('.demo_video',{interval: 200});
sr.reveral('.carousel_container',{interval: 200});