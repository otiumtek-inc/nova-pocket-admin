<template>
  <n-drawer v-model:show="show" class="w-full md:w-1/2">
    <n-drawer-content
      closable
      :title="blockInfo.title"
      :native-scrollbar="false"
      :width="996"
      @on-after-leave="() => handlerCloseTerms(false)"
    >
      <div v-html="blockInfo.content"></div>
    </n-drawer-content>
  </n-drawer>
</template>

<script>
import { defineComponent, onMounted, inject, ref, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";

import useLandingData from "@/composables/useLandingData";

export default defineComponent({
  props: {},
  components: {},
  setup() {
    const emitter = inject("$emitter");
    const route = useRoute();

    const { blockInfo } = useLandingData("terms");
    const show = ref(false);

    const handleToggleTerms = (value) => {
      show.value = value;
    };

    onMounted(() => {
      emitter.on("open-term-cond", () => handleToggleTerms(true));
      if (Object.keys(route.query).includes("term-condition")) {
        handleToggleTerms(true);
      }
    });

    onBeforeUnmount(() => {
      emitter.off("open-term-cond");
    })

    return {
      show,
      blockInfo,
      handleToggleTerms
    };
  },
});
</script>
