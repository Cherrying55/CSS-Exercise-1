const passwd = document.querySelector('#password');
const confirm = document.querySelector('#confirm');
const submit = document.querySelector('button');
const message = document.querySelector('#passwdmessage');

passwd.addEventListener('keyup', check);
confirm.addEventListener('keyup', check);

function check(e){
    if(passwd.value != confirm.value){
        passwd.setAttribute('style', "border: 1px solid red;");
        message.textContent = "Passwords do not match";
    }
    else{
        passwd.setAttribute('style', "border: .5px solid #E5E7EB;");
        message.textContent = "";
    }
}

console.log(passwd.value);
console.log(confirm.value);