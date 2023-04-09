const myNav = document.querySelector("#navBar");
const toggleBtn = document.querySelector("#toggleBtn");
const navBar = () =>{ 
    if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10 ) {
        myNav.classList.add("navbar_bg");
    } 
    else if (toggleBtn.classList.contains('collapsed') && (document.body.scrollTop === 0 || document.documentElement.scrollTop === 0)) {
        myNav.classList.remove("navbar_bg");
    }
};  
const navBtn = () =>{
         myNav.classList.remove("navbar_bg");
         myNav.classList.add("navbar_bg");
};


toggleBtn.addEventListener("click", navBtn);
document.addEventListener("scroll", navBar);