const productos = [
    {
        id:1,
        name: "Mochila",
        price: 2011,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum distinctio magnam omnis eligendi quis ipsa voluptates maxime nesciunt illum perferendis? Tenetur eos esse eaque fugiat rem quaerat delectus, minus voluptates!",
        url: "https://filaar.vtexassets.com/arquivos/ids/6313056-800-auto?v=638023193574800000&width=800&height=auto&aspect=true"
    },
    {
        id:2,
        name: "Audifonos",
        price: 3444,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum distinctio magnam omnis eligendi quis ipsa voluptates maxime nesciunt illum perferendis? Tenetur eos esse eaque fugiat rem quaerat delectus, minus voluptates!",
        url: "https://www.sony.com.ar/image/b789488955522f13ffb4778bd08465c6?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"
    },
    {
        id:3,
        name: "Notebook HP 14-cf2531la",
        price: 122000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum distinctio magnam omnis eligendi quis ipsa voluptates maxime nesciunt illum perferendis? Tenetur eos esse eaque fugiat rem quaerat delectus, minus voluptates!",
        url: "https://ar-media.hptiendaenlinea.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/4/8/482T7LA-1_T1665159437.png"
    },
    {
        id:4,
        name: "Mochila",
        price: 3212,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum distinctio magnam omnis eligendi quis ipsa voluptates maxime nesciunt illum perferendis? Tenetur eos esse eaque fugiat rem quaerat delectus, minus voluptates!",
        url: "https://filaar.vtexassets.com/arquivos/ids/6313056-800-auto?v=638023193574800000&width=800&height=auto&aspect=true"
    },
    {
        id:5,
        name: "Mochila",
        price: 3212,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum distinctio magnam omnis eligendi quis ipsa voluptates maxime nesciunt illum perferendis? Tenetur eos esse eaque fugiat rem quaerat delectus, minus voluptates!",
        url: "https://filaar.vtexassets.com/arquivos/ids/6313056-800-auto?v=638023193574800000&width=800&height=auto&aspect=true"
    },
    {
        id:6,
        name: "Mochila",
        price: 3212,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum distinctio magnam omnis eligendi quis ipsa voluptates maxime nesciunt illum perferendis? Tenetur eos esse eaque fugiat rem quaerat delectus, minus voluptates!",
        url: "https://filaar.vtexassets.com/arquivos/ids/6313056-800-auto?v=638023193574800000&width=800&height=auto&aspect=true"
    }

    
]





 const $header = document.getElementById('data-header')
 const $main = document.getElementById("data-main")


//Scroll
 window.addEventListener('scroll', (e) => {

    const data = $main.getBoundingClientRect()
    console.log(data.top)
    if(data.top < 115) {
        $header.style.boxShadow = "0px 0px 10px 0px gray";
        $header.style.height = "70px";
    }else {
        $header.style.boxShadow = "none";
        $header.style.height = "auto";
    } 


 })


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


