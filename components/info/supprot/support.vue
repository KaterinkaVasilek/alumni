<template>
  <div class="info info--support">
      <div class="info__decor">
        <icon-decor/>
      </div>
      <div class="r-container">
        <div class="info__inner">
          <div class="info__title title title--3"> <span class="italic">Информационная</span> поддержка</div>
          <div class="info__list">
            <div class="info__list-item">
              <div class="info__list-item-text">Если у вас есть возможность поделиться с ними информацией о Клубе, его событиях и новостях, сделайте это в социальных сетях, в мессенджерах и других медиа.</div>
              <div class="info__social">
                <div class="info__social-title">Поделиться</div>
                <div class="info__social-list">
                  <SocialList
                    :vkSrc="vk"
                    :telegramSrc="telegram"
                  />
                </div>
              </div>
            </div>
            <div class="info__list-item">
              <div class="info__list-item-text">Если вы СМИ, и вашим аудиториям интересна жизнь выпускников Президентской академии, свяжитесь с нами!</div>
              <div class="info__contacts">
                <card-simple7
                  :data="{
                    src: '/img/team-1.png',
                    name: 'Начинкина Юлия Сергеевна',
                    post: 'Руководитель клуба',
                    phone: '+7 (910) 407-76-24',
                    mail: 'nachnkina-ys@ranepa.ru',
                  }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import './support.scss';

import IconDecor from "@/assets/icons/decor-2.svg?inline";
export default {
  name: 'InfoSupport',
  components: {
    IconDecor,
  },
  props: {
    vk: {
      type: String,
      default: '',
    },
    telegram: {
      type: String,
      default: '',
    },
  },
};
</script>
