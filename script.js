
// function showError(errorElement, errorMessage){
//     document.querySelector("."+errorElement).classList.add("display-error");
//     document.querySelector("."+errorElement).innerHTML = errorMessage;
// }

// function clearError(){
//     let errors = document.querySelectorAll(".error");
//     for(let error of errors){
//         error.classList.remove("display-error");
//     }
// }

// let form = document.forms['sign-up-form'];

// form.onsubmit = function(event){

//     clearError();
    
//     if(form.email.value == ""){
//         showError("email-error", "Please enter your email address");
//         return false;
//     }

//     if(form.username.value == ""){
//         showError("username-error", "Please enter your username");
//         return false;
//     }
    
//     if(form.password.value == ""){
//         showError("password-error", "Please enter your password");
//         return false;
//     }

//     if (form['confirm-password'].value != form.password.value){
//         showError("confirm-password-error", "Passwords do not match");
//         return false;
//     }

//     document.querySelector(".success").classList.add("display-success");
//     document.querySelector(".success").innerHTML = "You have successfully signed up!";

//     event.preventDefault();

// }





// function showError(errorElement, errorMessage){
//     document.querySelector("."+errorElement).classList.add("display-error");
//     document.querySelector("."+errorElement).innerHTML = errorMessage;
// }

// function clearError(){
//     let errors = document.querySelectorAll(".error");
//     for(let error of errors){
//         error.classList.remove("display-error");
//     }
// }

// let form = document.forms['sign-up-form'];

// form.onsubmit = function(event){

//     clearError();
    
//     const regex = /^[0-9]+$/;

//     if(!regex.test(form.email.value)){
//         showError("email-error", "Please enter numbers ");
//         return false;
//     }

//     if(!regex.test(form.username.value)){
//         showError("username-error", "Please enter numbers ");
//         return false;
//     }
    
//     if(!regex.test(form.password.value)){
//         showError("password-error", "Please enter numbers");
//         return false;
//     }

//     if (!regex.test(form['confirm-password'].value)){
//         showError("confirm-password-error", "Please enter numbers");
//         return false;
//     }

//     if (form['confirm-password'].value != form.password.value){
//         showError("confirm-password-error", "Passwords do not match");
//         return false;
//     }

//     document.querySelector(".success").classList.add("display-success");
//     document.querySelector(".success").innerHTML = "You have successfully signed up!";

//     event.preventDefault();

// }


function showError(errorElement, errorMessage){
    document.querySelector("."+errorElement).classList.add("display-error");
    document.querySelector("."+errorElement).innerHTML = errorMessage;
}

function clearError(errorElement){
    document.querySelector("."+errorElement).classList.remove("display-error");
}

let form = document.forms['sign-up-form'];

form.email.addEventListener('input', function(event){
    const regex = /^[0-9]+$/;
    if(!regex.test(event.target.value)){
        showError("email-error", "Please enter numbers only");
    } else {
        clearError("email-error");
    }
});

form.username.addEventListener('input', function(event){
    const regex = /^[0-9]+$/;
    if(!regex.test(event.target.value)){
        showError("username-error", "Please enter numbers only");
    } else {
        clearError("username-error");
    }
});

form.password.addEventListener('input', function(event){
    const regex = /^[0-9]+$/;
    if(!regex.test(event.target.value)){
        showError("password-error", "Please enter numbers only");
    } else {
        clearError("password-error");
    }
});

form['confirm-password'].addEventListener('input', function(event){
    const regex = /^[0-9]+$/;
    if(!regex.test(event.target.value)){
        showError("confirm-password-error", "Please enter numbers only");
    } else {
        clearError("confirm-password-error");
    }
});

form.onsubmit = function(event){

    const regex = /^[0-9]+$/;

    if(!regex.test(form.email.value)){
        showError("email-error", "Please enter numbers only");
        return false;
    }

    if(!regex.test(form.username.value)){
        showError("username-error", "Please enter numbers only");
        return false;
    }
    
    if(!regex.test(form.password.value)){
        showError("password-error", "Please enter numbers only");
        return false;
    }

    if (!regex.test(form['confirm-password'].value)){
        showError("confirm-password-error", "Please enter numbers only");
        return false;
    }

    if (form['confirm-password'].value != form.password.value){
        showError("confirm-password-error", "Passwords do not match");
        return false;
    }

    document.querySelector(".success").classList.add("display-success");
    document.querySelector(".success").innerHTML = "You have successfully signed up!";

    event.preventDefault();

}