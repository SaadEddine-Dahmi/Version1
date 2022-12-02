// $(document).ready(function(){
//     $(".email").focus(function(){
//         $("h4:first").fadeIn(1000,function(){
//             $(this).fadeOut(20000);
//         }).text("Max char 14").css("color", "red");
//     });
//     $(".pwd").focus(function(){
//         $("h4:last").fadeIn(1000,function(){
//             $(this).fadeOut(20000);
//         }).text("Can't be Empty").css("color", "red");
//     });
//     let $emailInput = $(".email");
//     let $pwdInput = $(".pwd");

//     $(".ahref").click(function(e){
//         let $emailValid =false;
//         let $pwdValid =false;

//         if ($pwdlValid.val().length >= 1 && $pwdValid.val().length <= 20){
//             $pwdValid = true;
//         }
//         // if ($pwdInput.val() >= 18 && $pwdInput.val() <= 100){
//         //     $pwdInput = true;
//         // }


//         if ($emailValid === false || $pwdValid === false){
//             e.preventDefault();
//         }
        

//     });

// });
const email = document.getElementById("email");
console.log(email);
email.addEventListener("input", () => {
    email.style.outline = 'none'
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let s = email.value;
    console.log(regex.test(s));
    if (!regex.test(s)) {
        email.classList.remove("border-green-500");
        email.classList.add("border-red-500");
        emailError = false;
    } else {
        email.classList.remove("border-red-500");
        email.classList.add("border-green-500");
        emailError = true;
    }
});
  