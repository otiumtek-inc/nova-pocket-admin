<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <!--n-theme-editor-->
    <div id="top">
      <menu-landing
        type="floating"
        @show-term-condition="handlerOpenTermCond"
      />
      <header-landing />
      <div class="flex flex-col items-center px-5 lg:p-0">
        <about-landing />
        <features-landing />
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
    <n-drawer v-model:show="show" class="w-full md:w-1/2">
      <n-drawer-content
        closable
        title="Términos y condiciones de Nova Pocket Wallet"
        :native-scrollbar="false"
        :width="996"
        @on-after-leave="handlerCloseTermCond"
      >
        <div v-html="termCond"></div>
      </n-drawer-content>
    </n-drawer>
    <!--n-theme-editor-->
  </n-config-provider>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, inject, ref } from "vue";
import { useRoute } from "vue-router";
// import { NThemeEditor } from "naive-ui";

import MenuLanding from "../components/MenuLanding.vue";
import HeaderLanding from "./components/HeaderLanding.vue";
import AboutLanding from "./components/AboutLanding.vue";
import FeaturesLanding from "./components/FeaturesLanding.vue";
import FaqsLanding from "./components/FaqsLanding.vue";
import DownloadLanding from "./components/DownloadLanding.vue";
import ContactLanding from "./components/ContactLanding.vue";

import termCond from "./term-condition";

export default defineComponent({
  props: [],
  components: {
    //NThemeEditor,
    "menu-landing": MenuLanding,
    "header-landing": HeaderLanding,
    "features-landing": FeaturesLanding,
    "download-landing": DownloadLanding,
    "contact-landing": ContactLanding,
    "faqs-landing": FaqsLanding,
    "about-landing": AboutLanding,
  },
  setup() {
    const route = useRoute();
    const show = ref(false);
    const { VUE_APP_NAME_APP } = inject("env");
    const themeOverrides = {
      Input: {
        border: "1px solid #ccc",
        borderHover: "1px solid #324154",
        borderFocus: "1px solid #324154",
        boxShadowFocus: "0 0 0 2px rgba(50, 65, 84, 0.1)",
      },
    };

    const handlerOpenTermCond = () => {
      show.value = true;
    };

    const handlerCloseTermCond = () => {
      show.value = false;
    }

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
      if (Object.keys(route.query).includes("term-condition")) {
        handlerOpenTermCond();
      }
    });

    onUnmounted(() => {
      window.removeEventListener(doScroll);
    });

    return {
      show,
      VUE_APP_NAME_APP,
      themeOverrides,
      termCond,
      handlerOpenTermCond,
      handlerCloseTermCond
    };
  },
});
</script>
