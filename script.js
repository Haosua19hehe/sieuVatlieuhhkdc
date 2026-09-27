const cards=[...document.querySelectorAll(".resource-card")];
const buttons=[...document.querySelectorAll(".category")];
const input=document.getElementById("searchInput");
const count=document.getElementById("resultCount");
const empty=document.getElementById("emptyState");

let category="all";

function render(){
  const query=input.value.trim().toLowerCase();
  let visible=0;
  cards.forEach(card=>{
    const matchesCategory=category==="all"||card.dataset.category===category;
    const matchesSearch=!query||card.dataset.search.toLowerCase().includes(query)||card.innerText.toLowerCase().includes(query);
    const show=matchesCategory&&matchesSearch;
    card.style.display=show?"block":"none";
    if(show) visible++;
  });
  count.textContent=`${visible} tài nguyên`;
  empty.hidden=visible!==0;
}
buttons.forEach(button=>{
  button.addEventListener("click",()=>{
    buttons.forEach(b=>b.classList.remove("active"));
    button.classList.add("active");
    category=button.dataset.category;
    render();
  });
});
input.addEventListener("input",render);
render();
