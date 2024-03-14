import{s}from"./toast-ClxvtS15.js";import{f as p}from"./fetch-CGUiTqyx.js";document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".menu-toggle"),o=document.querySelector(".menu");n.addEventListener("click",function(){o.classList.toggle("show")})});const g=document.getElementById("exercise-form");g.addEventListener("submit",D);const l=document.getElementById("edit-modal"),k=document.querySelector(".close-button"),_=document.getElementById("edit-form");k.onclick=()=>l.style.display="none";window.onclick=n=>{n.target===l&&(l.style.display="none")};async function D(n){n.preventDefault();const o=localStorage.getItem("user_id");if(!o){s("User ID not found. Please log in again.");return}const e=new FormData(g),t={};e.forEach((r,a)=>{t[a]=r}),console.log(t);const d=new Date().toISOString();t.created_at=d,t.user_id=o;try{const r=`https://hyte24.northeurope.cloudapp.azure.com/api/entries/hrv/${o}`,u={method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},body:JSON.stringify(t)};if(!(await fetch(r,u)).ok)throw new Error("Failed to add HRV Measurement");g.reset(),s("HRV measurement added successfully!")}catch(r){console.error("Error adding HRV measurement:",r.message),s("Failed to add HRM measurement. Please try again.")}}const S=document.querySelector("#fetch-data");S.addEventListener("click",m);async function m(){const o=`https://hyte24.northeurope.cloudapp.azure.com/api/entries/hrv/${localStorage.getItem("user_id")}`,t={method:"GET",headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}};p(o,t).then(d=>{L(d)})}function L(n){console.log(n);const o=document.querySelector(".tbody");o.innerHTML="",n.forEach(e=>{console.log(e.measurement_date,e.time_of_day,e.hrv_value,e.notes);const t=document.createElement("tr"),d=new Date(e.measurement_date).toLocaleDateString("fi-FI"),r=document.createElement("td");r.innerText=d;const a=document.createElement("td");a.innerText=e.time_of_day;const u=document.createElement("td");u.innerText=e.hrv_value;const h=document.createElement("td");h.innerText=e.notes;const y=document.createElement("td"),i=document.createElement("button");i.className="del",i.setAttribute("hrv_id",e.hrv_id),i.innerText="Delete",y.appendChild(i),i.addEventListener("click",E);const v=document.createElement("td"),c=document.createElement("button");c.className="edit",c.setAttribute("hrv-id",e.hrv_id),c.setAttribute("data-hrv-id",e.hrv_id),c.innerText="Edit",c.addEventListener("click",I=>f(I,n)),v.appendChild(c),t.appendChild(r),t.appendChild(a),t.appendChild(u),t.appendChild(h),t.appendChild(y),t.appendChild(v),o.appendChild(t)}),document.querySelectorAll(".del").forEach(e=>e.addEventListener("click",E)),document.querySelectorAll(".edit").forEach(e=>e.addEventListener("click",t=>f(t,n)))}function f(n,o){const e=parseInt(n.target.dataset.hrvId,10);console.log("HRV ID:",e);const t=o.find(d=>d.hrv_id===e);document.getElementById("edit-entry-id").value=e,document.getElementById("edit-date").value=t.measurement_date,document.getElementById("edit-time-of-day").value=t.time_of_day,document.getElementById("edit-hrv-value").value=t.hrv_value,document.getElementById("edit-notes").value=t.notes,l.style.display="block"}_.addEventListener("submit",async n=>{n.preventDefault();const o=new FormData(n.target),e=o.get("edit-entry-id");console.log("FormData:",o);const t=`https://hyte24.northeurope.cloudapp.azure.com/api/entries/hrv/${e}`,r={method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`},body:JSON.stringify({measurement_date:o.get("edit-date"),time_of_day:o.get("edit-time-of-day"),hrv_value:o.get("edit-hrv-value"),notes:o.get("edit-notes")})};p(t,r).then(()=>{l.style.display="none",s("HRV measurement updated!"),m()})});async function E(n){console.log(n);const o=n.target.attributes.hrv_id.value;console.log(o);const e=`https://hyte24.northeurope.cloudapp.azure.com/api/entries/hrv/${o}`,d={method:"DELETE",headers:{Authorization:"Bearer: "+localStorage.getItem("token")}};confirm("Are you sure you want to delete HRV?")&&p(e,d).then(a=>{console.log(a),s("HRV measurement deleted!"),m()})}document.getElementById("fetch-data").addEventListener("click",m);document.addEventListener("DOMContentLoaded",function(){document.querySelector(".logout a").addEventListener("click",function(o){o.preventDefault(),s("Logging out"),localStorage.removeItem("user_id"),localStorage.removeItem("token"),setTimeout(()=>{window.location.href="login.html"},2e3)})});
