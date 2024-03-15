import"./style-C8ZCfusv.js";import{f as y}from"./fetch-CGUiTqyx.js";import{s}from"./toast-B-6j1RQv.js";document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".menu-toggle"),n=document.querySelector(".menu");t.addEventListener("click",function(){n.classList.toggle("show")})});const a=document.getElementById("exercise-form");a.addEventListener("submit",I);const c=document.getElementById("edit-modal"),f=document.querySelector(".close-button"),x=document.getElementById("edit-form");f.onclick=()=>c.style.display="none";window.onclick=t=>{t.target===c&&(c.style.display="none")};async function I(t){if(t.preventDefault(),!a.checkValidity()){a.reportValidity();return}const n=localStorage.getItem("user_id");if(!n){alert("User ID not found. Please log in again.");return}const o=new FormData(a),e={};o.forEach((r,i)=>{e[i]=r}),console.log(e),e.user_id=n;try{const r=`https://hyte24.northeurope.cloudapp.azure.com/api/entries/exercise/${n}`,l={method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},body:JSON.stringify(e)};if(!(await fetch(r,l)).ok)throw new Error("Failed to add exercise");a.reset(),s("Exercise added successfully!")}catch(r){console.error("Error adding exercise:",r.message),s("Failed to add exercise. Please try again.")}}const k=document.querySelector("#fetch-data");k.addEventListener("click",u);async function u(){const n=`https://hyte24.northeurope.cloudapp.azure.com/api/entries/exercise/${localStorage.getItem("user_id")}`,e={method:"GET",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};y(n,e).then(r=>{v(r)})}function v(t){console.log(t);const n=document.querySelector(".tbody");n.innerHTML="",t.forEach(o=>{console.log(o.date,o.type,o.duration,o.intensity);const e=document.createElement("tr"),r=new Date(o.date).toLocaleDateString("fi-FI"),i=document.createElement("td");i.innerText=r;const l=document.createElement("td");l.innerText=o.type;const m=document.createElement("td");m.innerText=o.duration;const p=document.createElement("td");p.innerText=o.intensity;const g=document.createElement("td"),d=document.createElement("button");d.className="edit",d.setAttribute("exercise-id",o.exercise_id),d.setAttribute("data-exercise-id",o.exercise_id),d.innerText="Edit",d.addEventListener("click",E=>h(E,t)),g.appendChild(d),e.appendChild(i),e.appendChild(l),e.appendChild(m),e.appendChild(p),e.appendChild(g),n.appendChild(e)}),document.querySelectorAll(".edit").forEach(o=>o.addEventListener("click",e=>h(e,t)))}function h(t,n){const o=parseInt(t.target.dataset.exerciseId,10);console.log("Entry ID:",o);const e=n.find(r=>r.exercise_id===o);document.getElementById("edit-entry-id").value=o,document.getElementById("edit-date").value=e.date,document.getElementById("edit-type").value=e.type,document.getElementById("edit-duration").value=e.duration,document.getElementById("edit-intensity").value=e.intensity,c.style.display="block"}x.addEventListener("submit",async t=>{t.preventDefault();const n=new FormData(t.target),e=`https://hyte24.northeurope.cloudapp.azure.com/api/entries/exercise/${n.get("edit-entry-id")}`,i={method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},body:JSON.stringify({date:n.get("edit-date"),type:n.get("edit-type"),duration:n.get("edit-duration"),intensity:n.get("edit-intensity")})};y(e,i).then(()=>{c.style.display="none",s("Exercise entry updated!"),u()})});document.getElementById("delete-entry").addEventListener("click",function(){const t=document.getElementById("edit-entry-id").value;t&&L(t)});async function L(t){if(!confirm("Are you sure you want to delete this exercise?"))return;const n=`https://hyte24.northeurope.cloudapp.azure.com/api/entries/exercise/${t}`,e={method:"DELETE",headers:{Authorization:"Bearer: "+localStorage.getItem("token")}};y(n,e).then(r=>{console.log(r),s("Exercise deleted"),c.style.display="none",u()})}document.getElementById("fetch-data").addEventListener("click",u);document.addEventListener("DOMContentLoaded",function(){document.querySelector(".logout a").addEventListener("click",function(n){n.preventDefault(),s("Logging out"),localStorage.removeItem("user_id"),localStorage.removeItem("token"),setTimeout(()=>{window.location.href="index.html"},2e3)})});