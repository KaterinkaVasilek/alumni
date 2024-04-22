<template>
  <div class="subscribe-round">
    <icon-rounds class="subscribe-round__bg"/>
    <NuxtLink class="subscribe-round__btn r-btn" type="button" to="/questionary">Вступить в клуб</NuxtLink>
  </div>
</template>

<script>
import './subscribe-round.scss';
import IconRounds from '@/assets/icons/bg-rounds.svg?inline';
export default {
  name: 'SubscribeRound',
  components: {
    IconRounds
  },
};
</script>
