const btn = document.querySelector(".btn");
const userName = document.querySelector("#userName");
const passWord = document.querySelector("#passWord");
const usernameError = document.querySelector("#username__error");
const passwordError = document.querySelector("#password__error");
const btns = document.querySelector(".btns");
const form = document.querySelector(".form")

userName.addEventListener("keyup", function (e) {
     e.preventDefault();
     if (userName.value == "") {
       usernameError.style.display = "block";
     } else {
       usernameError.style.display = "none";
     }
   });
   
   passWord.addEventListener("keyup", function () {
     if (passWord.value == "") {
       passwordError.style.display = "block";
     } else {
       passwordError.style.display = "none";
     }
   });
   
   btns.addEventListener("click", function (e) {
     e.preventDefault();
     if (userName.value == "" && passWord.value == "") {
       usernameError.style.display = "block";
       passwordError.style.display = "block";
      //  form.style.height = "45vh";
     } else {
       usernameError.style.display = "none";
       passwordError.style.display = "none";
       window.location.href = "dashboard.html";
       let cred = {
         userName: `$(userName.value)`,
         passWord: `$(passWord.value)`,
       };
       console.log(cred);
     }
   })

   