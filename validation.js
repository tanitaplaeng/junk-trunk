// LOGIN AND PASSWORD VALIDATION

function validate(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email == "thegloryholebar@dragmail.net" && password == "pornstarmankini750") { 
        alert("Login successful!");
        window.location = "dropbox.html"; // redirectiong to email
        return false;
    }
        else { 
            alert ("Wrong password. Try again!");
        }
}

// POPOVER ON FORGOT PASSWORD IN DROPBOX 

function forgotPassword() { 
  document.getElementById("forgotPW").click(); // gets element by ID and listens to click event to trigger popup 
}

// POPOVER ON UPLOAD IN WORKSPACE

function upload() { 
  document.getElementById("upload").click();
}
