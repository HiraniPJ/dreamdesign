function menuToggle() 
{
    var x = document.getElementById("navLinks");
    if (x.style.display === "block") 
    {
        x.style.display = "none";
    }
    
     else 
    {
        x.style.display = "block";
    }
}

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }