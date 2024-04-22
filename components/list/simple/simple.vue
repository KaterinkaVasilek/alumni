<template>
  <div class="list list--simple" :class="classes">
    <template v-if="type === 'causes'">
      <div class="list__inner">
        <div class="list__item" :style="`width: calc(${calcWidth}% - ${spaceBetween}px)`">
          <card-simple-5
            :data="{
              title: items.filter(el => el.code === 'screen-3-item-1')[0].text,
              text: items.filter(el => el.code === 'screen-3-item-2')[0].text,
            }"
          />
        </div>
        <div class="list__item" :style="`width: calc(${calcWidth}% - ${spaceBetween}px)`">
          <card-simple-5
            :data="{
              title: items.filter(el => el.code === 'screen-3-item-3')[0].text,
              text: items.filter(el => el.code === 'screen-3-item-4')[0].text,
            }"
          />
        </div>
        <div class="list__item" :style="`width: calc(${calcWidth}% - ${spaceBetween}px)`">
          <card-simple-5
            :data="{
              title: items.filter(el => el.code === 'screen-3-item-5')[0].text,
              text: items.filter(el => el.code === 'screen-3-item-6')[0].text,
            }"
          />
        </div>
        <div class="list__item" :style="`width: calc(${calcWidth}% - ${spaceBetween}px)`">
          <card-simple-5
            :data="{
              title: items.filter(el => el.code === 'screen-3-item-7')[0].text,
              text: items.filter(el => el.code === 'screen-3-item-8')[0].text,
            }"
          />
        </div>
        <div class="list__item" :style="`width: calc(${calcWidth}% - ${spaceBetween}px)`">
          <card-simple-5
            :data="{
              title: items.filter(el => el.code === 'screen-3-item-9')[0].text,
              text: items.filter(el => el.code === 'screen-3-item-10')[0].text,
            }"
          />
        </div>
        <slot/>
      </div>
    </template>
    <template v-else>
      <div class="list__inner">
        <template v-for="(item, i) in items">
          <div class="list__item" :style="`width: calc(${calcWidth}% - ${spaceBetween}px)`" :key="i" v-if="max ? i < max : true">
            <template v-if="itemType === 'simple-2'">
              <card-simple-2
                :data="item"
              />
            </template>
            <template v-else-if="itemType === 'simple-3'">
              <card-simple-3
                :data="item"
              />
            </template>
            <template v-else-if="itemType === 'simple-4'">
              <card-simple-4
                :data="item"
              />
            </template>
            <template v-else-if="itemType === 'simple-5'">
              <card-simple-5
                :data="item"
              />
            </template>
            <template v-else-if="itemType === 'team'">
              <card-simple-4
                :data="{
                  src: item.photo,
                  post: item.position,
                  name: item.name,
                  mail: item.email,
                  phone: {
                    text: item.phone,
                    link: item.phoneLink,
                  },
                }"
              />
            </template>
            <template v-else-if="itemType === 'council'">
              <card-simple-3
                :data="{
                  name: `${item.name}<br/> ${item.firstName}`,
                  src: {
                    default: item.photoDesktop,
                    tablet: item.photoTablet,
                    mobile: item.photoPhone,
                  },
                  alt: item.photoDesktopDescription,
                  post: item.position,
                }"
              />
            </template>
            <template v-else-if="itemType === 'accordion'">
              <card-accordion
                :data="item"
              />
            </template>
            <template v-else-if="itemType === 'question'">
              <card-question
                :data="item"
              />
            </template>
            <template v-else-if="itemType === 'news'">
              <card-simple-2
                :data="{
                  alt: item.previewPictureDescription,
                  src: item.previewPicture,
                  url: `/news/${item.code}`,
                  date: item.datePublishedHuman || '',
                  name: item.name,
                  description: item.previewText,
                }"
              />
            </template>
            <template v-else-if="itemType === 'events'">
              <card-simple
                :data="{
                  alt: item.previewPictureDescription,
                  src: item.previewPicture,
                  date: formatDate(item.datePublishedHuman) || '',
                  name: item.name,
                  url: `/events/${item.code}`,
                }"
              />
            </template>
            <template v-else>
              <card-simple
                :data="item"
              />
            </template>
          </div>
        </template>
        <slot/>
      </div>
    </template>
  </div>
</template>

<script>
import '../list.scss';
import './simple.scss';
export default {
  name: 'ListSimple',
  props: {
    max: {
      type: Number,
    },
    spaceBetween: {
      type: Number,
      default: 30,
    },
    colCount: {
      type: Number,
      default: 1,
    },
    itemType: {
      type: String,
      default: '',
    },
    classes: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    calcWidth() {
      return 100 / this.colCount;
    },
    spaceInPx() {
      return `${this.spaceBetween}px`;
    },
    halfSpaceInPx() {
      return `${this.spaceBetween / 2}px`;
    },
    negativeHalfSpaceInPx() {
      return `-${this.spaceBetween / 2}px`;
    },
  },
  methods: {
    formatDate(date) {
      const arr = date.split('.');
      return `${arr[1]}-${arr[0]}-${arr[2]}`;
    },
  },
}
</script>

<style lang="scss">
.list {
  &__inner {
    margin-left: v-bind('negativeHalfSpaceInPx');
    margin-right: v-bind('negativeHalfSpaceInPx');
  }
  &__item {
    margin-left: v-bind('halfSpaceInPx');
    margin-right: v-bind('halfSpaceInPx');
    margin-bottom: v-bind('spaceInPx');
  }
}
</style>
