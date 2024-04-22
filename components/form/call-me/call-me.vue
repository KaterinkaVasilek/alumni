<template>
  <v-form class="form form--call-me" ref="call-me" v-model="isFormValid" @submit="submit">
    <div class="field">
      <div class="field__label">Имя и фамилия<span class="red">*</span></div>
      <v-text-field v-model="form.name" variant="outlined" :rules="[$rules.required]"></v-text-field>
    </div>
    <div class="field">
      <div class="field__label">Телефон<span class="red">*</span></div>
      <v-text-field v-model="form.phone" v-mask="'+7 (###) ###-##-##'" :rules="[$rules.required]" @blur="blurPhone" variant="outlined"></v-text-field>
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
                  href="https://www.ranepa.ru/images/docs/svedeniya_ooo/Politika_personal_dannih_02.02.2017.pdf"
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
    <div class="form__footer">
      <button type="submit" class="r-btn" :disabled="!isFormValid" >Отправить</button>
    </div>
  </v-form>
</template>

<script>
import '../form.scss';
export default {
  name: 'FormCallMe',
  data() {
    return {
      isFormValid: false,
      mask: {
        phone: {
          length: 18
        },
      },
      form: {
        name: '',
        phone: '',
        agree: false,
      },
    };
  },
  methods: {
    blurPhone() {
      if (this.form.phone.length < this.mask.phone.length) this.form.phone = '';
    },
    async submit(evt) {
      evt.preventDefault();
      const valid = await this.$refs['call-me'].validate();

      if(valid) {
        try {
          await this.$api.form.alumni_f4({
            name: this.form.name,
            phone: this.form.phone,
            consent: this.form.agree,
          });
          this.$modal.hide('modal-call-me');
          this.$modal.show('modal-success-call-me');
          this.$refs['call-me'].reset();
        } catch (e) {
          console.error(`Ошибка отправки формы call-me ${e}`);
        }
      }
    },
  },
}
</script>
