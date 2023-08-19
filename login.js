// step-1: add click event listener on login button
document.getElementById('login-btn').addEventListener('click', function(){
// step-2: get user email from the input field
// always remember to use .value to get the value of the input field
    const emailField = document.getElementById('user-mail');
    const mail=emailField.value;
    //step-3: get password
    // 3.1: get password from the input field
    const passwordField = document.getElementById('user-pass');
    const pass=passwordField.value;
    console.log(mail,pass);
    //step-4: check email and password
    if (mail.length > 0 || pass.length > 0) {
        if (mail === "admin@gmail.com" && pass === "admin") {
            // Step-5: Redirect to another page
            window.location.href = "index_2.html";
        } else {
            // when pass will wrong it will show a pop up invalid user
            alert("invalid user");
        }
    } else {
        alert("please fill up the form");
    }
    
    
    
    

})