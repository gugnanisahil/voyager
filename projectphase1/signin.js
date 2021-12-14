function validateform() {

    let username = document.getElementById("uname").value;
    let password = document.getElementById("pwd").value;
    
    if (username == '') 
    {
         document.getElementById("uname").nextElementSibling.innerHTML="Please enter your username".fontcolor("red"); 
        //alert("Please enter your name");  
         //text = "Please enter your name"; 
         return false;       
    } 
    else if (password == '') 
    {
      document.getElementById("pwd").nextElementSibling.innerHTML="Please enter your valid password".fontcolor("red");
      //alert("Please enter your email");
      //text="Please enter your email";
      return false;   

    } 
    else
    {
      /*<form action="/getquatation actionpage.html"> </form>
      <input type="submit" id="register" value="Request a Quote" onclick="getquatation actionpage.html"></input>*/
    }
   
  }


