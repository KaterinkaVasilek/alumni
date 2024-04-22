export default ({ app }, inject) => {
  inject('updAnimate', (refs) => {
    if(refs) {
      Object.entries(refs).map(([key, val]) => {
        if(/^animate-/.test(key)) {
          if (app.$isInViewport(val)) {
            val.classList.add('animate');
          } else {
            val.classList.remove('animate');
          }
        }
      });
    }
  });
}
