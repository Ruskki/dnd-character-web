let lvl

const will_input = document.getElementById("will-input")
const res_input = document.getElementById("res-input")
const might_input = document.getElementById("might-input")
const force_input = document.getElementById("force-input")
const poise_input = document.getElementById("poise-input")
const charge_input = document.getElementById("charge-input") // THIS IS TALENT
const ram_input = document.getElementById("ram-input") // THIS IS VESSEL

//TODO: Change charge to talent and ram to vessel

// If you have something modifying the final value of your stats,
// this function is in charge of updating the value in real time!!!
// call this function AFTER each fetch function of the stat and AFTER
// each event listener

/*
function update_total(){
  charge_total.innerText = Number(charge_input.value) + Number(lvl) 
  ram_total.innerText = Number(ram_input.value) + Number(lvl) 
}
*/ 

async function load_stats(){
  fetch("http://localhost:3000/stats/get_lvl", {method: "GET"}).then(async resp => {
    if (!resp.ok){ console.error("upsie :(")}
    lvl = await resp.text()
    // example of updating will if you're modifying the value 
    //update total
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
  })

  fetch("http://localhost:3000/stats/get_ram", {method: "GET"}).then(async resp => {
    if (!resp.ok){ console.error("upsie :(")}
    ram_input.value = await resp.text()
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
  // example of updating will 
  // update_total()
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
})

ram_input.addEventListener("keypress", (event) => {
  if (event.key === "Enter"){
    fetch("http://localhost:3000/stats/set_ram", {method: "POST", body: ram_input.value}).then(async resp => {
      if (!resp.ok){ console.error("upsie :(")}
      ram_input.value = await resp.text()
    })
  }
})

// SPELL CODE HERE
// These are some example spells that you can use/modify 

document.getElementById("spell1").addEventListener("click", spell_1)
function spell_1(self, event){
  // This is the formula that each spell uses. Make sure that you do
  // Number(stat_input.innerText) if you want the number of that stat
  const dmg = Math.ceil(Number(charge_total.innerText)  * (3 / 4))
  alert("The damage is: " + dmg)
}

document.getElementById("spell2").addEventListener("click", spell_2)
function spell_2(self, event){
  const dmg = Math.ceil((Number(charge_total.innerText) + Number(ram_total.innerText)) / 2)
  alert("The result is: " + dmg)
}


