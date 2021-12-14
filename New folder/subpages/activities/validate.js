function validateform(){  
    let name=document.myform.name.value;  


    let x=document.myform.email.value;  
    let atposition=x.indexOf("@");  
    let dotposition=x.lastIndexOf(".");


    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }

    else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
         return false;  
    }  
}

