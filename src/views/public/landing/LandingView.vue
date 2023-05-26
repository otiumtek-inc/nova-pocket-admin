<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-theme-editor>
      <div id="top">
        <menu-landing type="floating" />
        <header-landing />
        <div class="flex flex-col items-center px-5 lg:p-0">
          <about-landing />
          <faqs-landing />
          <download-landing />
          <contact-landing />
        </div>
        <div class="bg-slate-900 mt-10">
          <div class="text-white py-5">
            {{ VUE_APP_NAME_APP }} @Powered by Otiumtek SRL
          </div>
        </div>
      </div>
    </n-theme-editor>
  </n-config-provider>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, inject } from "vue";
import { NThemeEditor } from "naive-ui";

import MenuLanding from "../components/MenuLanding.vue";
import HeaderLanding from "./components/HeaderLanding.vue";
import AboutLanding from "./components/AboutLanding.vue";
import FaqsLanding from "./components/FaqsLanding.vue";
import DownloadLanding from "./components/DownloadLanding.vue";
import ContactLanding from "./components/ContactLanding.vue";

export default defineComponent({
  props: [],
  components: {
    NThemeEditor,
    "menu-landing": MenuLanding,
    "header-landing": HeaderLanding,
    "download-landing": DownloadLanding,
    "contact-landing": ContactLanding,
    "faqs-landing": FaqsLanding,
    "about-landing": AboutLanding,
  },
  setup() {
    const { VUE_APP_NAME_APP } = inject('env')
    const themeOverrides = {
      Input: {
        border: "1px solid #ccc",
        borderHover: "1px solid #324154",
        borderFocus: "1px solid #324154",
        boxShadowFocus: "0 0 0 2px rgba(50, 65, 84, 0.1)",
      },
    };

    const doScroll = () => {
      const normal = document.querySelector("#normal");
      const floating = document.querySelector("#floating");
      if (normal && floating && window.scrollY == 0) {
        floating.classList.add("hidden");
        normal.classList.remove("invisible");
      } else if (normal && floating) {
        normal.classList.add("invisible");
        floating.classList.remove("hidden");
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", doScroll);
    });

    onUnmounted(() => {
      window.removeEventListener(doScroll);
    });

    return {
      VUE_APP_NAME_APP,
      themeOverrides,
    };
  },
});
</script>
