var t=document.querySelectorAll("span.population"),e=document.querySelector("span.total-population"),n=document.querySelector("span.average-population"),o=0;t.forEach(function(t){o+=Number(t.textContent.replaceAll(",",""))});var a=o/t.length;e.textContent=o.toLocaleString("en-US"),n.textContent=a.toLocaleString("en-US");
//# sourceMappingURL=index.ce4b3f2e.js.map
