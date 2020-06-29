const pdtnamo = document.querySelector("#pdtname"); //placeholder
const btn = document.querySelector(".button"); //btn
const holdder = document.querySelector(".pdts"); //holdder
const modif = document.querySelector("#mod"); //placeholder
const btnmod = document.querySelector(".buttonmod"); //btn
const newpdt = document.querySelector("#newName"); // add new pdt
const addqunt = document.querySelector("#numberOFPdt"); //new qunatity
const typpe = document.querySelector("#typepdt"); // type of new pdt
const addbtn = document.querySelector(".addbutton"); //addbtn
const selc = document.querySelector("#selector");
let marketShop = [
  {
    name: "tomato",
    quantity: 56,
    type: "Kilo",
  },
  {
    name: "pepsi",
    quantity: 8,
    type: "Unit",
  },
  { name: "milk", quantity: 60, type: "kilo" },
  {
    name: "indomine noodles",
    quantity: 100,
    type: "Unit",
  },
  {
    name: "luxe biscuit",
    quantity: 40,
    type: "Unit",
  },
  {
    name: "egg",
    quantity: 30,
    type: "Unit",
  },
  {
    name: "Ahmad tea",
    quantity: 20,
    type: "Unit",
  },
  {
    name: "rice",
    quantity: 8,
    type: "Kilo",
  },
  {
    name: "Twinkie cake",
    quantity: 35,
    type: "Unit",
  },
  {
    name: "Lay's chips",
    quantity: 40,
    type: "Unit",
  },
];
marketShop.forEach((item) => {
  let optn = document.createElement("option");
  optn.innerHTML = item.name;
  selc.appendChild(optn);
});

function addnewpdt(name, quantity, type) {
  this.name = newpdt.value;
  name = newpdt.value;
  quantity = addqunt.value;
  type = typpe.value;
  marketShop.push({ name, quantity, type });

  const iti = document.createElement("option");
  iti.innerHTML = this.name;
  selc.appendChild(iti);

  console.log(marketShop);
}

addbtn.addEventListener("click", (e) => {
  e.stopPropagation();
  addnewpdt();
  newpdt.value = " ";
  addqunt.value = " ";
  typpe.value = " ";
});

function n() {
  // const pdts =pdtnamo.value ;
  this.pdts = pdtnamo.value;
  let pdt = String(pdts);
  for (let i = 0; i < marketShop.length; i++) {
    if (marketShop[i].name === pdt) {
      document.querySelector(
        ".pdts"
      ).innerHTML = ` quantity: ${marketShop[i].quantity}   ,,  type: ${marketShop[i].type} `;
    }
  }
}
btn.addEventListener("click", (e) => {
  e.stopPropagation();
  n();
  pdtnamo.value = "";
});

function modified() {
  let num = modif.value;
  let list = [...marketShop];
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === pdts) {
      document.querySelector(".pdts").innerHTML = ` quantity: ${(list[
        i
      ].quantity = num)}   ,,  type: ${list[i].type} `;
    } //  list[i].quantity=num ;
  }
}

btnmod.addEventListener("click", (e) => {
  e.stopPropagation();
  modified();
  modif.value = "";
});
