const e=document.querySelector(".feedback-form");let t={};e.addEventListener("input",_.throttle((function(e){t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),e.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),t={}})),function(){try{const a=localStorage.getItem("feedback-form-state");a&&(t=JSON.parse(a),Object.entries(t).forEach((([t,a])=>{e[t].value=a})))}catch(e){console.log(e.message)}}();
//# sourceMappingURL=03-feedback.2c162bf2.js.map