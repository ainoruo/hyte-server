import{s as r}from"./toast-ClxvtS15.js";import{f as l}from"./fetch-CGUiTqyx.js";const i=document.querySelector(".loginuser");i.addEventListener("click",async n=>{n.preventDefault();const o="https://hyte24.northeurope.cloudapp.azure.com/api/auth/login",t=document.querySelector(".login_form"),s={username:t.querySelector("input[name=username]").value,password:t.querySelector("input[name=password]").value},c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};l(o,c).then(e=>{console.log(e),console.log(e.token),localStorage.setItem("token",e.token),e.token==null?r("Unauthorized: username or password incorrect!"):(r(e.message),localStorage.setItem("name",e.user.username),localStorage.setItem("user_id",e.user.user_id),setTimeout(()=>{window.location.href="diary.html"},2e3)),logResponse("loginResponse",`localStorage set with token 
      value: ${e.token}`)})});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".create-user-link"),o=document.getElementById("modal");n.addEventListener("click",function(){o.style.display="block"}),o.querySelector(".close").addEventListener("click",function(){o.style.display="none"}),window.addEventListener("click",function(s){s.target==o&&(o.style.display="none")})});const u=document.querySelector(".createuser");u.addEventListener("click",async n=>{n.preventDefault();const o="https://hyte24.northeurope.cloudapp.azure.com/api/users",t=document.querySelector(".modal-content"),c={username:t.querySelector("input[name=username]").value,password:t.querySelector("input[name=password]").value,email:t.querySelector("input[name=email]").value},e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)};try{const a=await l(o,e);console.log(a),a.user_id?(r("User created successfully!"),setTimeout(()=>{window.location.href="index.html"},2e3)):r("Failed to create user. Please try again.")}catch(a){console.error(a),r("Failed to create user. Please try again.")}});