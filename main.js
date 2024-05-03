const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

console.log(emailInput);
console.log(passwordInput);

const user = {email: 'teste123@gmail.com' , password: 'teste123'};


function compararDados(){
    
    event.preventDefault();

    if (emailInput.value === user.email && passwordInput.value === user.password){
        alert("Logado");
    } else {
        alert("Email or password incorret");
    }

}
