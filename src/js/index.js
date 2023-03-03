

// document.addEventListener('DOMContentLoaded', () => {
//     getProductos();
    
// })


const d = document;
// 
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

getProductos()


