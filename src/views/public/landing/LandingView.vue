<template>
  <header-landing />
  <div class="flex flex-col items-center px-5 lg:p-0">
    <about-landing />
    <faqs-landing />
    <download-landing />
    <contact-landing />
  </div>
  <div class="bg-slate-900 mt-10">
    <div class="text-white py-5">Nova Pocket Wallet</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import HeaderLanding from "./components/HeaderLanding.vue";
import AboutLanding from "./components/AboutLanding.vue";
import FaqsLanding from "./components/FaqsLanding.vue";
import DownloadLanding from "./components/DownloadLanding.vue";
import ContactLanding from "./components/ContactLanding.vue";

export default defineComponent({
  props: [],
  components: {
    "header-landing": HeaderLanding,
    "download-landing": DownloadLanding,
    "contact-landing": ContactLanding,
    "faqs-landing": FaqsLanding,
    "about-landing": AboutLanding
  },
  setup() {
    return {};
  },
});
</script>
