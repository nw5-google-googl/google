function checkOrientation(){var elem=document.getElementById("rotateMessage");if(elem===null)
return;if(window.innerWidth>window.innerHeight){elem.style.display="none";}else{elem.style.display="block";}}
function periodicOrientationCheck(){checkOrientation();}
function isMobileDevice(){return /Mobi|iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||('ontouchstart'in window)||(navigator.maxTouchPoints>0)||(navigator.msMaxTouchPoints>0);}
window.addEventListener("resize",checkOrientation);checkOrientation();if(isMobileDevice()){setInterval(periodicOrientationCheck,3000);}
else{hideRotateMessage();}
var btn=document.getElementById("usePortraitBtn");if(btn!==null){btn.addEventListener("touchstart",function(event){hideRotateMessage();event.preventDefault();},{passive:false});}
function hideRotateMessage(){var rotateElement=document.getElementById("rotateMessage");if(rotateElement){rotateElement.remove();}}