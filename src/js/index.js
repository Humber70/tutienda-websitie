import productos from "./db.json" assert {type: "json"}

document.addEventListener('DOMContentLoaded', () => {
    getProductos();
    footerSocial();
    
})
const d = document;


const $listProduct = d.getElementById('list-product');
const $template = d.getElementById('template').content;
const $fragment = d.createDocumentFragment();
const $list = d.getElementById('list-product')

//elementos tempplate
const image = $template.querySelector("img");
const h2 = $template.querySelector('h2');
const h3 = $template.querySelector('h2');
const button =  $template.querySelector("button");
const parrafo = $template.querySelector('p');

function mouseIn (e) {
    e.preventDefault();
    
    if(e.target.classList.contains("pa")) {
        e.target.classList.toggle("show")
    }

}

$list.addEventListener('click', mouseIn)

function getProductos () {
    productos.forEach( (element, i) => {
        let {id, name, price, description, url} = element;
        
        // $card.setAttribute("id", i)
        image.setAttribute("src", url);
        image.setAttribute("alt", name);
        h2.textContent = name;
        h3.textContent = price;
        parrafo.textContent = description
        
        button.textContent = "agregar al carro";
        
        const $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
        
    })
    
    $listProduct.appendChild($fragment);   
    
}

const $redes = d.querySelector(".redes")
const $icon_redes = $redes.querySelectorAll("i")
const $icon_red = [...$icon_redes]

//boton
const $btnIfo = d.getElementById("btn-info")
//parent
const $footer = d.querySelector(".footer");
//brother
const $btnIfo_icon = $btnIfo.firstElementChild.nextElementSibling;

const $footer_info = $footer.firstElementChild;


function moreInfo () {

    $footer_info.classList.toggle("active-btn")
    $btnIfo_icon.classList.toggle("icon-reverse")
}

$btnIfo.addEventListener("click", moreInfo)

function footerSocial () {
    for( const i of $icon_red) {
        if(window.screen.width < 420) {
            i.textContent = "";
        }
    }
}
window.addEventListener("resize", footerSocial)


 


    
    
    