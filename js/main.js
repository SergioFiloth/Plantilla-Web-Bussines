(function(){
    // Galeria con Swiper
    let swiper = new Swiper(".swiper-container", {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 10,
        // disableOnInteraction: false,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        autoplay: {
            delay: 1500,
        },
    })
    // Todas las funciones referentes al menu
    function menuToggle (){
        // Activacion y desactivacion de menu
        let buttonToogle = document.getElementById("buttonT")
        let menu = document.getElementById("menu")

        // Activación del menu con un click
        function t(){
            menu.classList.toggle("menuDB")
        }
        // Desactivacion de menu con clicks en los enlaces
        function dM(){
            menu.classList.remove("menuDB")
        }

        buttonToogle.addEventListener("click", t)
        menu.addEventListener("click", dM)
    }
    menuToggle()
}())