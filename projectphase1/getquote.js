   function validateform() {
    
      let name = document.getElementById("fname").value;
      let email = document.getElementById("mail").value;
      let phonenumber = document.getElementById('number').value;
      let des = document.getElementById("Destination").value;
      if (name == '') 
      {
           document.getElementById("fname").nextElementSibling.innerHTML="Please enter your name".fontcolor("red"); 
          //alert("Please enter your name");  
           //text = "Please enter your name"; 
           return false;       
      } 
      else if (email == '') 
      {
        document.getElementById("mail").nextElementSibling.innerHTML="Please enter your email".fontcolor("red");
        //alert("Please enter your email");
        //text="Please enter your email";
        return false;   

      } else if (phonenumber == '') 
      {
        document.getElementById("number").nextElementSibling.innerHTML="Please enter your contact number".fontcolor("red");
          //alert("Please provide your contact number");
          //text= "Please provide your contact number'";
          return false;   
      }
      else if (des == '')  
      {
        document.getElementById("Destination").nextElementSibling.innerHTML="Please enter your desired destination".fontcolor("red");
         //alert("Please provide your desired destination");
         //text="Please provide your desired destination";
         return false;   
      }
      else
      {
          window.location.href="/projectphase1/getquatation actionpage.html";
        /*<form action="/getquatation actionpage.html"> </form>
        <input type="submit" id="register" value="Request a Quote" onclick="getquatation actionpage.html"></input>*/
      }
     
    }
  
  
  