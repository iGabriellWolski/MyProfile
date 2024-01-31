const sections = document.querySelectorAll(".js-anima-scroll");
const windowMetade = window.innerHeight * 0.6
    function animaScroll(){
        sections.forEach((sessao) =>{
            const sectionTop = sessao.getBoundingClientRect().top - windowMetade
            console.log(sectionTop);
            if( sectionTop < 0){
                sessao.classList.add("ativo")
            }else{
                sessao.classList.remove("ativo")
            }
        })
    }

    animaScroll()

    window.addEventListener("scroll",animaScroll);