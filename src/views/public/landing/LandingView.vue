<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <!--n-theme-editor-->
    <Transition name="fade">
      <loading-overlay
        v-if="loading"
        class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-slate-700 flex flex-col items-center justify-center"
      />
    </Transition>
    <error-site-down v-if="error" />
    <div v-if="!error" id="top">
      <menu-landing type="floating" />
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
          {{ VUE_APP_NAME_APP }} {{ t("common.poweredby") }} Otiumtek SRL
        </div>
      </div>
    </div>
    <terms-landing v-if="!error" />
    <!--n-theme-editor-->
  </n-config-provider>
</template>

<script>
import { defineComponent, onMounted, inject, ref, onBeforeUnmount } from "vue";
import { useI18n } from "vue-i18n";
// import { NThemeEditor } from "naive-ui";

import LandingService from "@/services/landing.service";

import MenuLanding from "../components/MenuLanding.vue";
import LoadingOverlay from "./components/LoadingOverlay.vue";
import ErrorSiteDown from "./components/ErrorSiteDown.vue";
import HeaderLanding from "./components/HeaderLanding.vue";
import AboutLanding from "./components/AboutLanding.vue";
import FeaturesLanding from "./components/FeaturesLanding.vue";
import FaqsLanding from "./components/FaqsLanding.vue";
import DownloadLanding from "./components/DownloadLanding.vue";
import ContactLanding from "./components/ContactLanding.vue";
import TermsLanding from "./components/TermsLanding.vue";

import termCond from "./term-condition";

export default defineComponent({
  props: [],
  components: {
    //NThemeEditor,
    "loading-overlay": LoadingOverlay,
    "error-site-down": ErrorSiteDown,
    "menu-landing": MenuLanding,
    "header-landing": HeaderLanding,
    "features-landing": FeaturesLanding,
    "download-landing": DownloadLanding,
    "contact-landing": ContactLanding,
    "faqs-landing": FaqsLanding,
    "about-landing": AboutLanding,
    "terms-landing": TermsLanding,
  },
  setup() {
    const emitter = inject("$emitter");
    const { t } = useI18n();
    const loading = ref(true);
    const error = ref(false);
    const { VUE_APP_NAME_APP } = inject("env");
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

    const init = async () => {
      window.addEventListener("scroll", doScroll);
      const res = await LandingService.getLandingInfo();
      if (res.isOk) {
        const data = res.data.data.map((x) => ({ id: x.id, ...x.attributes }));
        const blockData = {
          header: data.find(
            (x) => x.type == "block" && x.meta_info.id == "header"
          ),
          about: data.find(
            (x) => x.type == "block" && x.meta_info.id == "about"
          ),
          features: {
            ...data.find(
              (x) => x.type == "block" && x.meta_info.id == "features"
            ),
            posts: data.filter((x) => x.type == "feature"),
          },
          faqs: {
            ...data.find((x) => x.type == "block" && x.meta_info.id == "faqs"),
            posts: data.filter((x) => x.type == "faqs"),
          },
          download: data.find(
            (x) => x.type == "block" && x.meta_info.id == "download"
          ),
          terms: data.find(
            (x) => x.type == "block" && x.meta_info.id == "term-cond"
          ),
        };
        setTimeout(() => (loading.value = false), 1000);
        emitter.emit("receive-data", blockData);
      } else {
        loading.value = false;
        error.value = true;
      }
    };

    onMounted(init);

    onBeforeUnmount(() => {
      emitter.off("open-term-cond");
      if (doScroll) {
        window.removeEventListener("scroll", doScroll);
      }
    });

    return {
      t,
      error,
      loading,
      VUE_APP_NAME_APP,
      themeOverrides,
      termCond,
    };
  },
});
</script>

<style scope>
.loader {
  border-top-color: #f44336 !important;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
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
