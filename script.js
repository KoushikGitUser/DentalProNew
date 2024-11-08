
 function globalNav() {
    const menuIcon = document.getElementById("menu-icon");
    const menuIcon2 = document.getElementById("menu-icon-reg");
    const expandMobileNav = document.getElementById("expand_nav");
    const expandMobileNav2 = document.getElementById("expand_nav_reg");

    menuIcon.addEventListener("click",()=>{
        if(expandMobileNav.classList.contains("collapsed")){
            expandMobileNav.classList.remove("collapsed");
            expandMobileNav.classList.add("expanded");
        }
        else{
            expandMobileNav.classList.remove("expanded");
            expandMobileNav.classList.add("collapsed");
        }
   
    })
    menuIcon2.addEventListener("click",()=>{
        if(expandMobileNav2.classList.contains("collapsed")){
            expandMobileNav2.classList.remove("collapsed");
            expandMobileNav2.classList.add("expanded");
        }
        else{
            expandMobileNav2.classList.remove("expanded");
            expandMobileNav2.classList.add("collapsed");
        }
   
    })
};
globalNav();