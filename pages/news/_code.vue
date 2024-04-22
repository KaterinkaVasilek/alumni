<script>
import IconPlay from "@/assets/icons/play.svg?inline";
import "swiper/swiper-bundle.min.css";
import { Swiper, Navigation, Pagination, Autoplay } from "swiper";

export default {
  components: {
    IconPlay,
  },
  async asyncData({ $api, params }) {
    const newsItem = await $api.news_item.get("", params.code);
    return { newsItem };
  },
  data() {
    return {
      vkSrc: "#",
      telegramSrc: "#",
      isPlay: false,
    };
  },
  head() {
    return {
      title: this.newsItem.seo.metaTitle,
      meta: [
        {
          keywords: this.newsItem.seo.metaKeywords,
          description: this.newsItem.seo.metaDescription,
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
  mounted() {
    Swiper.use([Navigation, Pagination, Autoplay]);
    const swiper = new Swiper(".swiper", {
      direction: "horizontal",
      slidesPerView: 1,
      modules: [Navigation, Pagination, Autoplay],
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    if (document.querySelector(".video__button")) {
      document.querySelector(".video__button").addEventListener("click", () => {
        this.isPlay = true;
        this.doPlay();
      });
    }
  },
  methods: {
    getVkShareLink() {
      if (process.client) {
        const url = encodeURIComponent(window.location.href);
        const shareUrl = `https://vk.com/share.php?url=${url}&title=${encodeURIComponent(
          this.newsItem.name
        )}}`;
        return shareUrl;
      }
      return "#";
    },
    getTelegramShareLink() {
      if (process.client) {
        const url = encodeURIComponent(window.location.href);
        const shareUrl = `https://t.me/share/url?url=${url}&text=${encodeURIComponent(
          this.newsItem.name
        )}`;
        return shareUrl;
      }
      return "#";
    },
    onPlayButtonClick() {
      this.isPlay = true;
      this.doPlay();
    },
    doCommand(CommandJSON) {
      const player = document.getElementById("my-player");
      player.contentWindow.postMessage(JSON.stringify(CommandJSON), "*");
      player.classList.add("video__frame--play");
    },
    doPlay() {
      this.doCommand({ type: "player:play", data: {} });
      this.doCommand({ type: "player:unMute", data: {} });
    },
  },
};
</script>

<template>
  <main class="r-container r-container--background article-page">
    <h1 class="title article-page__heading" v-html="newsItem.name"></h1>
    <ArticleCard
      :imageSrc="newsItem.photoDesktop"
      :imageTablet="''"
      :imageDesktop="''"
      :publishDate="newsItem.datePublishedHuman"
      :imageAlt="newsItem.photoDesktopDescription"
      :vkSrc="vkSrc"
      :telegramSrc="telegramSrc"
    />
    <section class="content">
      <p
        v-if="newsItem.subtitle"
        class="content__subtitle"
        v-html="newsItem.subtitle"
      ></p>
      <div v-html="newsItem.detailText"></div>
      <div class="content__actions">
        <div
          class="content__actions-btn-box"
          v-if="newsItem?.btnName && newsItem?.btnLink"
        >
          <a
            :href="newsItem?.btnLink"
            target="_blank"
            class="r-btn content__action content__action--subscribe"
          >
            {{ newsItem?.btnName }}
          </a>
        </div>
        <NuxtLink
          to="/questionary"
          class="r-btn content__action content__action--subscribe"
          >Вступить в клуб</NuxtLink
        >
      </div>
    </section>
    <section class="article-page__share">
      <h2 class="visually-hidden">Поделиться новостью</h2>
      <p class="article-page__bold">Поделитесь, если это было ценно</p>
      <SocialList :vkSrc="vkSrc" :telegramSrc="telegramSrc" />
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

  &::after {
    display: none;
  }

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
    max-width: 1000px;
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

  &__actions {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 50px;

    @media (max-width: 1239px) {
      margin-top: 30px;
    }
  }

  &__actions-btn-box {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
  }

  &__action {
    min-width: 190px;
  }
}

.content p {
  margin-bottom: 16px;
}

.content b {
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

.content__subtitle {
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;
}

.content blockquote {
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

/* Slider */

.slider {
  width: 100%;
  min-height: 253px;
  margin-bottom: 29px;

  @media (min-width: 744px) {
    margin-bottom: 37px;
  }

  @media (min-width: 1240px) {
    margin-bottom: 48px;
  }
}

.slider__slide-img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 187px;
  object-fit: cover;

  @media (min-width: 400px) {
    max-height: 380px;
  }

  @media (min-width: 1240px) {
    max-height: 420px;
  }
}

.slider__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
  }

  @media (min-width: 1240px) {
    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
    }
  }
}

.swiper-pagination {
  display: flex;
  align-items: center;
}

.swiper {
  display: flex;
  flex-direction: column;
  gap: 21px;

  @media (min-width: 1240px) {
    gap: 24px;
  }
}

.swiper-buttons .swiper-button-prev,
.swiper-buttons .swiper-button-next {
  width: 42px;
  height: 42px;

  @media (min-width: 1240px) {
    width: 48px;
    height: 48px;
  }
}

/* Video player */

.video-player {
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  margin-bottom: 32px;
  border-bottom: 1px solid $color-main-5;
  gap: 16px;

  @media (min-width: 744px) {
    margin-bottom: 0;
    padding-bottom: 32px;
  }
}

.video-player__label {
  color: $color-black-06;
}

.video {
  position: relative;
  min-height: 195px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #929291;

  @media (min-width: 744px) {
    min-height: 395px;
  }

  @media (min-width: 1240px) {
    min-height: 436px;
  }
}

.video__iframe {
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
}

.video__frame--play {
  z-index: 1;
}

.video__button {
  position: absolute;
  z-index: 1;
  cursor: pointer;
}
</style>
