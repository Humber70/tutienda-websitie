const $header=document.getElementById("data-header"),$main=document.getElementById("data-main");window.addEventListener("scroll",(e=>{$main.getBoundingClientRect().top<115?($header.style.boxShadow="0px 0px 10px 0px gray",$header.style.height="70px"):($header.style.boxShadow="none",$header.style.height="auto")}));import productos from"./db.json"assert{type:"json"};document.addEventListener("DOMContentLoaded",(()=>{getProductos(),footerSocial()}));const d=document,$listProduct=d.getElementById("list-product"),$template=d.getElementById("template").content,$fragment=d.createDocumentFragment(),$list=d.getElementById("list-product"),image=$template.querySelector("img"),h2=$template.querySelector("h2"),h3=$template.querySelector("h2"),button=$template.querySelector("button"),parrafo=$template.querySelector("p");function mouseIn(e){e.preventDefault(),e.target.classList.contains("pa")&&e.target.classList.toggle("show")}function getProductos(){productos.forEach(((e,t)=>{let{id:o,name:n,price:r,description:i,url:a}=e;image.setAttribute("src",a),image.setAttribute("alt",n),h2.textContent=n,h3.textContent=r,parrafo.textContent=i,button.textContent="agregar al carro";const l=d.importNode($template,!0);$fragment.appendChild(l)})),$listProduct.appendChild($fragment)}$list.addEventListener("click",mouseIn);const $redes=d.querySelector(".redes"),$icon_redes=$redes.querySelectorAll("i"),$icon_red=[...$icon_redes],$btnIfo=d.getElementById("btn-info"),$footer=d.querySelector(".footer"),$btnIfo_icon=$btnIfo.firstElementChild.nextElementSibling,$footer_info=$footer.firstElementChild;function moreInfo(){$footer_info.classList.toggle("active-btn"),$btnIfo_icon.classList.toggle("icon-reverse")}function footerSocial(){for(const e of $icon_red)window.screen.width<420&&(e.textContent="")}$btnIfo.addEventListener("click",moreInfo),window.addEventListener("resize",footerSocial);