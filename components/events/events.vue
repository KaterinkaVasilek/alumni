<template>
  <div class="events">
    <div class="r-container">
      <div class="events__inner">
        <div class="events__title title title--3">{{title}}</div>
        <div class="events__list">
          <list-simple
            :col-count="4"
            :item-type="'events'"
            :items="items"
          />
        </div>
        <div class="events__footer">
          <NuxtLink to="/events/" class="r-btn r-btn--light">Все мероприятия</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './events.scss';
export default {
  name: 'Events',
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
