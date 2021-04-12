// LOGIN AND PASSWORD VALIDATION

function validate(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email == "thegloryholeclub@dragmail.net" && password == "dameelizabethtaylor") { 
        alert("Login successful!");
        window.location = "dropbox.html"; // redirectiong to email
        return false;
    }
        else { 
            alert ("Wrong password. Try again!");
        }
}

// FOR POPOVER ON FORGOT PASSWORD 

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
  trigger: 'focus'
})