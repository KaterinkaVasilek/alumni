<script>
export default {
  async asyncData({ $api, params }) {
    const event = await $api.event.get("", params.code);
    return { event };
  },
  data() {
    return {
      vkSrc: "#",
      telegramSrc: "#",
    };
  },
  head() {
    return {
      title: this.event.seo.metaTitle,
      meta: [
        {
          keywords: this.event.seo.metaKeywords,
          description: this.event.seo.metaDescription,
        },
      ],
    };
  },
  created() {
    this.$nextTick(() => {
      this.vkSrc = this.getVkShareLink();
      this.telegramSrc = this.getTelegramShareLink();
    });
  },
  methods: {
    getVkShareLink() {
      if (process.client) {
        const url = encodeURIComponent(window.location.href);
        const shareUrl = `https://vk.com/share.php?url=${url}&title=${encodeURIComponent(
          this.event.name
        )}&description=${encodeURIComponent(this.event.description)}`;
        return shareUrl;
      }
      return "#";
    },
    getTelegramShareLink() {
      if (process.client) {
        const url = encodeURIComponent(window.location.href);
        const shareUrl = `https://t.me/share/url?url=${url}&text=${encodeURIComponent(
          this.event.name + " - " + this.event.description
        )}`;
        return shareUrl;
      }
      return "#";
    },
  },
};
</script>

<template>
  <main class="r-container r-container--background article-page">
    <h1 class="title article-page__heading">{{ event.name }}</h1>
    <ArticleCard
      :img-grayscale="false"
      :imageSrc="event.photoPhone"
      :imageTablet="event.photoTablet"
      :imageDesktop="event.photoDesktop"
      :publishDate="event.datePublishedHuman"
      :imageAlt="event.description"
      :isEvent="true"
      :format="event.format"
      :vkSrc="vkSrc"
      :telegramSrc="telegramSrc"
    />
    <section class="content">
      <h2 class="visually-hidden">Информация о событии</h2>
      <p class="content__subtitle" v-html="event.subtitle"></p>
      <p v-html="event.detailText"></p>
    </section>
    <section
      class="content content--registration content--simple"
      v-if="event?.btnName && event?.btnLink"
    >
      <a
        :href="event?.btnLink"
        target="_blank"
        class="r-btn content__action content__action--subscribe"
      >
        {{ event?.btnName }}
      </a>
    </section>
    <section v-if="event.registrationUrl" class="content content--registration">
      <h2 class="visually-hidden">Регистрация</h2>
      <a
        class="r-btn article-page__link"
        :href="event.registrationUrl"
        target="_blank"
      >
        {{
          event.code === "izbiratelnyy-kviz-2024"
            ? "Принять участие"
            : "Регистрация"
        }}
      </a>
    </section>
    <section
      class="content article-page__contacts contacts"
      v-if="
        event.questionsText ||
        event.questionsName ||
        event.questionsPhones ||
        event.questionsEmails
      "
    >
      <h2 class="visually-hidden">Контакты</h2>
      <p class="contacts__text">{{ event.questionsText }}</p>
      <div>
        <p class="contacts__name">{{ event.questionsName }}</p>
        <ul class="contacts__list">
          <li class="contacts__item">
            <a
              v-for="(phone, index) in event.questionsPhones"
              class="contacts__link"
              :href="'tel:' + event.questionsPhonesLink[index]"
            >
              {{
                index + 1 < event.questionsPhones.length ? `${phone}, ` : phone
              }}
            </a>
          </li>
          <li class="contacts__item">
            <a
              v-for="(email, index) in event.questionsEmails"
              class="contacts__link"
              :href="'mailto:' + email"
            >
              {{
                index + 1 < event.questionsEmails.length ? `${email}, ` : email
              }}
            </a>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@import "../../assets/scss/variable.scss";

.article-page {
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
  line-height: 150%;

  @media (min-width: 744px) {
    padding: 0 24px;
  }
}

.article-page__heading {
  margin-bottom: 46px;
  line-height: 120%;
  font-weight: 400;
  letter-spacing: -0.64px;

  @media (min-width: 744px) {
    margin-bottom: 48px;
    font-size: 40px;
    letter-spacing: -0.8px;
  }

  @media (min-width: 1240px) {
    max-width: 900px;
    margin-bottom: 60px;
    font-size: 42px;
    line-height: 125%;
    letter-spacing: -0.84px;
  }
}

.article-page__share {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 21px;
  gap: 16px;

  @media (min-width: 744px) {
    margin-top: 16px;
  }
}

.article-page__bold {
  font-size: 18px;
  font-weight: 600;
  line-height: 140%;
}

.article-page__link {
  display: flex;
  padding: 13px 32px;
  justify-content: center;
  line-height: 150%;
}

/* Content */

.content {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  margin-bottom: 16px;
  line-height: 150%;

  @media (min-width: 744px) {
    margin-bottom: 32px;
  }

  &__actions-btn-box {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
  }
}

.content--event {
  @media (min-width: 744px) {
    margin-bottom: 16px;
  }
}

.content.content--registration {
  margin-top: 15px;
  margin-bottom: 48px;

  @media (min-width: 744px) {
    display: flex;
    margin-top: -1px;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (min-width: 1240px) {
    margin-top: 15px;
  }
}

.content.content--simple {
  margin-bottom: 10px;
}

.content p {
  margin-bottom: 16px;
}

.content__subtitle {
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;
}

.content ul {
  margin-bottom: 16px;
  list-style-type: none;
}

.content ul li {
  position: relative;
  display: flex;
  padding-left: 24px;

  &::before {
    position: absolute;
    content: "";
    left: 10px;
    top: 11px;
    width: 4px;
    height: 4px;
    background-color: $color-main-1;
    border-radius: 50%;
  }
}

.content blockquote {
  margin-top: 36px;
  margin-bottom: 32px;
  padding-left: 24px;
  font-size: 18px;
  line-height: 150%;
  border-left: 2px solid $color-main-2;
}

.content cite {
  font-style: normal;
}

.content blockquote footer {
  font-size: 16px;
  line-height: 150%;
  color: $color-main-5;
}

.content ol {
  margin-bottom: 16px;
  padding: 0;
  list-style-type: none;
}

.content ol li {
  position: relative;
  padding-left: 25px;
  counter-increment: list 1;
  text-align: left;

  &::before {
    position: absolute;
    left: 0;
    content: counter(list, upper-roman) ".";
  }
}

.content.contacts {
  position: relative;
  margin-top: 32px;
  line-height: 150%;
  font-weight: 600;

  &::after {
    position: absolute;
    top: -32px;
    content: "";
    width: 100%;
    height: 1px;
    background-color: $color-main-5;
  }

  @media (min-width: 744px) {
    display: flex;
    justify-content: space-between;
  }
}

.contacts .contacts__name {
  margin-bottom: 8px;
}

.contacts .contacts__list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.contacts .contacts__item {
  padding-left: 0;
  font-weight: 400;

  &::before {
    display: none;
  }
}

.contacts .contacts__item {
  display: flex;
  max-width: 300px;
  flex-wrap: wrap;
  gap: 6px;
}
</style>
