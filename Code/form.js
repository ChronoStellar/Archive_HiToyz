let errorMessage = document.getElementById("error-message")

function validate(){
    let a = 1;
    let name = document.getElementById("input-name").value;
    let pass = document.getElementById("input-password").value;
    let email = document.getElementById("input-email").value;
    let date = document.getElementById("input-date").value;
    let term = document.getElementById("input-check");

    if(name.length <5){
        errorMessage.innerHTML = "*Name must be 5 characters or more!";
        return false;
    }else if(!validatePass(pass)){
        errorMessage.innerHTML = "*Password must be 6-8 character with lower and upper case letter and numebrs";
        return false;
    }else if(!validateEmail(email)){
        errorMessage.innerHTML = "*Email must have @ and . in it";   
        return false;
    }else if(date==""){
        errorMessage.innerHTML = "*Please input your date of birth";
        return false;
    }else if(!term.checked){
        errorMessage.innerHTML = "*Please read our terms & agreements, then click the checkbox";
        return false;
    }
    errorMessage.innerHTML=""
    window.alert("Register Successful!\n");
    window.location.href='home.html'
}

function validatePass(pass){
    if(pass.length<6)return false;
    let i=0,j=0,k=0, l=0;
    for(i =0; i<pass.length; i++){
        if(pass[i]>='0' && pass[i]<='9'){
            l+=1;
        }else if(pass[i]>='a' && pass[i]<='z'){
            j++;
        }else if(pass[i]>='A' && pass[i]<='Z'){
            k++;
        }
    }
    if(l>=1 && j>=1 && k>=1)return true;
    return false;
}
function validateEmail(email){
    let at = email.indexOf("@");
    let dot = email.lastIndexOf(".");
    if(at<1 || dot<at+2 || dot+2>=email.length){
        return false;
    }
    return true;
}
// function validateEmail(email){
//     let i=0;
//     let at, dot;
//     for(i=0; i<email.length; i++){
//         if(email[i]=='@'){
//             at++;
//         }else if()

//     }
// }