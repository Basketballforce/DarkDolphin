// Select the icon
const sunMoon = document.querySelector("#sunMoon")
// set alternative icon styles
const sun = ' <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
const moon =' <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'


// check for default presence of alternative/secondary mode (dark mode)
// Check for dark mode preference on the browser/os preference
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Get the user's theme preference from local storage, if there
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  sunMoon.innerHTML = moon
  document.body.classList.toggle("dark-mode");

} else if (currentTheme == "light") {
  sunMoon.innerHTML = sun
  document.body.classList.toggle("light-mode");
}

// Listen for a click on the icon 
sunMoon.addEventListener("click", function() {
  // If the user's OS setting is dark and matches our .dark-mode class...
  if (prefersDarkScheme.matches) {
    // ...then toggle the light mode class
    sunMoon.innerHTML = sun
    document.body.classList.toggle("light-mode");
    // ...but use .dark-mode if the .light-mode class is already on the body,
    var theme = document.body.classList.contains("light-mode") ? "light" : "dark";
  } else {
    // Otherwise, let's do the same thing, but for .dark-mode
    sunMoon.innerHTML = moon
    document.body.classList.toggle("dark-mode");
    var theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  }
  // Finally, let's save the current preference to localStorage to keep using it
  localStorage.setItem("theme", theme);

  if(theme=="dark"){
    sunMoon.innerHTML = moon
  }else{
    sunMoon.innerHTML = sun
  }
  console.log(theme)
});



// toggle where the dark/light mode icon appears
const lastNavbarLi = document.querySelector("#lastNavbarLi")
const hamburger = document.querySelector("#hamburger")

function moveSunMoon(){
  // if windows width indicates mobile view
  if  (window.innerWidth < 768) {
    sunMoon.remove()
    hamburger.after(sunMoon)
 }
 // else in desktop view
  else {
    sunMoon.remove()
    lastNavbarLi.after(sunMoon)
  }
}

// bootstrap switches between mobile and desktop at 768 px by default
// call the toggle icon to move between the header and hamburger when first
// loading the page and when the page is resized

// if window resize call responsive function
$(window).resize(function() {
  moveSunMoon();
});

// run when document loads
$(document).ready(function() {
  moveSunMoon();
});