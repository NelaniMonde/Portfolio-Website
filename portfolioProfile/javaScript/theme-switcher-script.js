/*=== Theme style toggling ===*/
const themeStyleToggler = document.querySelector(".theme-switcher-toggler");
themeStyleToggler.addEventListener("click", () =>
{
    console.log("its Working");
document.querySelector(".theme-switcher").classList.toggle("open");
});

//hide theme styles while scrolling 
window.addEventListener("scroll", ()=>
{
    if(document.querySelector(".theme-switcher").classList.contains("open"))
    {
        document.querySelector(".theme-switcher").classList.remove("open");
    }
});

/*===  Theme Switcher Colors ===*/
const alternativeClassVar = document.querySelectorAll(".alternate-style");
function setTheme(color)
{
    alternativeClassVar.forEach((style) =>
    {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    }

    )
}