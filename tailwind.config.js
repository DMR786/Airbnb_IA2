/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        15: '60px',
        1.25: '5px',
      }
    },
  },
  plugins: [],
}


// bottom navigation
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("bottom-nav").style.bottom = "0";
  } else {
    document.getElementById("bottom-nav").style.bottom = "-65px";
  }
  prevScrollpos = currentScrollPos;
};


