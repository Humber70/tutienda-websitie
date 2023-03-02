


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