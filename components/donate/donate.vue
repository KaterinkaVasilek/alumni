<template>
  <div class="donate">
    <div class="r-container">
      <div class="donate__inner">
        <div class="donate__content">
          <div class="donate__title title title--3">{{ title }}</div>
          <div class="donate__description" v-html="description"></div>
          <div class="donate__images">
            <div class="donate__large" ref="animate-donate-img-large">
              <picture>
                <img :src="imgLarge" alt="donate-img-large" />
              </picture>
            </div>
            <div class="donate__small" ref="animate-donate-img-small">
              <picture>
                <img :src="imgSmall" alt="donate-img-small" />
                <icon-star class="donate__small-star" />
              </picture>
            </div>
          </div>
        </div>
        <v-form class="donate__form" ref="donate" @submit="submit">
          <div class="donate__form-list">
            <!-- <div class="field filed--list">
              <div class="field__list field__list--simple">
                <v-radio-group v-model="form.type">
                  <v-radio
                    class="field__list-item"
                    v-if="false"
                    label="Ежемесячное пожертвование"
                    value="month"
                  ></v-radio>
                  <v-radio
                    class="field__list-item"
                    checked
                    label="Разовое пожертвование"
                    value="once"
                  ></v-radio>
                </v-radio-group>
              </div>
            </div> -->
            <div class="field filed--list" v-if="false">
              <div class="field__label">Выберите способ оплаты:</div>
              <div class="field__list field__list--medium">
                <v-radio-group v-model="form.method">
                  <v-radio
                    class="field__list-item"
                    label="Банковской картой"
                    value="card"
                  ></v-radio>
                  <icon-banks class="field__banks-mobile" />
                  <v-radio
                    class="field__list-item"
                    label="СБП"
                    value="sbp"
                  ></v-radio>
                </v-radio-group>
              </div>
            </div>
            <div class="field field--banks" v-if="false">
              <icon-banks class="field__banks" />
            </div>
            <div class="field filed--list">
              <div class="field__label">
                Выберите сумму пожертвования<span class="red">*</span>
              </div>
              <div class="field__list">
                <v-radio-group v-model="form.sum.radio" @change="onPriceClick">
                  <v-radio
                    class="field__list-item"
                    label="1000₽"
                    value="1000"
                  ></v-radio>
                  <v-radio
                    class="field__list-item"
                    label="10 000₽"
                    value="10000"
                  ></v-radio>
                  <v-radio
                    class="field__list-item"
                    label="50 000₽"
                    value="50000"
                  ></v-radio>
                  <v-text-field
                    class="field__list-item"
                    v-model.number="form.sum.text"
                    @keypress="filter($event)"
                    variant="outlined"
                    placeholder="Ваша сумма"
                  ></v-text-field>
                </v-radio-group>
                <div class="v-messages" v-if="showSumError">
                  <div class="v-messages__wrapper">
                    <div class="v-messages__message">
                      Поле обязательно для заполнения
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <div class="field__label">Имя<span class="red">*</span></div>
              <v-text-field
                v-model="form.name"
                variant="outlined"
                :rules="[$rules.required]"
              ></v-text-field>
            </div>
            <div class="field">
              <div class="field__label">Фамилия<span class="red">*</span></div>
              <v-text-field
                v-model="form.surname"
                :rules="[$rules.required]"
                variant="outlined"
              ></v-text-field>
            </div>
            <div class="field">
              <div class="field__label">E-mail<span class="red">*</span></div>
              <v-text-field
                v-model="form.email"
                variant="outlined"
                :rules="[$rules.required, $rules.email]"
              ></v-text-field>
            </div>
            <div class="field">
              <div class="field__label">Номер телефона</div>
              <v-text-field
                v-model="form.phone"
                v-mask="'+7 (###) ###-##-##'"
                @blur="blurPhone"
                variant="outlined"
              ></v-text-field>
            </div>
            <div class="field field--autocomplete">
              <div class="field__label">Проект</div>
              <v-app>
                <v-select
                  :items="formatProjectsItems"
                  :item-text="'name.format'"
                  v-model="form.project"
                >
                </v-select>
              </v-app>
            </div>
            <div class="field field--custom field--agreement">
              <v-checkbox v-model="form.agree" :rules="[$rules.required]">
                <template v-slot:label>
                  <div class="field__checkbox-label">
                    Я выражаю свое
                    <v-tooltip location="bottom">
                      <template v-slot:activator="{ props }">
                        <a
                          target="_blank"
                          href="/agreement.pdf"
                          v-bind="props"
                          class="underline"
                          @click.stop
                        >
                          согласие
                        </a>
                      </template>
                    </v-tooltip>
                    на обработку персональных данных.
                  </div>
                </template>
              </v-checkbox>
            </div>
            <div class="field field--custom field--checkbox-html field--offer">
              <v-checkbox v-model="form.offer" :rules="[$rules.required]">
                <template v-slot:label>
                  <div class="field__checkbox-label">
                    Я принимаю условия
                    <v-tooltip location="bottom">
                      <template v-slot:activator="{ props }">
                        <a
                          target="_blank"
                          href="/public_oferta.pdf"
                          v-bind="props"
                          @click.stop
                          class="underline"
                        >
                          оферты о пожертвовании
                        </a>
                      </template>
                    </v-tooltip>
                    и подтверждаю, что НЕ состою в реестре иноагентов.
                  </div>
                </template>
              </v-checkbox>
            </div>
            <div class="field field--custom field--patron">
              <v-checkbox
                v-model="form.patron"
                label="я НЕ хочу, чтобы мое имя отображалось в списке меценатов Академии в публичном пространстве"
              ></v-checkbox>
            </div>
          </div>
          <div class="donate__footer">
            <button type="submit" class="r-btn">Поддержать</button>
          </div>
        </v-form>
        <v-form
          action="https://pay.ranepa.ru/process/"
          ref="payment"
          method="POST"
          class="hidden"
        >
          <v-text-field name="amount" :value="payment.amount"></v-text-field>
          <v-text-field
            name="order_json"
            :value="payment.order_json"
          ></v-text-field>
          <v-text-field
            name="order_name"
            :value="payment.order_name"
          ></v-text-field>
          <v-text-field
            name="order_number"
            :value="payment.order_number"
          ></v-text-field>
          <v-text-field name="payment" :value="payment.payment"></v-text-field>
          <v-text-field
            name="response_api"
            :value="payment.response_api"
          ></v-text-field>
          <v-text-field
            name="response_res"
            :value="payment.response_res"
          ></v-text-field>
          <v-text-field
            name="rsponse_fail"
            :value="payment.response_fail"
          ></v-text-field>
          <v-text-field
            name="system_code"
            :value="payment.system_code"
          ></v-text-field>
          <v-text-field
            name="payer_json"
            :value="payment.payer_json"
          ></v-text-field>
          <v-text-field name="token" :value="payment.token"></v-text-field>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import "./donate.scss";
