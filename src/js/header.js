const $header = document.getElementById("data-header");
const $main = document.getElementById("data-main");
//Scroll
const $bars = document.querySelector(".bar");
const $show_active = document.querySelector(".list");
const $paren_list = $show_active.parentElement;

//funciones
const navigator = (e) => {
  if (e.target.classList.contains("fa-bars")) {
    $show_active.classList.toggle("show-list");
    e.target.classList.toggle("bar-animation");
  }
};

const scrollHeader = (e) => {
  const data = $main.getBoundingClientRect();
  if (data.top < 115) {
    $header.style.boxShadow = "0px 0px 1px 0px #140f1b";
    $header.style.height = "70px";
    $show_active.classList.remove("show-list");
    $bars.classList.remove("bar-animation");
  } else {
    $header.style.boxShadow = "none";
    $header.style.height = "auto";
  }
};



//Events
$bars.addEventListener("click", navigator);
window.addEventListener("scroll", scrollHeader);


