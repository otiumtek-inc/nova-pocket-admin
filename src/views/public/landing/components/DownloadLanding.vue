<template>
  <div id="download" class="w-full md:w-1/2 flex flex-wrap items-center mb-20">
    <div class="w-full md:w-1/2 mb-6 md:mb-0">
      <h1 class="text-4xl md:text-right">{{ blockInfo.title }}</h1>
      <p class="text-justify md:text-right text-base">
        {{ blockInfo.content }}
      </p>
      <div class="flex justify-center md:justify-end md:space-x-4">
        <a
          v-if="blockInfo.playstore.is_enable"
          :href="blockInfo.playstore.link"
          target="_blank"
        >
          <image-loader name="google-play-badge.png" extraClass="w-[150px] h-[44px]" />
        </a>
        <a
          v-if="blockInfo.appstore.is_enable"
          :href="blockInfo.appstore.link"
          target="_blank"
        >
          <image-loader name="app-store-badge.png" extraClass="w-[150px] h-[44px]" />
        </a>
      </div>
    </div>
    <div class="w-full md:w-1/2 flex justify-center">
      <phone-image
        name="login.jpg"
        extraClass="w-[150px]"
        extraClassImage="w-[150px]"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import useLandingData from "@/composables/useLandingData";

import ImageLoader from "../../components/ImageLoader.vue";
import PhoneImage from "./PhoneImage.vue";

export default defineComponent({
  props: {},
  components: {
    "image-loader": ImageLoader,
    "phone-image": PhoneImage,
  },
  setup() {
    const { blockInfo } = useLandingData("download");

    const phoneImages = ["register.jpg"];

    return {
      blockInfo,
      phoneImages,
    };
  },
});
</script>
