function deAc() {
var formId = document.getElementById('signup');
formId.setAttribute('novalidate', true);
}
deAc();

document.getElementById('submit').addEventListener('click',function(){

var nameSubmit = document.getElementsByName('name');
if (nameSubmit.value.length < 1) {
    window.alert('Please type in something');
}

});

document.getElementById('submit').addEventListener("click", function(){

var emailButton = document.querySelector("input[type='email']");
var emailCheck=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
if (emailCheck.test(emailButton.value) === false) {
     window.alert('Please enter a valid email');
}

});