var signup = document.querySelector('.signUp');
var signupName = document.getElementById('SignupName');
var signupEmail = document.getElementById('SignupEmail');
var signuppassword = document.getElementById('SignupPassword');
var signupLink = document.querySelector('.signupLink');

var login = document.querySelector('.login');
var loginEmail = document.getElementById('loginEmail');
var loginPassword = document.getElementById('loginPassword');
var loginLink = document.querySelector('.signinLink');
var array = [];


if(localStorage.getItem('userInformation')){
    array = JSON.parse(localStorage.getItem('userInformation'))
}



signupLink.addEventListener('click',function(){
    signup.classList.remove('d-none')
    login.classList.add('d-none')
})
loginLink.addEventListener('click',function(){
    signup.classList.add('d-none')
    login.classList.remove('d-none')
})


function signUp(){
    if(signupName.value == '' && signupEmail.value == '' && signuppassword.value == ''){
        document.querySelector('.signupMasseg').innerHTML = `<span class="text-danger fs-5">all input required</span>`
    }
    else{
        if(validEmail()){
        var info ={
            name : signupName.value,
            email :signupEmail.value,
            password:signuppassword.value
        }
        if (array.some(user => user.email === signupEmail.value)) {
            document.querySelector('.signupMasseg').innerHTML = '<span class ="text-danger fs-5">Email already registered</span>'
            return;
        }
        array.push(info)
        localStorage.setItem('userInformation',JSON.stringify(array))
        document.querySelector('.signupMasseg').innerHTML = `<span class="text-success fs-5">success</span>`
    
    }
else{
    alert('no')
}}
   
}
document.querySelector('.signupBtn').addEventListener('click',function(){
    signUp()
 
})

function logIn(){
  
    var email = loginEmail.value
    var password = loginPassword.value
   
 if(loginEmail.value == '' && loginPassword.value == ''){
    document.querySelector('.loginMasseg').innerHTML = `<span class="text-danger fs-5">all input required</span>`
 }
     
//  var data = JSON.parse(localStorage.getItem('userInformation'))
var data = JSON.parse(localStorage.getItem('userInformation'))
  for(var i =0; i < data.length ; i++){
   if( email == data[i].email && data[i].password == password){
        document.querySelector('.output').innerHTML = `<h1> welcome ${array[i].name}</h1>`
                   document.querySelector('.title').classList.add('d-none')
                   signup.classList.add('d-none')
                   login.classList.add('d-none')
    
  }
}
}

document.querySelector('.loginBtn').addEventListener('click',function(){
    logIn()
})


function validEmail(){
    var emailRegx = /[A-Za-z0-9]\@gmail\.com/
  return emailRegx.test(signupEmail.value)
}