<template>
  <div
    :id="type"
    :class="{
      'mb-10': type == 'normal',
      'bg-slate-900 sticky top-0 z-[1] hidden transition': type != 'normal',
    }"
    class="p-4 flex justify-center text-white"
  >
    <div class="space-x-5 hidden md:flex">
      <span
        class="hover:text-gray-200 cursor-pointer transition"
        v-scroller="item.to"
        v-for="item in menu.filter((x) => x.to)"
        :key="item"
        >{{ item.label }}</span
      >
      <span
        class="hover:text-gray-200 cursor-pointer transition"
        v-scroller="item.to"
        v-for="item in menu.filter((x) => !x.to)"
        :key="item"
        @click="handlerOpenTermCond"
        >{{ item.label }}</span
      >
      <n-dropdown trigger="hover" :options="languages" @select="handlerSelectMenu">
        <span class="text-white">{{$t(`lang.${locale}`)}}</span>
      </n-dropdown>
    </div>
    <div class="md:hidden flex justify-end">
      <n-dropdown trigger="hover" :options="menuResponsive" @select="handlerSelectMenu">
        <span class="text-white text-xl">Menu</span>
      </n-dropdown>
    </div>
  </div>
</template>

<script>
import { defineComponent, inject } from "vue";
import { useI18n } from "vue-i18n";

import Tr from "@/plugins/i18n/translation";

export default defineComponent({
  props: {
    type: {
      type: String,
      default: "normal",
    },
  },
  components: {},
  setup() {
    const emitter = inject("$emitter");
    const { t, locale } = useI18n();

    const supportedLocales = Tr.supportedLocales;

    const languages = supportedLocales.filter(x => x != locale.value).map(x => ({ key: `dropdown_${x}`, label: `${t(`lang.${x}`)}` }));

    const menu = [
      { label: t("menu.home"), key: "scroll_top" },
      { label: t("menu.about"), key: "scroll_about" },
      { label: t("menu.features"), key: "scroll_features" },
      { label: t("menu.faqs"), key: "scroll_faqs" },
      { label: t("menu.download"), key: "scroll_download" },
      { label: t("menu.contactus"), key: "scroll_contactus" },
      { label: t("menu.term_cond"), key: "drawer_term-cond" },
    ];

    const menuResponsive = menu.concat([{ label: t(`lang.${locale.value}`), key: "selector", children: languages }]);

    const handlerOpenTermCond = () => {
      emitter.emit("open-term-cond");
    };

    const handlerSelectMenu = (key) => {
      const item = key.split('_');
      console.log(item)
      if (item[0] == "scroll") {
        const to = document.querySelector(`#${item[1]}`);
        if (to) {
          window.scroll({
            top: to.getBoundingClientRect().top - 50 + window.scrollY,
            behavior: "smooth",
          });
        }
      } else if (item[0] == "drawer") {
        handlerOpenTermCond();
      } else if (item[0] == "dropdown") {
        handleSelectLanguage(item[1]);
      }
    };

    const handleSelectLanguage = async (key) => {
      await Tr.switchLanguage(key);
      window.location.reload()
    };

    return {
      supportedLocales,
      locale,
      menu,
      menuResponsive,
      languages,
      handlerSelectMenu,
      handleSelectLanguage,
      handlerOpenTermCond,
    };
  },
});
</script>
<style scoped>
ol {
  counter-reset: item;
}
li {
  display: block;
}
li:before {
  content: counters(item, ".") " ";
  counter-increment: item;
}
</style>
