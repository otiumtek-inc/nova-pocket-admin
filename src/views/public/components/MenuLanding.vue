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
    </div>
    <div class="md:hidden flex justify-end">
      <n-dropdown trigger="hover" :options="menu" @select="handlerSelect">
        <span class="text-white text-xl">Menu</span>
      </n-dropdown>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    type: {
      type: String,
      default: "normal",
    },
  },
  components: {},
  emits: ['show-term-condition'],
  setup(props, { emit }) {
    const menu = [
      { label: "Inicio", key: "top", to: "#top" },
      { label: "Sobre Nova Pocket", key: "about", to: "#about" },
      { label: "Caraterísticas", key: "features", to: "#features" },
      { label: "Preguntas frecuentes", key: "faqs", to: "#faqs" },
      { label: "Descargar app", key: "download", to: "#download" },
      { label: "Contáctanos", key: "contactus", to: "#contact-us" },
      { label: "Términos y condiciones", key: "term-cond" },
    ];

    const handlerOpenTermCond = () => {
      emit('show-term-condition')
    }

    const handlerSelect = (key) => {
      const itemTo = menu.find(x => x.key == key).to
      if (itemTo) {
        const to = document.querySelector(itemTo);
        if (to) {
          window.scroll({
            top: to.getBoundingClientRect().top - 50 + window.scrollY,
            behavior: "smooth",
          });
        }
      } else {
        handlerOpenTermCond()
      }
    };

    return {
      menu,
      handlerSelect,
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
