export default ({ app }, inject) => {
  inject('scrollToView', (el) => {
    if(el && window) {
      window.scroll({
        top: el.offsetTop - document.querySelector('.header').offsetHeight,
        behavior: "smooth",
      });
    }
  });
}
