<template>
  <div id="about" class="w-full md:w-1/2 mb-10 md:mb-15">
    <h1 class="text-4xl mb-10">{{ blockInfo.title }}</h1>
    <p class="text-base text-justify md:text-center" v-for="(content, index) in blockInfo.content" :key="index">
      {{ content }}
    </p>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import useLandingData from "@/composables/useLandingData";

export default defineComponent({
  props: {},
  components: {},
  setup() {
    const { blockInfo } = useLandingData("about");

    return {
      blockInfo,
    };
  },
});
</script>
