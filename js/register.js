function $(ElementId){
    return document.getElementById(ElementId);
}

function checkreg(){
    var user=$("user");
    var userId=$("userId");
    userId.innerHTML="";
    if(user.value==""){
        userId.innerHTML="用户名不能为空";
        return false;
    }
    if(user.value.length<4 || user.value.length>12){
        userId.innerHTML="用户名长度为在4—12字符";
        return false;
    }
    for(var i=0;i<user.value.length;i++){
        var char=user.value.toLowerCase().charAt(i);
        if((!(char>=0 && char<=9))  && (!(char>='a'&& char<='z'))&&char!='_'){
            userId.innerHTML="用户名必须由字母、数字和下划线组成";
            return false;
        }
    }
    var pwd=$("pwd");
    var pwdId=$("pwdId");
    pwdId.innerHTML="";
    if(pwd.value==""){
        pwdId.innerHTML="密码不能为空";
        return false;
    }
    if(pwd.value.length<6 || pwd.value.length>12){
        pwdId.innerHTML="密码长度为在6—12字符";
        return false;
    }

    var repwd=$("repwd");
    var repwdId=$("repwdId");
    repwdId.innerHTML="";
    if(pwd.value!=repwd.value){
        repwdId.innerHTML="两次输入的密码不一致";
        return false;
    }

    var email=$("email");
    var emailId=$("emailId");
    emailId.innerHTML="";
    if(email.value==""){
        emailId.innerHTML="邮箱地址不可为空";
        return false;
    }
    if(email.value.indexOf("@")==-1){
        emailId.innerHTML="邮箱地址格式不正确\n邮箱地址必须包含@";
        return false;
    }
    if(email.value.indexOf(".")==-1){
        emailId.innerHTML="邮箱地址格式不正确\n邮箱地址必须包含.";
        return false;
    }

    var phonenum=$("phonenum");
    var phonenumId=$("phonenumId");
    phonenumId.innerHTML="";
    if(phonenum.value==""){
        phonenumId.innerHTML="手机号码不能为空";
        return false;
    }
    if (!(/^1[3|4|5|7|8]\d{9}$/.test(phonenum.value))){
        phonenumId.innerHTML="手机号码有误";
        return false;
    }

    return true;
}

function agree(){
    if(document.getElementById('checkbox').checked){
        document.getElementById('reg').disabled=false;
    } else {
        document.getElementById('reg').disabled='disabled';
        /*var checkboxId=$("checkboxId");
        checkboxId.innerHTML="未同意协议";*/
    }

}
