<template>
  <div id="faqs" class="w-full mb-10 md:mb-20">
    <h1 class="text-4xl mb-10">{{ blockInfo.title }}</h1>
    <n-collapse class="w-full md:w-3/5 mx-auto">
      <n-collapse-item :name="index" v-for="(faq, index) in blockInfo.faqs" :key="index">
        <template #arrow><div></div></template>
        <template #header="props">
          <div class="flex flex-col items-center w-full">
            <div
              class="text-base text-center w-full"
              :class="{ 'font-bold': !props.collapsed }"
            >
              {{ faq.title }}
            </div>
            <n-icon class="text-lg">
              <chevron-down v-if="props.collapsed" />
              <chevron-up v-else />
            </n-icon>
          </div>
        </template>
        <div class="text-justify text-base">
          {{ faq.content }}
        </div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ChevronDown, ChevronUp } from "@vicons/carbon";

import useLandingData from "@/composables/useLandingData";

export default defineComponent({
  props: {},
  components: {
    ChevronDown,
    ChevronUp
  },
  setup() {
    const { blockInfo } = useLandingData("faqs");

    return {
      blockInfo
    };
  },
});
</script>
