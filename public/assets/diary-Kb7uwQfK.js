import{s as c}from"./toast-ClxvtS15.js";import{f as r}from"./fetch-CGUiTqyx.js";document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".menu-toggle"),e=document.querySelector(".menu");t.addEventListener("click",function(){e.classList.toggle("show")})});async function u(){const t="https://hyte24.northeurope.cloudapp.azure.com/api/auth/me",e=localStorage.getItem("token"),o=localStorage.getItem("user_id");console.log("Tämä on haettu LocalStoragesta",e),console.log("käyttäjän id: ",o);const n={method:"GET",headers:{Authorization:"Bearer: "+e}};r(t,n).then(a=>{document.getElementById("name").innerHTML=a.user.username})}u();document.addEventListener("DOMContentLoaded",function(){document.querySelector(".logout a").addEventListener("click",function(e){e.preventDefault(),c("Logging out"),localStorage.removeItem("user_id"),localStorage.removeItem("token"),setTimeout(()=>{window.location.href="login.html"},2e3)})});
