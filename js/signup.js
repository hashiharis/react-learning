document.getElementById("signup").addEventListener("click",function(){

    const userName=document.getElementById("exampleInputUserName1").value;
    const email=document.getElementById("exampleInputEmail1").value;
    const password=document.getElementById("exampleInputPassword1").value;

    const data={
        userName:userName,
        email:email,
        password:password
    }

    let user= JSON.parse(localStorage.getItem("userData"))||[]

    user.push(data)

    localStorage.setItem("userData",JSON.stringify(user))

    window.location.replace("http://127.0.0.1:5500/html/login.html")


})



