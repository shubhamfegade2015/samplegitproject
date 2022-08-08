function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="Niraj" && password=="Nirajshubham@12")
    {
       
        alert("Login Successful");
        
    }
    else{
        alert("Login Failed");
    }
}