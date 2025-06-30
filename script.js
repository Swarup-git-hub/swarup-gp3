const nav = document.querySelector('.nav-bar');
// const navlayer = document.getElementById('layer');
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');
const link5 = document.getElementById('link5');
const favicon = document.getElementById('favicon');
const switchmode = document.getElementById('switch-mode');

  function updateFavicon() {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    favicon.href = isDark ? "profile-light.png" : "profile-darkk.png";
  }
  // Initially call on load
  updateFavicon();

  // Listen for system theme changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateFavicon);

  //reload to home page
  setTimeout(()=>{
      window.location="#home";
      
  },1000);


function lightmode(){
  document.body.classList.remove('darkmode');
}

function darkmode(){
  document.body.classList.add('darkmode');

}
function open_menu(){
    nav.classList.add('show');
    // navlayer.classList.add('sheet');

}

function close_menu(){
    nav.classList.remove('show')
    // navlayer.classList.remove('sheet');

}

link1.onclick=close_menu;//assigning the function
link2.onclick=close_menu;
link3.onclick=close_menu;
link4.onclick=close_menu;
link5.onclick=close_menu;
