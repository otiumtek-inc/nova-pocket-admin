<template>
  <div
    :class="extraClass"
    class="p-1.5 bg-slate-700 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)]"
  >
    <image-loader
      :name="name"
      :extraClass="`${extraClassImage} max-w-full h-auto rounded-[1.25rem]`"
      alt="Register phone"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

import ImageLoader from "../../components/ImageLoader.vue";

export default defineComponent({
  components: {
    "image-loader": ImageLoader,
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "image",
    },
    extraClass: {
      type: String,
      default: "w-[150px]",
    },
    extraClassImage: {
      type: String,
      default: "w-[150px]",
    },
  },
  setup() {
    return {};
  },
});
</script>
