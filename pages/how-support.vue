<template>
  <div class="page page--how-support">
    <donate
      id="donate"
      :ref="'donate'"
      :title="donate.title"
      :description="donateDescription"
      :img-large="donate.imgLarge"
      :img-small="donate.imgSmall"
      :projects-items="formatProjectsItems"
    />
    <contract
      id="contract"
      :ref="'contract'"
      :title="contract.title"
      :text="contractText"
      :docs="docs"
    />
    <help-company
      id="help-company"
      :ref="'help-company'"
      :description-text="companyHelp.description"
      :src="{
      default: '/img/help-company-1.png',
      tablet: '/img/help-company-tablet-1.png',
      mobile: '/img/help-company-mobile-1.png',
      }"
      :items-joy="companyHelp.list.joy"
      :items="companyHelp.list.default"
    />
    <contact-partners
      :data="contractPartners"
    />
    <info-support
      v-if="false"
      id="info-support"
      :ref="'info-support'"
      :vk="vk"
      :telegram="telegram"
    />
    <modal-error :name="'modal-error-payment'">
      <template #title>
        Что-то пошло не так
      </template>
      <template #text>
        <p>Возможно, это был временный сбой – попробуйте снова.</p>
      </template>
    </modal-error>
  </div>
</template>

<script>
import InfoSupport from "@/components/info/supprot/support.vue";

export default {
  components: {InfoSupport},
  async asyncData({ $api }) {
    const footer = await $api.footer.get();
    const donateDescription = await $api.donate.description.get();
    const docs = await $api.docs.get();
    const contractText = await $api.contract.get();
    const companyHelp = await $api.company_help.get();
    const contractPartners = await $api.contract_partners.get();
    const projectsItems = await $api.project.items.get();
    const formatProjectsItems = projectsItems.items.map((el) => el.name);

    return {
      formatProjectsItems: formatProjectsItems,
      projectsItems: projectsItems,
      vk: footer?.social?.vk || '/',
      telegram: footer?.social?.telegram || '/',
      donateDescription: donateDescription,
      docs: docs,
      contractText: contractText,
      companyHelp: companyHelp,
      contractPartners: contractPartners,
    };
  },
  data() {
    return {
      contract: {
        title: 'Пожертвовать по договору',
        text: 'Вы можете поддержать Академию переводом средств по договору пожертвования.\n' +
          '<br/>\n' +
          '<br/>\n' +
          '<br/>\n' +
          '<ol style="font-weight: 500">\n' +
          '<li>Скачайте шаблон договора.</li>\n' +
          '<li>Внесите свои данные.</li>\n' +
          '<li>Впишите сумму пожертвования.</li>\n' +
          '<li>Подпишите договор, отсканируйте его и пришлите нам по адресу <a href="mailto:nachinkina-ys@ranepa.ru" class="link-red">nachinkina-ys@ranepa.ru</a></li>\n' +
          '</ol>\n' +
          '<br/>\n' +
          '<br/>\n' +
          'Если у вас возникнут вопросы в процессе заполнения договора, обратитесь, пожалуйста, к руководителю Клуба Юлии Начинкиной<br/>\n' +
          'по телефонам <a href="tel:+79104077624" class="link-red">+7 (910) 407-76-24</a> или <a href="tel:+74999560170" class="link-red">+7(499) 956-01-70</a> или еmail: <a href="mailto:nachnkina-ys@ranepa.ru." class="link-red">nachnkina-ys@ranepa.ru</a>.<br/><br/>\n' +
          'Мы гарантируем, что каждый рубль вашего пожертвования будет направлен на проекты развития нашей Академии.<br/><br/><br/>\n',
      },
      donate: {
        title: 'Сделать пожертвование',
        description: 'Ваше пожертвование – это знак вашей признательности Академии. Каждое пожертвование укрепляет и развивает Президентскую академию, делает ее самым престижным и прогрессивным вузом России, нацеленным на решение задач государственного уровня.\n' +
          '<br/> Все деньги благотворителей зачисляются на счет Академии.',
        imgSmall: '/img/donate-small.png',
        imgLarge: '/img/donate-large.png',
      },
    };
  },
  mounted() {
    if(process.browser) {
      const params = new URLSearchParams(window.location.search);
      if(params.get('payment') === '0') this.$modal.show('modal-error-payment');
    }
    this.$nuxt.$emit('scrollToElByParam', this.$refs);
  },
};
</script>
