document.addEventListener("scroll",(e) => {
  e.preventDefault();
  if(window.scrollY > 200){
      document.getElementById("scroll").style.opacity = 0;
  }else{
    document.getElementById("scroll").style.opacity = 1;
  }
});