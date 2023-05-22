<template>
  <div class="mb-[310px] md:mb-[250px]">
    <div>
      <span v-for="x in 5" class="firestone hidden lg:block" :key="x" />
      <div class="bg-transition h-[46rem] md:h-[35rem]">
        <menu-landing />
        <image-loader name="logo.png" extraClass="w-20 mb-5" alt="Logo" />
        <div class="text-4xl md:text-6xl text-white mb-3 px-5 md:px-0">
          Nova Pocket Wallet
        </div>
        <div class="text-xl text-white px-5 md:px-0 mb-10">
          El poder de tu dinero, en un solo lugar: Descubre la magia de nuestra
          wallet digital
        </div>
        <div class="relative px-4">
          <div class="absolute top-0 right-0 bottom-0 left-0 m-auto px-4">
            <div class="flex justify-center space-x-3 items-center">
              <phone-image
                v-for="(phoneImage, index) in phoneImages"
                :key="phoneImage"
                :name="phoneImage"
                :extraClass="
                  index == 1
                    ? 'w-[250px] md:w-[170px]'
                    : 'w-[150px] hidden md:block'
                "
                :extraClassImage="
                  index == 1
                    ? 'w-[250px] md:w-[170px]'
                    : 'w-[150px] hidden md:block'
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import MenuLanding from "../../components/MenuLanding.vue";
import ImageLoader from "../../components/ImageLoader.vue";
import PhoneImage from "./PhoneImage.vue";

export default defineComponent({
  props: {},
  components: {
    "image-loader": ImageLoader,
    "phone-image": PhoneImage,
    "menu-landing": MenuLanding
  },
  setup() {
    const phoneImages = ["register.jpg", "login.jpg", "kyc.jpg"];
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
      phoneImages,
      handleSelect(key) {
        console.log(key);
      },
    };
  },
});
</script>

<style scoped>
.bg-transition {
  background: linear-gradient(
    to right,
    #0f172a 0%,
    #111827 19%,
    #172554 40%,
    #1e1b4b 60%,
    #111827 83%,
    #0f172a 100%
  );
  background-size: 100000px 100%;
  animation: bg 15s linear infinite;
}

@keyframes bg {
  0% {
    background-position-x: 0;
  }

  100% {
    background-position-x: 100000px;
  }
}

.firestone {
  position: absolute;
  top: 50%;
  left: 65%;
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1),
    0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 225, 1);
  z-index: 1;
  animation: animate 3s linear infinite;
}
.firestone::before {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 300px;
  height: 1px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1), transparent);
}

@keyframes animate {
  0% {
    transform: rotate(315deg) translateX(0);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: rotate(315deg) translateX(-800px);
    opacity: 0;
  }
}

.firestone:nth-child(1) {
  top: 0;
  right: 0;
  animation-delay: 0;
  animation-duration: 1s;
}

.firestone:nth-child(2) {
  top: 100px;
  right: 100px;
  animation-delay: -0.2s;
  animation-duration: 3s;
}
.firestone:nth-child(3) {
  top: 150px;
  right: 150px;
  animation-delay: -0.3s;
  animation-duration: 1s;
}
.firestone:nth-child(4) {
  top: 150px;
  right: 350px;
  animation-delay: -0.3s;
  animation-duration: 1s;
}
</style>
