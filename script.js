const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

const usernameWarning = document.getElementById('usernameWarning')
const passwordWarning = document.getElementById('passwordWarning')
const emailWarning = document.getElementById('emailWarning')
const repasswordWarning = document.getElementById('repasswordWarning')

const checked = document.querySelectorAll(".checked")
const usernamecheck = document.getElementById("usernamecheck")
const emailcheck = document.getElementById("emailcheck")
const passwordcheck = document.getElementById("passwordcheck")
const repasswordcheck = document.getElementById("repasswordcheck")

const error = document.querySelectorAll(".error")
const usernameerror = document.getElementById("usernameerror")
const emailerror = document.getElementById("emailerror")
const passworderror = document.getElementById("passworderror")
const repassworderror = document.getElementById("repassworderror")

checked.forEach(checkedIcon => {
    checkedIcon.classList.add("displayChecked");
});

error.forEach(errorIcon => {
    errorIcon.classList.add("displayError");
});

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    if(username.value === ""){
        username.className = "form-control border border-4 border-danger"
        usernameWarning.className = "text-danger"
        usernameWarning.innerText = "Please enter username!"
        usernameerror.classList.remove("displayError")
    }else{
        if (username.value.length > 7 && username.value.length < 14) {
            username.classList = "form-control"
            usernameWarning.classList.remove()
            usernameWarning.innerText = ""
            username.className = "form-control border border-4 border-success"
            usernamecheck.classList.remove("displayChecked")
            usernameerror.classList.add("displayError")
        }else{
            username.className = "form-control border border-4 border-danger"
            usernameWarning.className = "text-danger"
            usernameWarning.innerText = "Username must be at least 0-7 characters and at most 7-14 characters!"
            usernamecheck.classList.add("displayChecked")
            usernameerror.classList.remove("displayError")
        }
    }
    
    if(email.value === ""){
        email.className = "form-control border border-4 border-danger"
        emailWarning.className = "text-danger"
        emailWarning.innerText = "Please enter email!"
        emailerror.classList.remove("displayError")
        emailcheck.classList.add("displayChecked")
    }else{
            email.className = "form-control border border-4 border-success"
            email.classList.remove()
            emailWarning.innerText = ""
            emailcheck.classList.remove("displayChecked")
            emailerror.classList.add("displayError")
    }

    if(password.value === ""){
        password.className = "form-control border border-4 border-danger"
        passwordWarning.className = "text-danger"
        passwordWarning.innerText = "Please enter password!"
        passworderror.classList.remove("displayError")
        passwordcheck.classList.add("displayChecked")
    }else{
        if (password.value.length < 7 || password.value.length > 14) {
            password.className = "form-control border border-4 border-danger"
            passwordWarning.className = "text-danger"
            passwordWarning.innerText = "Username must be at least 0-7 characters and at most 7-14 characters!"
            passwordcheck.classList.add("displayChecked")
            passworderror.classList.remove("displayError")
        }else{
            password.classList = "form-control"
            passwordWarning.classList.remove()
            passwordWarning.innerText = ""
            password.className = "form-control border border-4 border-success"
            passwordcheck.classList.remove("displayChecked")
            passworderror.classList.add("displayError")
        }
    }

    if(repassword.value === password.value){
            if(repassword.value === ""){
                repassword.className = "form-control border border-4 border-danger"
                repasswordWarning.className = "text-danger"
                repasswordWarning.innerText = "Passwords do not match!"
                repassworderror.classList.remove("displayError")
                repasswordcheck.classList.add("displayChecked")
            }else{
                repassword.className = "form-control border border-4 border-success"
                repasswordWarning.classList.remove()
                repasswordWarning.innerText = ""
                repasswordcheck.classList.remove("displayChecked")
                repassworderror.classList.add("displayError")
            }
    }else{
        repassword.className = "form-control border border-4 border-danger"
        repasswordWarning.className = "text-danger"
        repasswordWarning.innerText = "Passwords do not match!"
        repasswordcheck.classList.add("displayChecked")
        repassworderror.classList.remove("displayError")
    }
});