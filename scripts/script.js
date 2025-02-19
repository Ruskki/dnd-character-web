document.getElementById("button1").addEventListener("click", clicked)
const res = document.getElementById("res_form")
const atk = document.getElementById("atk_form")

function clicked(self, event){
  const dmg = Math.ceil(atk.value - (res.value - atk.value * ( 1 - (50/100))))
  // const dmg = Math.ceil(atk.value - ((res.value / atk.value) * 0.5))
  alert(dmg)
}

