class Stats {
  #lvl: number = 12
  get lvl(){ return this.#lvl; }
  set lvl(value){ 
    this.#lvl = value; 
    this.save_to_file()
  }

  #exp: number = 12
  get exp(){ return this.#exp; }
  set exp(value){ 
    this.#exp = value; 
    this.save_to_file()
  }

  #total_exp: number = 12
  get total_exp(){ return this.#total_exp; }
  set total_exp(value){ 
    this.#total_exp = value; 
    this.save_to_file()
  }


  #will: number = 12
  get will(){ return this.#will; }
  set will(value){ 
    this.#will = value; 
    this.save_to_file()
  }

  #res: number = 12
  get res(){ return this.#res; }
  set res(value){ 
    this.#res = value; 
    this.save_to_file()
  }
  
  #might: number = 12
  get might(){ return this.#might; }
  set might(value){ 
    this.#might = value;
    this.save_to_file() 
  }

  #force: number = 12
  get force(){ return this.#force; }
  set force(value){ 
    this.#force = value; 
    this.save_to_file()
  }

  #poise: number = 12
  get poise(){ return this.#poise; }
  set poise(value){ 
    this.#poise = value; 
    this.save_to_file()
  }

  #charge: number = 12
  get charge(){ return this.#charge; }
  set charge(value){ 
    this.#charge = value; 
    this.save_to_file()
  }

  #ram: number = 12
  get ram(){ return this.#ram; }
  set ram(value){ 
    this.#ram = value; 
    this.save_to_file()
  } 

  async read_from_file(){
    const file = await Bun.file("data.json");
    const data = await file.text().then((text) => JSON.parse(text))

    this.#exp = data.exp ?? 0;
    this.#total_exp = data.total_exp ?? 0;
    this.#lvl = data.lvl ?? 0;
    this.#will = data.will ?? 0;
    this.#res = data.res ?? 0;
    this.#might = data.might ?? 0;
    this.#force = data.force ?? 0;
    this.#poise = data.poise ?? 0;
    this.#charge = data.charge ?? 0;
    this.#ram = data.ram ?? 0;
  }

  async save_to_file(){
    const data = JSON.stringify({
      exp: this.#exp,
      total_exp: this.#total_exp,
      lvl: this.#lvl,
      will: this.#will,
      res: this.#res,
      might: this.#might,
      force: this.#force,
      poise: this.#poise,
      charge: this.#charge,
      ram: this.#ram,
    });
    await Bun.write("data.json", data);
  }

  constructor(){
    this.read_from_file()
  }
} 

const stats = new Stats()


Bun.serve({
  async fetch(req) {
    const url = new URL(req.url);
    // GET
    console.log(url.pathname)
    if (url.pathname === "/stats/get_exp") return new Response(
      stats.exp.toString(), { headers: {"Access-Control-Allow-Origin": "*"}});
    if (url.pathname === "/stats/get_total_exp") return new Response(
        stats.total_exp.toString(), { headers: {"Access-Control-Allow-Origin": "*"}});
    if (url.pathname === "/stats/get_lvl") return new Response(
      stats.lvl.toString(), { headers: {"Access-Control-Allow-Origin": "*"}});
    if (url.pathname === "/stats/get_will") return new Response(
      stats.will.toString(), { headers: {"Access-Control-Allow-Origin": "*"}});
    if (url.pathname === "/stats/get_res") return new Response(
      stats.res.toString(), { headers: {"Access-Control-Allow-Origin": "*"}});
    if (url.pathname === "/stats/get_might") return new Response(
      stats.might.toString(), { headers: {"Access-Control-Allow-Origin": "*"}});
    if (url.pathname === "/stats/get_force") return new Response(
      stats.force.toString(), { headers: {"Access-Control-Allow-Origin": "*"}});
    if (url.pathname === "/stats/get_poise") return new Response(
      stats.poise.toString(), { headers: {"Access-Control-Allow-Origin": "*"}});
    if (url.pathname === "/stats/get_charge") return new Response(
      stats.charge.toString(), { headers: {"Access-Control-Allow-Origin": "*"}});
    if (url.pathname === "/stats/get_ram") return new Response(
      stats.ram.toString(), { headers: {"Access-Control-Allow-Origin": "*"}});
    
    // SET
    if (url.pathname === "/stats/set_exp"){ 
      stats.exp =  await (req.text()).then(text => parseInt(text));
      return new Response(stats.exp.toString(), { headers: {"Access-Control-Allow-Origin": "*"}});
    }
    if (url.pathname === "/stats/set_total_exp"){ 
      stats.total_exp =  await (req.text()).then(text => parseInt(text));
      return new Response(stats.total_exp.toString(), { headers: {"Access-Control-Allow-Origin": "*"}});
    }
    if (url.pathname === "/stats/set_lvl"){ 
      stats.lvl =  await (req.text()).then(text => parseInt(text));
      return new Response(stats.lvl.toString(), { headers: {"Access-Control-Allow-Origin": "*"}});
    }
    if (url.pathname === "/stats/set_will"){ 
      stats.will =  await (req.text()).then(text => parseInt(text));
      return new Response(stats.will.toString(), { headers: {"Access-Control-Allow-Origin": "*"}});
    }
    if (url.pathname === "/stats/set_res"){
      stats.res =  await (req.text()).then(text => parseInt(text));
      return new Response(stats.res.toString(), { headers: {"Access-Control-Allow-Origin": "*"}});
    } 
    if (url.pathname === "/stats/set_might"){
      stats.might =  await (req.text()).then(text => parseInt(text));
      return new Response(stats.might.toString(), { headers: {"Access-Control-Allow-Origin": "*"}});
    } 
    if (url.pathname === "/stats/set_force"){
      stats.force =  await (req.text()).then(text => parseInt(text));
      return new Response(stats.force.toString(), { headers: {"Access-Control-Allow-Origin": "*"}});
    } 
    if (url.pathname === "/stats/set_poise"){
      stats.poise =  await (req.text()).then(text => parseInt(text));
      return new Response(stats.poise.toString(), { headers: {"Access-Control-Allow-Origin": "*"}});
    } 
    if (url.pathname === "/stats/set_charge"){
      stats.charge =  await (req.text()).then(text => parseInt(text));
      return new Response(stats.charge.toString(), { headers: {"Access-Control-Allow-Origin": "*"}});
    } 
    if (url.pathname === "/stats/set_ram"){
      stats.ram =  await (req.text()).then(text => parseInt(text));
      return new Response(stats.ram.toString(), { headers: {"Access-Control-Allow-Origin": "*"}});
    } 

    if (url.pathname === "/blog") return new Response("Blog!");
    return new Response("404!");


  },
});
