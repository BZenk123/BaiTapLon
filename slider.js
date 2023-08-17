document.getElementById('next').onclick=function() {
    const widthItem=document.querySelector('.wripper-content' ).offsetWidth;
    document.getElementById('formwriper').scrollLeft += widthItem;
    
}
document.getElementById('prev').onclick=function() {
    const widthItem=document.querySelector('.wripper-content' ).offsetWidth;
    document.getElementById('formwriper').scrollLeft -= widthItem;
    
}