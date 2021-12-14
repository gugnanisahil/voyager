function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
    } 
    else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
  }
}
var images = ["7.jpg", 
                      "a71.jpg",
                      "a72.jpg",
                      "a73.jpg"
                      ] ;
         var i = 0;
    
        function slides()
        {
            document.getElementById("slideimage").src = images[i];
            if(i<(images.length-1))
                i++;
            else
                i=0;
        }
        setInterval(slides, 1000)