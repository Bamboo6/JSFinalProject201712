function $(ElementId){
    return document.getElementById(ElementId);
}
function checklogin() {
    var user=$("user");
    var userId=$("userId");
    userId.innerHTML="";
    if(user.value==""){
        userId.innerHTML="姓名不能为空";
        return false;
    }

    var pwd=$("pwd");
    var pwdId=$("pwdId");
    pwdId.innerHTML="";
    if(pwd.value==""){
        pwdId.innerHTML="学号不能为空";
        return false;
    }

    if(user.value=="刘涛" && pwd.value=="06161030")
    {
        alert("登录成功！");
        window.location.href="main.html";
        return true;
    }
    else
    {
        alert("姓名或学号错误！");
        return false;
    }
}