export default ({ app }, inject) => {
  inject('rules', {
    required(val) {
      if (val) return true
      return 'Поле обязательно для заполнения';
    },
    email(val) {
      return !val || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val) || 'Введите e-mail в формате example@example.ru';
    },
    dob(val) {
      if (!val) {
        return true;
      }

      if (!/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/.test(val)) {
        return 'Введите дату в формате дд.мм.гггг';
      }

      const currentDate = new Date();
      const inputDate = new Date(val.split('.').reverse().join('-'));
      if (inputDate > currentDate) {
        return 'Дата не может быть в будущем';
      }

      return true;
    }
  });
}
