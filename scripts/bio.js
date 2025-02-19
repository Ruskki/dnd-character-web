const total_exp_input = document.getElementById("total-exp-input")
const lvl_input = document.getElementById("lvl-input")
const exp_input = document.getElementById("exp-input")

async function load_stats(){
  fetch("http://localhost:3000/stats/get_total_exp", {method: "GET"}).then(async resp => {
    if (!resp.ok){ console.error("upsie :(")}
    total_exp_input.value = await resp.text()
  })
  fetch("http://localhost:3000/stats/get_lvl", {method: "GET"}).then(async resp => {
    if (!resp.ok){ console.error("upsie :(")}
    lvl_input.value = await resp.text()
  })
  fetch("http://localhost:3000/stats/get_exp", {method: "GET"}).then(async resp => {
    if (!resp.ok){ console.error("upsie :(")}
    exp_input.value = await resp.text()
  })
}
load_stats()

total_exp_input.addEventListener("keypress", (event) => {
  if (event.key === "Enter"){
    fetch("http://localhost:3000/stats/set_total_exp", {method: "POST", body: total_exp_input.value}).then(async resp => {
      if (!resp.ok){ console.error("upsie :(")}
      total_exp_input.value = await resp.text()
    })
  }
})

lvl_input.addEventListener("keypress", (event) => {
  if (event.key === "Enter"){
    fetch("http://localhost:3000/stats/set_lvl", {method: "POST", body: lvl_input.value}).then(async resp => {
      if (!resp.ok){ console.error("upsie :(")}
      lvl_input.value = await resp.text()
    })
  }
})

exp_input.addEventListener("keypress", (event) => {
  if (event.key === "Enter"){
    fetch("http://localhost:3000/stats/set_exp", {method: "POST", body: exp_input.value}).then(async resp => {
      if (!resp.ok){ console.error("upsie :(")}
      exp_input.value = await resp.text()
    })
  }
})