import IconStar from "@/assets/icons/star.svg?inline";
import IconBanks from "@/assets/icons/banks.svg?inline";
export default {
  name: "Donate",
  components: {
    IconStar,
    IconBanks,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    imgSmall: {
      type: String,
      default: "",
    },
    imgLarge: {
      type: String,
      default: "",
    },
    projectsItems: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    formatProjectsItems: function () {
      const arr = this.projectsItems.map((el, i) => {
        let result = { name: { default: el, format: el }, index: i };
        if (!/академии/gi.test(el)) result.name.format = el + " Академии";
        return result;
      });

      return arr;
    },
  },
  data() {
    return {
      payment: {
        amount: "",
        order_json: "",
        order_name: "",
        order_number: "",
        payment: "",
        payer_json: "",
        response_api: "",
        response_res: "",
        response_fail: "",
        system_code: "",
        token: "",
      },
      showSumError: false,
      mask: {
        phone: {
          length: 18,
        },
      },
      form: {
        type: "once",
        method: "card",
        sum: {
          radio: 0,
          text: "",
        },
        phone: "",
        name: "",
        surname: "",
        email: "",
        project: "Уставные цели Академии",
        agree: false,
        offer: false,
        patron: false,
      },
    };
  },
  mounted() {
    if (process.browser) {
      this.updProject();
      this.$updAnimate(this.$refs);
      document.addEventListener("scroll", this.updAnimate);
    }

  },
  beforeDestroy() {
    if (process.browser)
      document.removeEventListener("scroll", this.updAnimate);
  },
  methods: {
    updProject() {
      const params = new URLSearchParams(window.location.search);
      const name = params.get("project");
      const filter = this.formatProjectsItems.filter(el => el.name.default === name);
      if (name) this.form.project = filter.length ? filter[0] : name;
    },
    updAnimate() {
      this.$updAnimate(this.$refs);
    },
    blurPhone() {
      if (this.form.phone?.length < this.mask.phone.length)
        this.form.phone = "";
    },
    async submit(evt) {
      evt.preventDefault();
      const valid = await this.$refs.donate.validate();
      this.showSumError = !this.form.sum.radio && !this.form.sum.text;

      if (valid && !this.showSumError) {
        try {
          const res = await this.$api.form.alumni_f2({
            name: this.form.name,
            lastName: this.form.surname,
            inoagentFree: this.form.offer,
            showName: this.form.patron,
            email: this.form.email,
            project: this.projectsItems[this.form.project.index],
            phone: this.form.phone,
            donation: this.form.sum.text
              ? parseInt(this.form.sum.text)
              : parseInt(this.form.sum.radio),
            consent: this.form.agree,
            responseSuccess: process.env.paymentSuccessUrl,
            responseFail: process.env.paymentFailUrl,
          });
          this.$refs.donate.reset();
          this.postPayment(res);
        } catch (e) {
          console.error(`Ошибка отправки формы donate ${e}`);
        }
      }
    },
    async postPayment(data) {
      await this.updPayment(data);
      this.$refs.payment.$el.submit();
    },
    updPayment(data) {
      this.payment.amount = data.amount;
      this.payment.order_json = data.order_json;
      this.payment.order_name = data.order_name;
      this.payment.order_number = data.order_number;
      this.payment.payment = data.payment;
      this.payment.payer_json = data.payer_json;
      this.payment.response_api = data.response_api;
      this.payment.response_res = data.response_res;
      this.payment.response_fail = data.rsponse_fail;
      this.payment.system_code = data.system_code;
      this.payment.token = data.token;
    },
    filter: function (evt) {
      let expect = evt.target.value.toString() + evt.key.toString();
      this.form.sum.radio = '';

      if (!/^[-+]?[0-9]*\.?[0-9]*$/.test(expect)) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    onPriceClick: function () {
      this.form.sum.text = '';
    }
  },
};
</script>
