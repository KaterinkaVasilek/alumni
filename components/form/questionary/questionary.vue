<script>
import './questionary.scss';

export default {
  name: 'Questionary',
  props: ['places', 'years'],
  data() {
    return {
      form: {
        name: '',
        surname: '',
        patronymic: '',
        email: '',
        phone: '',
        dob: '',
        uid_year: '',
        year: '',
        uid_point: '',
        point: '',
        otherPoint: '',
        work: '',
        position: '',
        consent: false,
        agreement: false,
      },
      isFormValid: false,
    };
  },
  methods: {
    async onSubmit() {
      const isValid = await this.$refs.questionary.validate();
      const yearsInput = document.querySelector('#year');
      const pointsInput = document.querySelector('#point');

      const formData = {
        surname: this.form.surname,
        name: this.form.name,
        patronymic: this.form.patronymic,
        email: this.form.email,
        phone: this.form.phone,
        dob: this.form.dob,
        uid_year: this.form.year,
        year: yearsInput.value,
        uid_point: this.form.point,
        point: pointsInput.value,
        another: this.form.otherPoint,
        work: this.form.work,
        position: this.form.position,
        agreement: this.form.agreement,
        consent: this.form.consent
      }

      if (this.form.otherPoint.length > 0) {
        delete formData.point
      } else {
        delete formData.another
      }

      if (isValid) {
        try {
          await this.$api.form.alumni_f3(formData);
          this.$modal.show('modal-success');
          this.$refs.questionary.reset();
        } catch (e) {
          console.error(`Ошибка отправки формы questionary ${e}`);
        }
      }
    },
    onChange() {
      if (this.form.point === 'd4c6f0da-7341-11ee-b2fc-6cfe5430e420') this.form.otherPoint = ''
    },
  },
}
</script>

<template>
  <div class="questionary r-container r-container--768">
    <v-form class="questionary__form" ref="questionary" v-model="isFormValid" @submit.prevent="onSubmit">
      <div class="field questionary__wide">
        <label for="surname" class="field__label">Фамилия<span class="field__star">*</span></label>
        <v-text-field id="surname" v-model="form.surname" variant="outlined" :rules="[$rules.required]"></v-text-field>
      </div>
      <div class="field">
        <label for="name" class="field__label">Имя<span class="field__star">*</span></label>
        <v-text-field id="name" v-model="form.name" variant="outlined" :rules="[$rules.required]"></v-text-field>
      </div>
      <div class="field">
        <label for="patronymic" class="field__label">Отчество<span class="field__star">*</span></label>
        <v-text-field id="patronymic" v-model="form.patronymic" variant="outlined" :rules="[$rules.required]"></v-text-field>
      </div>
      <div class="field">
        <label for="email" class="field__label">E-mail<span class="field__star">*</span></label>
        <v-text-field id="email" v-model="form.email" variant="outlined" :rules="[$rules.required, $rules.email]"></v-text-field>
      </div>
      <div class="field">
        <label for="phone" class="field__label">Телефон</label>
        <v-text-field id="phone" v-mask="'+7 (###) ###-##-##'" v-model="form.phone" variant="outlined"></v-text-field>
      </div>
      <div class="field">
        <label for="dob" class="field__label">Дата рождения</label>
        <v-text-field id="dob" v-model="form.dob" v-mask="'##.##.####'" :rules="[$rules.dob]" variant="outlined" placeholder="01.12.2000"></v-text-field>
      </div>
      <div class="field field--autocomplete">
        <label for="year" class="field__label">Год окончания Академии<span class="field__star">*</span></label>
        <v-app>
          <v-autocomplete
            id="year"
            :items="years"
            v-model="form.year"
            :rules="[$rules.required]"
            placeholder="Выберите год..."
            return-objects
            item-text="value"
            item-value="uid"
          >
          <template v-slot:no-data>
            <p class="field__no-found-text">Не найдено</p>
          </template>
          </v-autocomplete>
        </v-app>
      </div>
      <div class="field field--autocomplete questionary__wide">
        <label for="point" class="field__label">Какое структурное подразделение вы заканчивали в Президентской академии?<span class="field__star">*</span> <br />(Если институтов было несколько, укажите последний)</label>
        <v-app>
          <v-autocomplete
            id="point"
            :items="places"
            v-model="form.point"
            :rules="[$rules.required]"
            @change="onChange"
            placeholder="Выберите структурное подразделение..."
            attach
            item-text="value"
            item-value="uid"
          >
          <template v-slot:no-data>
            <p class="listbox__no-found-text">Не найдено</p>
          </template>
          </v-autocomplete>
        </v-app>
      </div>
      <div v-if="form.point === 'd4c6f0da-7341-11ee-b2fc-6cfe5430e420'" class="field questionary__wide">
        <v-text-field
        id="otherPoint"
        v-model="form.otherPoint"
        :rules="[$rules.required]"
        placeholder="Введите подразделение, в котором учились..."
        variant="outlined"
        >
        </v-text-field>
      </div>
      <div class="field">
        <label for="work" class="field__label">Место работы</label>
        <v-text-field id="work" v-model="form.work" variant="outlined"></v-text-field>
      </div>
      <div class="field">
        <label for="position" class="field__label">Должность</label>
        <v-text-field id="position" v-model="form.position" variant="outlined"></v-text-field>
      </div>
      <div class="field questionary__wide">
        <v-checkbox v-model="form.consent" :rules="[$rules.required]">
          <template v-slot:label>
            <div>
              Я выражаю свое
                <a
                  class="field__link"
                  target="_blank"
                  href="/agreement-4.pdf"
                  @click.stop
                >
                  согласие
                </a>
              на обработку персональных данных.
            </div>
          </template>
        </v-checkbox>
      </div>
      <div class="field questionary__wide">
        <v-checkbox v-model="form.agreement" :rules="[$rules.required]">
          <template v-slot:label>
            <div>
              Я принимаю условия
                <a
                  class="field__link"
                  target="_blank"
                  href="/agreement-2.pdf"
                  @click.stop
                >
                  пользовательского соглашения
                </a>
              и подтверждаю, что не состою в реестре иноагентов.
            </div>
          </template>
        </v-checkbox>
      </div>
      <button class="r-btn questionary__submit questionary__wide" type="submit" :disabled="!isFormValid">Отправить</button>
    </v-form>
  </div>
</template>
