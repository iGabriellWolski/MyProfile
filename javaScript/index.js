const sections = document.querySelectorAll(".js-anima-scroll");
const windowMetade = window.innerHeight * 0.6;

function animaScroll() {
  sections.forEach((sessao) => {
    const sectionTop = sessao.getBoundingClientRect().top - windowMetade;
    if (sectionTop < 0) {
      sessao.classList.add("ativo");
    } else {
      sessao.classList.remove("ativo");
    }
  });
}

animaScroll();

window.addEventListener("scroll", animaScroll);

const menuLinks = document.querySelectorAll(".js-link_menu");

function linkAtivo() {
  menuLinks.forEach((link) => {
    link.classList.remove("ativo");
  });
  this.classList.add("ativo");
}

menuLinks.forEach((link) => {
  link.addEventListener("click", linkAtivo);
});
