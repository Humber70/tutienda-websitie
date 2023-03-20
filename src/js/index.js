import productos from "./db.json" assert { type: "json" };

document.addEventListener("DOMContentLoaded", () => {
  getProductos();
  footerSocial();
});
const d = document;
const $listProduct = d.getElementById("list-product");
const $template = d.getElementById("template").content;
const $fragment = d.createDocumentFragment();
const $list = d.getElementById("list-product");

//elementos template
const image = $template.querySelector("img");
const h3 = $template.querySelector("h3");
const h2 = $template.querySelector("h2");
const button = $template.querySelector("button");
const parrafo = $template.querySelector("p");

const $redes = d.querySelector(".redes");
const $icon_redes = $redes.querySelectorAll("i");
const $icon_red = [...$icon_redes];
//boton
const $btnIfo = d.getElementById("btn-info");
//parent
const $footer = d.querySelector(".footer");
//brother
const $btnIfo_icon = $btnIfo.firstElementChild.nextElementSibling;
const $footer_info = $footer.firstElementChild;

$list.addEventListener("click", mouseIn);
$btnIfo.addEventListener("click", moreInfo);
window.addEventListener("resize", footerSocial);

//functions
function mouseIn(e) {
  e.preventDefault();

  if (e.target.classList.contains("pa")) {
    e.target.classList.toggle("show");
  }
}
function moreInfo() {
  $footer_info.classList.toggle("active-btn");
  $btnIfo_icon.classList.toggle("icon-reverse");
}
function footerSocial() {
  for (const i of $icon_red) {
    if (window.screen.width < 420) {
      i.textContent = "";
    }
  }
}

function getProductos(name, url, description, price) {
  image.setAttribute("src", url);
  image.setAttribute("alt", name);
  h2.textContent = price;
  h3.textContent = name;
  parrafo.textContent = description;
  button.textContent = "agregar al carro";

  const $clone = d.importNode($template, true);
  $fragment.appendChild($clone);
}

productos.forEach((element) => {
  let { name, url, description, price } = element;
  getProductos(name, url, description, price);
  $listProduct.appendChild($fragment);
});
