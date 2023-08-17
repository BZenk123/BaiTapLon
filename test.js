document.getElementById('next').onclick=function() {
    const widthItem=document.querySelector('.wriper-item' ).offsetWidth;
    document.getElementById('formwriper').scrollLeft += widthItem;
    
}
document.getElementById('prev').onclick=function() {
    const widthItem=document.querySelector('.wriper-item').offsetWidth;
    document.getElementById('formwriper').scrollLeft -= widthItem;
    
}