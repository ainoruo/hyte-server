import"./style-928bxCnj.js";document.addEventListener("DOMContentLoaded",function(){const s=document.getElementById("settings-form");s.addEventListener("submit",async function(a){a.preventDefault();const t=localStorage.getItem("user_id");if(console.log("User ID:",t),!t){alert("User ID not found. Please log in again.");return}const d=new FormData(s),e={};if(d.forEach((o,n)=>{e[n]=o,console.log(n,":",o)}),e.user_id=t,console.log(t),e["new-password"]!==e["confirm-password"]){alert("New password and confirm password do not match.");return}try{const o="http://localhost:3000/api/users/";console.log("Request URL:",o);const n=localStorage.getItem("token");console.log("Token:",n);const l={method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({username:e.username,password:e["new-password"],email:e.email,user_id:t})};console.log("Request options:",l);const r=await fetch(o,l);console.log("Response:",r);const c=await r.json();if(console.log(c),!r.ok)throw new Error(c.message||"Failed to update user data");s.reset(),alert("User data updated successfully!")}catch(o){console.error("Error updating user data:",o),alert("Failed to update user data. Please try again.")}})});document.addEventListener("DOMContentLoaded",function(){document.querySelector(".logout a").addEventListener("click",function(a){a.preventDefault(),localStorage.removeItem("user_id"),localStorage.removeItem("token"),window.location.href="login.html"})});