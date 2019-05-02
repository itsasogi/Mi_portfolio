var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
    if (currentScrollPos === 0) {
      //  document.getElementById("navbar").style.top = "0";
      document.getElementById("navbar").classList.remove("hide")
    } else {
      //  document.getElementById("navbar").style.top = "-60px";
      console.log('JS')
          document.getElementById("navbar").classList.add("hide")
         }
         prevScrollpos = currentScrollPos;
       }