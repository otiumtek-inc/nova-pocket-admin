<template>
  <div
    :id="type"
    :class="{'mb-10': type == 'normal', 'bg-slate-900 sticky top-0 z-[1] hidden transition': type != 'normal' }"
    class="p-4 flex justify-center text-white"
  >
    <div class="space-x-5 hidden md:flex">
      <span
        class="hover:text-gray-200 cursor-pointer transition"
        v-scroller="item.to"
        v-for="item in menu"
        :key="item"
        >{{ item.label }}</span
      >
    </div>
    <div class="md:hidden flex justify-end">
      <n-dropdown trigger="hover" :options="menu" @select="handleSelect">
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
  setup() {
    const menu = [
      { label: "Inicio", key: "top", to: "#top" },
      { label: "Sobre Nova Pocket", key: "about", to: "#about" },
      { label: "Preguntas frecuentes", key: "faqs", to: "#faqs" },
      { label: "Descargar app", key: "download", to: "#download" },
      { label: "Contáctanos", key: "contactus", to: "#contact-us" },
      { label: "Términos y condiciones", key: "term-cond", to: "#term-cond" },
    ];

    return {
      menu,
      handleSelect(key) {
        console.log(key);
      },
    };
  },
});
</script>
