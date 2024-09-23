
// Scroller 
const scroller = document.getElementById("scroller");
// 
const experience = document.getElementById("exp");
const info = document.getElementById("info");
window.addEventListener("scroll", () => {
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
  // Effect
  if(scrollY >= 204){
    info.style = 'right:0;';
    experience.style = 'left:0'
  }
  else {
    info.style = 'right:-120%;';
    experience.style = 'left:-120%'
  }
});
// End At Line No. 20

let slkils = document.querySelectorAll(".skilbox");

window.onscroll = function () {
  slkils.forEach(skill => {
    // Get offset top and height for each skill box
    let offsettop = skill.offsetTop;
    let oustsetheight = skill.offsetHeight;
    let windoheight = window.innerHeight;
    let scrool = this.pageYOffset;

    if (scrool > (offsettop + oustsetheight - windoheight)) {
      var span=document.querySelectorAll(".skilbox span");
      span.forEach(el=>{
        el.style.width=el.dataset.prog;
        
      })
    }
  });
};
