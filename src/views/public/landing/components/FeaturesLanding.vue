<template>
  <div id="features" class="w-full md:w-2/3 lg:w-1/2 mb-10 md:mb-15">
    <h1 class="text-4xl mb-10">Características</h1>
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/3">
        <div class="text-justify md:text-right">
          <div class="text-center md:text-right"><n-icon class="text-4xl"><arrows-horizontal/></n-icon></div>
          <p>
            Transacciones rápidas y económicas que permiten enviar y recibir fondos instantáneamente con costos mínimos, sin importar la ubicación.
          </p>
        </div>
        <div class="text-justify md:text-right">
          <div class="text-center md:text-right"><n-icon class="text-4xl"><money/></n-icon></div>
          <p>
            Depósitos de dinero fiat, como dólares, euros u otras monedas tradicionales, directamente desde tu cuenta bancaria.
          </p>
        </div>
        <div class="text-justify md:text-right">
          <div class="text-center md:text-right"><n-icon class="text-4xl"><blockchain/></n-icon></div>
          <p>
            Depósitos de criptomonedas populares tales como Bitcoin (BTC), Ethereum (ETH), Tether (USDT) u otras.
          </p>
        </div>
      </div>
      <div class="hidden md:flex w-1/3 justify-center items-center">
        <phone-image
          name="login.jpg"
          extraClass="w-[150px]"
          extraClassImage="w-[150px]"
        />
      </div>
      <div class="w-full md:w-1/3">
        <div class="text-justify md:text-left">
          <div class="text-center md:text-left"><n-icon class="text-4xl"><mobile-check/></n-icon></div>
          <p>
            Interfaz intuitiva y amigable para garantizar una experiencia de usuario sin complicaciones.
          </p>
        </div>
        <div class="text-justify md:text-left">
          <div class="text-center md:text-left"><n-icon class="text-4xl"><security/></n-icon></div>
          <p>
            Uso de estándares de seguridad, incluido el cifrado avanzado y las medidas de protección de datos, para asegurar que tus fondos estén siempre resguardados.
          </p>
        </div>
        <div class="text-justify md:text-left">
          <div class="text-center md:text-left"><n-icon class="text-4xl"><integration/></n-icon></div>
          <p>
            Integraciones con aplicaciones y exchanges asociados para acceder a un ecosistema financiero más amplio y potente..
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import PhoneImage from "./PhoneImage.vue";
import {
  ArrowsHorizontal, Security, MobileCheck, Money, Blockchain, Integration
} from "@vicons/carbon";

export default defineComponent({
  props: {},
  components: {
    "phone-image": PhoneImage,
    ArrowsHorizontal,
    Security,
    MobileCheck,
    Money,
    Blockchain,
    Integration
  },
  setup() {
    const phoneImages = ["register.jpg"];

    return {
      phoneImages,
    };
  },
});
</script>
