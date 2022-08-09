function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="Niraj" && password=="Nirajshubham@12")
    {
       window.location.href='./index.html';
       //header('Location:index.html');
        alert("Login Successful");
        return true;
        
    }
    else{
            
        alert("Login Failed");
        return false;
    }
}