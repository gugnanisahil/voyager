var images1 = ["blog4.jpg", 
                      "blog5.jpg",
                      "blog6.jpg"
                      ] ; //array
         var i = 0;
    
        function slides1()
        {
            document.getElementById("blog-img1").src = images1[0];
            if(i<(images1.length-1)) 0<
                i++;
            else
                i=0;
        }
        setInterval(slides1, 800)

var images2 = ["blog2.jpg", 
                      "blog1.jpg",
                      "blog3.jpg"
                      ] ;
         var i = 0;
    
        function slides2()
        {
            document.getElementById("blog-img2").src = images2[i];
            if(i<(images2.length-1))
                i++;
            else
                i=0;
        }
        setInterval(slides2, 800)


var images3 = ["blog2.jpg", 
                      "blog1.jpg",
                      "blog3.jpg"
                      ] ;
         var j = 0;
    
        function slides3()
        {
            document.getElementById("blog-img3").src = images3[i];
            if(j<(images3.length-1))
                j++;
            else
                j=0;
        }
        setInterval(slides3, 800)

        

        