let menuIcon= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');
let section= document.querySelectorAll('.section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetweight;
        let id =sec.getAttribute;

        if(top>=offset && top<offset+height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelectorAll('header nav a [href"='+id+']').classList.add('active')
            })
        }
    })
}

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}