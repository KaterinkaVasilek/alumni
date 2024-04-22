export default ({ app }, inject) => {
  inject('isInViewport', (el) => {
    if (el) {
      const bounding = el.getBoundingClientRect();
      const height = el.offsetHeight;
      const width = el.offsetWidth;
      let result = false;

      if (bounding.top >= -height
        && bounding.left >= -width
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + width
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + height) {
        result = true;
      }

      return result;
    }
  });
}
