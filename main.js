(()=>{"use strict";const t=document.getElementById("contact-tab");function e(){const e=document.createElement("div");e.className="tab__content",e.id="contact-content";const n=document.createElement("h4");n.textContent="Contact Information",e.appendChild(n),t.appendChild(e)}const n=document.getElementById("menu-tab");let o="none";(()=>{const t=document.querySelector("#content"),e=document.createElement("div");e.setAttribute("id","welcome-content");const n=document.createElement("h1");n.textContent="Welcome to my Restaurant!";const o=document.createElement("img");o.setAttribute("id","welcome-image"),o.setAttribute("src","Nightshade_2019_Frank-Lee_2018-12-14-NightShade-117.jpg");const a=document.createElement("p");a.textContent="The perfect restaurant for every occasion.: The best restaurant, no matter your mood or craving.                             We specialize in the highest-quality steaks, seafood, vegetables, appetizers, salads, and desserts on the market.                             Join our mission to create perfection and let us show you what it feels like.",e.appendChild(n),e.appendChild(o),e.appendChild(a),t.appendChild(e);const c=document.createElement("div");c.className="tabs";const d=document.createElement("div");d.setAttribute("class","tab"),d.setAttribute("id","contact-tab");const i=document.createElement("input");i.setAttribute("type","radio"),i.setAttribute("name","tabgroup"),i.setAttribute("id","tab-1");const m=document.createElement("label");m.setAttribute("for","tab-1"),m.textContent="Contact";const s=document.createElement("div");s.setAttribute("class","tab"),s.setAttribute("id","menu-tab");const r=document.createElement("input");r.setAttribute("type","radio"),r.setAttribute("name","tabgroup"),r.setAttribute("id","tab-2");const u=document.createElement("label");u.setAttribute("for","tab-2"),u.textContent="Menu!",t.appendChild(c),c.appendChild(d),d.appendChild(i),d.appendChild(m),c.appendChild(s),s.appendChild(r),s.appendChild(u),document.createElement("div").className="tab__content",document.createElement("h4").textContent="Contact Information"})(),document.getElementById("tab-1").addEventListener("click",(function(){"none"==o?e():"menu"==o&&(menuContent=document.getElementById("menu-content"),n.removeChild(menuContent),e()),o="contact"})),document.getElementById("tab-2").addEventListener("click",(function(){("none"==o||"contact"==o)&&function(){const t=document.createElement("div");t.className="tab__content",t.id="menu-content";const e=document.createElement("h4");e.textContent="Menu Information",t.appendChild(e),n.appendChild(t)}(),o="menu"}))})();