<template>
  <div class="projects">
    <div class="r-container">
      <div class="projects__inner">
        <div class="projects__list">
          <div class="projects__item" v-for="(el, i) in items" :key="i" :id="el.id" :ref="el.id">
            <div class="projects__item-images">
              <div class="projects__item-images-small" v-if="el.imgSmall">
                <picture>
                  <img :src="el.imgSmall" alt="projects-img-small" />
                  <icon-star class="projects__item-images-small-star"/>
                </picture>
              </div>
              <div class="projects__item-images-large" v-if="el.imgLarge">
                <picture>
                  <img :src="el.imgLarge" alt="projects-img-large" />
                  <icon-rounds class="projects__item-images-large-decor"/>
                </picture>
              </div>
            </div>
            <div class="projects__item-content">
              <div class="projects__item-title title title--2">{{el.name}}</div>
              <div class="projects__item-description" v-html="el.description"></div>
              <div class="projects__accordions">
                <div class="projects__accordions-item" v-for="(item, index) in el.items" :key="index">
                  <card-accordion
                    :data="{
                      title: item.name,
                      content: item.description,
                    }"
                  >
                    <template #footer>
                      <div class="card__footer-actions">
                        <div class="card__footer-action">
                          <NuxtLink :to="`/support?project=${item.name}`" class="r-btn card__btn-support">Поддержать</NuxtLink>
                        </div>
                        <div class="card__footer-action" v-if="item.isForDetail">
                          <NuxtLink :to="`/projects/${item.code}`" class="r-btn r-btn--light card__btn-detail">Подробнее</NuxtLink>
                        </div>
                      </div>
                    </template>
                  </card-accordion>
                </div>
              </div>
              <div class="projects__footer">
                <div class="projects__actions">
                  <button
                    v-tooltip="{
                      content: 'Если у Вас есть вопросы по проектам, мы готовы на них ответить',
                      classes: ['max-200']
                    }"
                    class="projects__btn projects__btn-call r-btn r-btn--light"
                    @click="$modal.show('modal-call-me')"
                  >
                    Перезвоните мне
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './projects.scss';
import IconStar from '/assets/icons/star.svg?inline';
import IconRounds from '/assets/icons/decor-rounds-2.svg?inline';
import IconDecor from '/assets/icons/decor-2.svg?inline';
export default {
  name: 'Projects',
  components: {
    IconStar,
    IconRounds,
    IconDecor,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    imgSmall: {
      type: Object,
      default: () => {},
    },
    imgLarge: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    this.$nuxt.$emit('scrollToElByParam', this.$refs);
  },
};
</script>
