const aboutlinks = document.getElementsByClassName("about-links");
const aboutTabContents = document.getElementsByClassName("about-tab-content");
function openTab(tabName)
{
   for(aboutlink of aboutlinks)
   {
        aboutlink.classList.remove("active-link")
   }
   for(abouttabcontent of aboutTabContents)
   {
        abouttabcontent.classList.remove("active-link")
   }
   event.currentTarget.classList.add("active-link")
   document.getElementById(tabName).classList.add("active-link");
}