<template>
  <div id="features" class="w-full md:w-2/3 lg:w-1/2 mb-10 md:mb-15">
    <h1 class="text-4xl mb-10">{{ blockInfo.title }}</h1>
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/3">
        <div class="text-justify md:text-right" v-for="feature in blockInfo.features.slice(0, 3)" :key="feature.id">
          <div class="text-center md:text-right"><n-icon class="text-4xl"><component :is="feature.icon"></component></n-icon></div>
          <p>
            {{ feature.content }}
          </p>
        </div>
      </div>
      <div class="hidden md:flex w-1/3 justify-center items-center">
        <phone-image
          v-if="blockInfo.image"
          :url="blockInfo.image.url"
          extraClass="w-[150px]"
          extraClassImage="w-[150px]"
        />
      </div>
      <div class="w-full md:w-1/3">
        <div class="text-justify md:text-left" v-for="feature in blockInfo.features.slice(3, 6)" :key="feature.id">
          <div class="text-center md:text-left"><n-icon class="text-4xl"><component :is="feature.icon"></component></n-icon></div>
          <p>
            {{ feature.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import useLandingData from "@/composables/useLandingData";
import PhoneImage from "./PhoneImage.vue";
import {
  ArrowsHorizontal, 
  Security, 
  MobileCheck, 
  Money, 
  Blockchain, 
  Integration
} from "@vicons/carbon";

export default defineComponent({
  props: {},
  components: {
    "phone-image": PhoneImage,
    ArrowsHorizontal,
    Security,
    MobileCheck,
    Money,
    Blockchain,
    Integration
  },
  setup() {
    const { blockInfo } = useLandingData("features");

    return {
      blockInfo,
    };
  },
});
</script>
