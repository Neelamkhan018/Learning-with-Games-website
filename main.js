/*=============== SHOW MENU ===============*/
const navmenu = document.getElementById('nav-menu'),
      navtoggle = document.getElementById('nav-toggle'),
      navclose = document.getElementById('nav__close')

/*=============== MENU SHOW ===============*/
if(navtoggle){
    navtoggle.addEventListener('click',() =>{
        navmenu.classList.add('show-menu')
    })
}

/*=============== MENU HIDDEN ===============*/
if(navclose){
    navclose.addEventListener('click', () => {
        navmenu.classList.remove('show-menu')
    })
}



/*=============== REMOVE MENU MOBILE  ===============*/ 
const navlink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navmenu = document.getElementById('nav-menu')
    navmenu.classList.remove('show-menu')
}

navlink.forEach(n => n.addEventListener('click',linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurheader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')

}
window.addEventListener('scroll', blurheader)

/*=============== SCROLL up ===============*/

const scrollup = () =>{
    const scrollup = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
              : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollup)

/*=========scroll sections active link============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollY = window.pageYOffset

        sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          sectionsClass.classList.add('active-link')
        }else{
          sectionsClass.classList.remove('active-link')
        }

      }
)}

{
  window.addEventListener('scroll',scrollActive)
}

/*=================scroll reveal animation=========*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    //reset: true //animation repeat
})

sr.reveal(`.home__data, .explore__data,.explore__user, .footer__container`),
sr.reveal(`.home__card`,{delay: 600, distance: '100px', interval:100})
sr.reveal(`.about__data`,{origin: 'right'})
sr.reveal(`.about__image`,{origin: 'left'})
sr.reveal(`.popular__card`,{interval: 200})



