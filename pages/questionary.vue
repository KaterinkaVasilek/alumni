<script>
import Questionary from '@/components/form/questionary/questionary.vue';
import IconEagle from '@/assets/icons/eagle.svg?inline';

export default {
  components: {
    Questionary,
    IconEagle
  },
  async asyncData({ $api }) {
    const dictionaries = await $api.dictionaries.get();
    return { dictionaries };
  }
}
</script>

<template>
  <main class="r-container questionary-page">
    <BackButton />
    <div class="questionary-page__heading">
      <h1 class="title title--4">Анкета</h1>
      <div>
        <p>Для вступления в Клуб выпускников, пожалуйста, заполните анкету.</p>
        <p>Проверка данных о статусе выпускника может занять от 2 до 10 дней.</p>
        <p>По возможности, внесите максимальные данные, чтобы сократить время на верификацию.</p>
      </div>
    </div>
    <Questionary :places="dictionaries.studyList" :years="dictionaries.yearsList"/>
    <modal-success>
      <template #title>
        Спасибо, что заполнили анкету члена Клуба!
      </template>
      <template #text>
        <p>Мы вернемся к вам после верификации данных.  </p>
      </template>
    </modal-success>
  </main>
</template>

<style lang="scss">
.questionary-page .r-container__decor {
  top: -31px;
  left: -219px;

  @media (min-width: 1240px) {
    left: -497px;
  }
}

.questionary-page__heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  gap: 16px;

  @media (min-width: 744px) {
    margin-bottom: 48px;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
