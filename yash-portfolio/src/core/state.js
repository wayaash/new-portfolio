export const state = {
  chaos:0,
  clicks:0,
  unlocked: localStorage.getItem("sys") === "1"
}

export const initState = ()=>{
  window.addEventListener("click",()=>{
    state.clicks++;
    state.chaos += 0.05;
  })
}