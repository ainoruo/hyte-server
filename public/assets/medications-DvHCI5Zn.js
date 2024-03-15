import"./style-DjGbCGuo.js";import{f as m}from"./fetch-CGUiTqyx.js";import{s as c}from"./toast-B-6j1RQv.js";document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".menu-toggle"),t=document.querySelector(".menu");o.addEventListener("click",function(){t.classList.toggle("show")})});const u=document.getElementById("exercise-form");u.addEventListener("submit",S);const r=document.getElementById("edit-modal"),k=document.querySelector(".close-button"),D=document.getElementById("edit-form");k.onclick=()=>r.style.display="none";window.onclick=o=>{o.target===r&&(r.style.display="none")};async function S(o){o.preventDefault();const t=localStorage.getItem("user_id");if(!t){c("User ID not found. Please log in again.");return}const n=new FormData(u),e={};n.forEach((d,a)=>{e[a]=d}),console.log(e),e.user_id=t;try{const d=`https://hyte24.northeurope.cloudapp.azure.com/api/entries/medications/${t}`,s={method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},body:JSON.stringify(e)};if(!(await fetch(d,s)).ok)throw new Error("Failed to add medication");u.reset(),c("Medication added successfully!"),l()}catch(d){console.error("Error adding medication:",d.message),c("Failed to add medication. Please try again.")}}async function l(){const t=`https://hyte24.northeurope.cloudapp.azure.com/api/entries/medications/${localStorage.getItem("user_id")}`,e={method:"GET",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};m(t,e).then(d=>{v(d)})}function v(o){console.log(o);const t=document.querySelector(".tbody");t.innerHTML="",o.forEach(n=>{console.log(n.name,n.dosage,n.frequency,n.start_date,n.end_date);const e=document.createElement("tr"),d=document.createElement("td");d.innerText=n.name;const a=document.createElement("td");a.innerText=n.dosage;const s=document.createElement("td");s.innerText=n.frequency;const g=new Date(n.start_date).toLocaleDateString("fi-FI"),p=document.createElement("td");p.innerText=g;const E=new Date(n.end_date).toLocaleDateString("fi-FI"),y=document.createElement("td");y.innerText=E;const h=document.createElement("td"),i=document.createElement("button");i.className="edit",i.setAttribute("medication-id",n.medication_id),i.setAttribute("data-medication-id",n.medication_id),i.innerText="Edit",i.addEventListener("click",I=>f(I,o)),h.appendChild(i),e.appendChild(d),e.appendChild(a),e.appendChild(s),e.appendChild(p),e.appendChild(y),e.appendChild(h),t.appendChild(e)}),document.querySelectorAll(".edit").forEach(n=>n.addEventListener("click",e=>f(e,o)))}function f(o,t){const n=parseInt(o.target.dataset.medicationId,10);console.log("Entry ID:",n);const e=t.find(d=>d.medication_id===n);document.getElementById("edit-entry-id").value=n,document.getElementById("edit-name").value=e.name,document.getElementById("edit-dosage").value=e.dosage,document.getElementById("edit-frequency").value=e.frequency,document.getElementById("edit-start-date").value=new Date(e.start_date).toISOString().split("T")[0],document.getElementById("edit-end-date").value=new Date(e.end_date).toISOString().split("T")[0],r.style.display="block"}D.addEventListener("submit",async o=>{o.preventDefault();const t=new FormData(o.target),n=t.get("edit-entry-id");console.log("FormData:",t);const e=`https://hyte24.northeurope.cloudapp.azure.com/api/entries/medications/${n}`,a={method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},body:JSON.stringify({name:t.get("edit-name"),dosage:t.get("edit-dosage"),frequency:t.get("edit-frequency"),start_date:t.get("edit-start-date"),end_date:t.get("edit-end-date")})};m(e,a).then(()=>{r.style.display="none",c("Medication entry updated!"),l()})});document.getElementById("delete-entry").addEventListener("click",function(){const o=document.getElementById("edit-entry-id").value;o&&L(o)});async function L(o){if(!confirm("Are you sure you want to delete this exercise?"))return;const t=`https://hyte24.northeurope.cloudapp.azure.com/api/entries/medications/${o}`,e={method:"DELETE",headers:{Authorization:"Bearer "+localStorage.getItem("token")}};m(t,e).then(d=>{console.log(d),c("Medication entry deleted!"),r.style.display="none",l()})}document.getElementById("fetch-data").addEventListener("click",l);document.addEventListener("DOMContentLoaded",function(){document.querySelector(".logout a").addEventListener("click",function(t){t.preventDefault(),c("Logging out"),localStorage.removeItem("user_id"),localStorage.removeItem("token"),setTimeout(()=>{window.location.href="index.html"},2e3)})});