<script>
import './error.scss';

export default {
  props: ['error'],
}
</script>

<template>
  <div class="error">
    <h1 class="title error__heading" v-if="error.statusCode === 404">страница не найдена</h1>
    <h1 v-else>Возникла ошибка</h1>
    <p class="error__text">Возможно, она была перемещена, или вы просто неверно указали адрес страницы.</p>
    <NuxtLink class="r-btn error__button" to="/">На главную</NuxtLink>
  </div>
</template>
