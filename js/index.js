var imgs = [];
var imgIndex = 0;
var imgItem = document.querySelectorAll(".img-item");
var lightBoxContainer = document.querySelector(".lightbox-container");
var lightBoxImage = document.querySelector(".lightbox-img");
var close = document.getElementById("close");

var next = document.getElementById("next");
var prev = document.getElementById("prev");

for(i = 0 ; i<imgItem.length ; i++)
    {
        imgs.push(imgItem[i]);
        imgItem[i].addEventListener("click",function(e){
             lightBoxContainer.style.display = "block";
             var imgSrc =  e.target.src;
             lightBoxImage.style.backgroundImage = "url("+imgSrc+")"
              imgIndex = imgs.indexOf(e.target);
             })
        }

next.addEventListener("click",function(){
   
    imgIndex++;
    if(imgIndex == imgs.length)
        {
            imgIndex = 0;
        }
    var currentImg = imgs[imgIndex].src;
    lightBoxImage.style.backgroundImage = "url("+currentImg+")"
    
})

prev.addEventListener("click",function(){
    
    imgIndex--;
    if(imgIndex < 0)
        {
            imgIndex=imgs.length-1;
        }
    var currentImg = imgs[imgIndex].src;
    lightBoxImage.style.backgroundImage = "url("+currentImg+")"
    
})

close.addEventListener("click",function(){
    lightBoxContainer.style.display = "none";
})


document.addEventListener("keydown",function(e){ 
    
    if(e.keyCode == 27)
        {
         lightBoxContainer.style.display = "none";
        }
})
















