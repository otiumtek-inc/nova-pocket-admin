<template>
  <img
    :alt="alt"
    :class="extraClass"
    :src="pathImage"
  />
</template>

<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
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
      default: "",
    },
  },
  setup(props) {
    const pathImage = computed(() => require(`@/assets/${props.name}`))
    
    return {
      pathImage
    };
  },
});
</script>
