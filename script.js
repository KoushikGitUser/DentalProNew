
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const navOptions = document.getElementById("nav-options");
    const menuIcon = document.getElementById("menu-icon");
    const menuIcon2 = document.getElementById("menu-icon-reg");
    const menuDown = document.getElementById("block");
    const menuContent = document.getElementById("menuDownContent");
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
    // if (window.scrollY > 100) { // Adjust the value as needed
    //     navbar.classList.remove('bg-transparent');
    //     navOptions.classList.remove("text-[white]");
    //     navOptions.classList.add("text-[#585b60]")
    //     menuIcon.classList.remove("text-[white]")
    //     navbar.classList.add('bg-green', 'shadow-lg'); // Add shadow for better visibility
    // } else {
    //     navbar.classList.remove('bg-white_height', 'shadow-lg');
    //     navbar.classList.add('bg-green');
    //     navOptions.classList.remove("text-[#585b60]")
    //     navOptions.classList.add("text-[white]");   
    //     menuIcon.classList.add("text-[white]")
    // }
});