<template>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-slate-700 flex flex-col items-center justify-center"
  >
    <div
      class="loader-bug ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"
    >
      <n-icon class="text-4xl text-red-500"><debug /></n-icon>
    </div>

    <h2 class="text-center text-white text-xl font-semibold">
      {{ $t("common.error_site_title") }}
    </h2>
    <p class="w-1/3 text-center text-white">
      {{ $t("common.error_site_down") }}
    </p>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import { Debug } from "@vicons/carbon";

export default defineComponent({
  props: [],
  components: {
    debug: Debug,
  },
});
</script>

<style scope>
.loader-bug {
  border-top-color: #f44336 !important;
  -webkit-animation: spinner 2.5s linear infinite;
  animation: spinner 2.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
