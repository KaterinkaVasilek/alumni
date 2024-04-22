<template>
  <div class="feedback">
    <div class="r-container">
      <div class="feedback__inner">
        <div class="feedback__content">
          <div class="feedback__title title title--3">Остались вопросы?</div>
          <div class="feedback__description">Вы можете задать интересующий вас вопрос, и мы обязательно ответим на него</div>
          <div class="feedback__images">
            <div ref="animate-feedback-image-small" class="box-grayscale-1 feedback__image-small">
              <picture>
                <img src="/img/feedback-1.png" alt="feedback-img-small">
              </picture>
              <icon-star class="feedback__image-small-icon"/>
            </div>
            <div ref="animate-feedback-image-large" class="box-grayscale-1 feedback__image-large">
              <picture>
                <img src="/img/feedback-2.png" alt="feedback-img-large">
              </picture>
            </div>
          </div>
        </div>
        <v-form class="feedback__form" ref="feedback" v-model="isFormValid" @submit="submit">
          <div class="feedback__list">
            <div class="field">
              <div class="field__label">Имя<span class="red">*</span></div>
              <v-text-field v-model="form.name" variant="outlined" :rules="[$rules.required]"></v-text-field>
            </div>
            <div class="field">
              <div class="field__label">Фамилия</div>
              <v-text-field v-model="form.surname" variant="outlined"></v-text-field>
            </div>
            <div class="field">
              <div class="field__label">E-mail<span class="red">*</span></div>
              <v-text-field v-model="form.email" variant="outlined" :rules="[$rules.required, $rules.email]"></v-text-field>
            </div>
            <div class="field">
              <div class="field__label">Вопрос<span class="red">*</span></div>
              <v-textarea v-model="form.question" variant="outlined" :rules="[$rules.required]" placeholder="Введите ваш вопрос..."></v-textarea>
            </div>
            <div class="field field--custom field--agreement">
              <v-checkbox v-model="form.agree" :rules="[$rules.required]">
                <template v-slot:label>
                  <div class="field__checkbox-label">
                    Я выражаю свое согласие на обработку
                    <v-tooltip location="bottom">
                      <template v-slot:activator="{ props }">
                        <a
                          target="_blank"
                          href="/agreement-feedback.pdf"
                          v-bind="props"
                          class="underline"
                          @click.stop
                        >
                          персональных данных.
                        </a>
                      </template>
                    </v-tooltip>
                  </div>
                </template>
              </v-checkbox>
            </div>
          </div>
          <div class="feedback__footer">
            <button type="submit" class="r-btn" :disabled="!isFormValid">Отправить</button>
          </div>
        </v-form>
      </div>
    </div>
    <modal-success>
      <template #title>
        Спасибо!
      </template>
      <template #text>
        <p>Мы вернемся с ответом в ближайшее время.</p>
      </template>
    </modal-success>
  </div>
</template>

<script>
import './feedback.scss';
import IconStar from '@/assets/icons/star.svg?inline';
export default {
  name: 'Feedback',
  components: {
    IconStar,
  },
  data() {
    return {
      isFormValid: false,
      form: {
        name: '',
        surname: '',
        email: '',
        question: '',
        agree: false,
      },
    };
  },
  mounted() {
    if(process.browser) {
      this.$updAnimate(this.$refs);
      document.addEventListener('scroll', this.updAnimate);
    }
  },
  beforeDestroy() {
    if(process.browser) document.removeEventListener('scroll', this.updAnimate);
  },
  methods: {
    updAnimate() {
      this.$updAnimate(this.$refs);
    },
    async submit(evt) {
      evt.preventDefault();
      const valid = await this.$refs.feedback.validate();

      if(valid) {
        try {
          await this.$api.form.alumni_f1({
            name: this.form.name,
            lastName: this.form.surname,
            email: this.form.email,
            question: this.form.question,
            consent: this.form.agree,
          });
          this.$modal.show('modal-success');
          this.$refs.feedback.reset();
        } catch (e) {
          console.error(`Ошибка отправки формы feedback ${e}`);
        }
      }
    },
  },
};
</script>
