// Đây là dành cho number count
let valueDisplays = document.querySelectorAll(".num");
let interval=5000;

valueDisplays.forEach((valueDisplay) => {
 let startValue = 0;
 let endValue =  parseInt(valueDisplay.getAttribute("data-val"));
 let duration = Math.floor(interval / endValue);
 let counter = setInterval(function() {
  startValue +=1;
  valueDisplay.innerText=startValue;
  if (startValue == endValue)
   {
    clearInterval(counter); 
    
   }
 },10)

});
// Đây là dành cho ToTop
let ToTop=document.getElementById('gotopbtn');
ToTop.style.display='none';
window.addEventListener('scroll', ()=>{
  if (this.scrollY > 500){
    ToTop.style.display='block';
  }
  else {
    ToTop.style.display='none';
  }
}  )
ToTop.onclick=function() {
  window.scrollTo({
     top:0,behavior:'smooth'
  })
}

//
//Đây là dành cho hàm khởi tạo ngay sau khi sự kiện onload được diễn ra
// Trong đây sẽ có hàm tạo thời gian và hàm Loading Page
function init(){
  setInterval(function(){
    var c=document.getElementById("clock");
    var day=new Date();
    c.innerText=`Thứ ${day.getDay()+1}, ${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`

  },1000)
  
}
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
    loader.remove();
    // loader.addEventListener("transitionend", () => {
    //   document.body.removeChild(loader);
    // });
  });
 
  document.getElementById('next').onclick=function() {
    const widthItem=document.querySelector('.wriper-item' ).offsetWidth;
    document.getElementById('formwriper').scrollLeft += widthItem;
    
}
document.getElementById('prev').onclick=function() {
    const widthItem=document.querySelector('.wriper-item').offsetWidth;
    document.getElementById('formwriper').scrollLeft -= widthItem;
    
}
window.addEventListener("scroll", function() {
 var header=this.document.querySelector("header"); 
 header.classList.toggle("sticky",window.scrollY > 0);
})

var hinh=[];
var j=0;
var imgtag=document.getElementById('hos-pic');
var imgarr=["images/banner/slide002.jpg","images/banner/slide001.jpg","images/banner/slide003.webp"];
var i=0;
function changeImage() {
  imgtag.setAttribute("src",imgarr[i]);
  i++;
  if (i==imgarr.length) i=0;
}
setInterval(changeImage,2000);

























