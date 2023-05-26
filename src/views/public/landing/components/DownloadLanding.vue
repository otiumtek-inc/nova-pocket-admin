<template>
  <div id="download" class="w-full md:w-1/2 flex flex-wrap items-center mb-20">
    <div class="w-full md:w-1/2 mb-6 md:mb-0">
      <h1 class="text-4xl md:text-right">Descarga la App</h1>
      <p class="text-justify md:text-right text-base">
        Simplemente visita la tienda de aplicaciones de tu dispositivo móvil,
        busca nuestra aplicación y haz clic en el botón de descarga. En pocos
        minutos, podrás experimentar la libertad de llevar dinero donde no hay
        limites.
      </p>
      <div class="flex justify-center md:justify-end md:space-x-4">
        <a
          href="https://play.google.com/store/apps/details?id=dev.otiumtek.nova_pocket_dev.dev"
          target="_blank"
        >
          <image-loader name="google-play-badge.png" extraClass="w-[150px] h-[44px]" />
        </a>
        <!--a
          href="https://play.google.com/store/apps/details?id=dev.otiumtek.nova_pocket_dev.dev"
          target="_blank"
        >
          <image-loader name="app-store-badge.png" extraClass="w-[150px] h-[44px]" />
        </a-->
      </div>
    </div>
    <div class="w-full md:w-1/2 flex justify-center">
      <phone-image
        name="login.jpg"
        extraClass="w-[150px]"
        extraClassImage="w-[150px]"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import ImageLoader from "../../components/ImageLoader.vue";
import PhoneImage from "./PhoneImage.vue";

export default defineComponent({
  props: {},
  components: {
    "image-loader": ImageLoader,
    "phone-image": PhoneImage,
  },
  setup() {
    const phoneImages = ["register.jpg"];

    return {
      phoneImages,
    };
  },
});
</script>
