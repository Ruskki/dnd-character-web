let lvl

const will_input = document.getElementById("will-input")
const res_input = document.getElementById("res-input")
const might_input = document.getElementById("might-input")
const force_input = document.getElementById("force-input")
const poise_input = document.getElementById("poise-input")
const charge_input = document.getElementById("charge-input")
const ram_input = document.getElementById("ram-input")
const charge_total = document.getElementById("charge-total")
const ram_total = document.getElementById("ram-total")

function update_total(){
  charge_total.innerText = Number(charge_input.value) + Number(lvl) 
  ram_total.innerText = Number(ram_input.value) + Number(lvl) 
}

async function load_stats(){
  fetch("http://localhost:3000/stats/get_lvl", {method: "GET"}).then(async resp => {
    if (!resp.ok){ console.error("upsie :(")}
    lvl = await resp.text()
  })
  fetch("http://localhost:3000/stats/get_will", {method: "GET"}).then(async resp => {
    if (!resp.ok){ console.error("upsie :(")}
    will_input.value = await resp.text()
  })
  fetch("http://localhost:3000/stats/get_res", {method: "GET"}).then(async resp => {
    if (!resp.ok){ console.error("upsie :(")}
    res_input.value = await resp.text()
  })
  fetch("http://localhost:3000/stats/get_might", {method: "GET"}).then(async resp => {
    if (!resp.ok){ console.error("upsie :(")}
    might_input.value = await resp.text()
  })
  fetch("http://localhost:3000/stats/get_poise", {method: "GET"}).then(async resp => {
    if (!resp.ok){ console.error("upsie :(")}
    poise_input.value = await resp.text()
  })
  fetch("http://localhost:3000/stats/get_force", {method: "GET"}).then(async resp => {
    if (!resp.ok){ console.error("upsie :(")}
    force_input.value = await resp.text()
  })
  fetch("http://localhost:3000/stats/get_charge", {method: "GET"}).then(async resp => {
    if (!resp.ok){ console.error("upsie :(")}
    charge_input.value = await resp.text()
    update_total()
  })

  fetch("http://localhost:3000/stats/get_ram", {method: "GET"}).then(async resp => {
    if (!resp.ok){ console.error("upsie :(")}
    ram_input.value = await resp.text()
    update_total()
  })
}

load_stats()

will_input.addEventListener("keypress", (event) => {
  if (event.key === "Enter"){
    fetch("http://localhost:3000/stats/set_will", {method: "POST", body: will_input.value}).then(async resp => {
      if (!resp.ok){ console.error("upsie :(")}
      will_input.value = await resp.text()
    })
  }
})

res_input.addEventListener("keypress", (event) => {
  if (event.key === "Enter"){
    fetch("http://localhost:3000/stats/set_res", {method: "POST", body: res_input.value}).then(async resp => {
      if (!resp.ok){ console.error("upsie :(")}
      res_input.value = await resp.text()
    })
  }
})

force_input.addEventListener("keypress", (event) => {
  if (event.key === "Enter"){
    fetch("http://localhost:3000/stats/set_force", {method: "POST", body: force_input.value}).then(async resp => {
      if (!resp.ok){ console.error("upsie :(")}
      force_input.value = await resp.text()
    })
  }
})

poise_input.addEventListener("keypress", (event) => {
  if (event.key === "Enter"){
    fetch("http://localhost:3000/stats/set_poise", {method: "POST", body: poise_input.value}).then(async resp => {
      if (!resp.ok){ console.error("upsie :(")}
      poise_input.value = await resp.text()
    })
  }
})

might_input.addEventListener("keypress", (event) => {
  if (event.key === "Enter"){
    fetch("http://localhost:3000/stats/set_might", {method: "POST", body: might_input.value}).then(async resp => {
      if (!resp.ok){ console.error("upsie :(")}
      might_input.value = await resp.text()
    })
  }
})

charge_input.addEventListener("keypress", (event) => {
  if (event.key === "Enter"){
    fetch("http://localhost:3000/stats/set_charge", {method: "POST", body: charge_input.value}).then(async resp => {
      if (!resp.ok){ console.error("upsie :(")}
      charge_input.value = await resp.text()
    })
  }
  update_total()
})

ram_input.addEventListener("keypress", (event) => {
  if (event.key === "Enter"){
    fetch("http://localhost:3000/stats/set_ram", {method: "POST", body: ram_input.value}).then(async resp => {
      if (!resp.ok){ console.error("upsie :(")}
      ram_input.value = await resp.text()
    })
  }
  update_total()
})

document.getElementById("spell1").addEventListener("click", spell_1)
function spell_1(self, event){
  const dmg = Math.ceil(Number(charge_total.innerText)  * (3 / 4))
  alert("The damage is: " + dmg)
}

document.getElementById("spell2").addEventListener("click", spell_2)
function spell_2(self, event){
  const dmg = Math.ceil((Number(charge_total.innerText) + Number(ram_total.innerText)) / 2)
  alert("The result is: " + dmg)
}


