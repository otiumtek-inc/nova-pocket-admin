<template>
  <div id="header" class="w-full relative mb-[300px]">
    <span class="firestone" />
    <span class="firestone" />
    <span class="firestone" />
    <span class="firestone" />
    <span class="firestone" />
    <span class="firestone" />
    <div class="hero flex px-10 py-5 justify-center">
      <div class="flex space-x-4">
        <div
          class="transition ease-in-out delay-150 text-white cursor-pointer hover:bg-gray-200 hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-20 px-5 py-2"
        >
          Home
        </div>
        <div
          class="transition ease-in-out delay-150 text-white cursor-pointer hover:bg-gray-200 hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-20 px-5 py-2"
        >
          About app
        </div>
        <div
          class="transition ease-in-out delay-150 text-white cursor-pointer hover:bg-gray-200 hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-20 px-5 py-2"
        >
          Features
        </div>
        <div
          class="transition ease-in-out delay-150 text-white cursor-pointer hover:bg-gray-200 hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-20 px-5 py-2"
        >
          FAQ's
        </div>
        <div
          class="transition ease-in-out delay-150 text-white cursor-pointer hover:bg-gray-200 hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-20 px-5 py-2"
        >
          Download App
        </div>
        <div
          class="transition ease-in-out delay-150 text-white cursor-pointer hover:bg-gray-200 hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-20 px-5 py-2"
        >
          Contact us
        </div>
      </div>
    </div>
    <div class="hero h-[40rem] flex flex-col justify-center relative">
      <div class="flex flex-col items-center justify-center mb-10">
        <img
          alt="Nova Pocket logo"
          class="w-20 mb-3"
          src="../../assets/logo.png"
        />
        <div class="text-6xl text-white w-full md:w-1/3 mb-3">
          Nova Pocket Wallet
        </div>
        <div class="text-xl text-white w-full md:w-1/3">
          El poder de tu dinero, en un solo lugar: Descubre la magia de nuestra
          wallet digital
        </div>
      </div>
      <div class="relative">
        <div class="application absolute top-0 right-0 bottom-0 left-0 m-auto">
          <div class="flex justify-center space-x-3 items-center">
            <div
              class="w-[150px] p-1.5 bg-slate-700 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)]"
            >
              <img
                class="w-[170px] max-w-full h-auto rounded-[1.25rem]"
                src="../../assets/register.jpg"
                alt="Image Description"
              />
            </div>
            <div
              class="w-[170px] p-1.5 bg-slate-700 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)]"
            >
              <img
                class="w-[170px] max-w-full h-auto rounded-[1.25rem]"
                src="../../assets/login.jpg"
                alt="Image Description"
              />
            </div>
            <div
              class="w-[150px] p-1.5 bg-slate-700 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)]"
            >
              <img
                class="w-[170px] max-w-full h-auto rounded-[1.25rem]"
                src="../../assets/kyc.jpg"
                alt="Image Description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-2/3 mx-auto mb-36">
    <div id="about-us" class="w-3/5 mx-auto mb-20">
      <h1 class="text-4xl">Sobre Nova Pocket Wallet</h1>
      <p>
        ¡Descubre nuestra innovadora billetera digital basada en la Stellar
        Network!
      </p>
      <p>
        En un mundo cada vez más digitalizado, buscamos brindarte una solución
        revolucionaria para gestionar tus activos financieros de forma segura y
        eficiente. Nuestra billetera digital, respaldada por la poderosa
        tecnología de la Stellar Network, te ofrece una experiencia única y sin
        fronteras en la gestión de tu dinero.
      </p>
    </div>
    <div id="features">
      <h1 class="text-4xl">Características</h1>
    </div>
    <div id="benefits">
      <h1 class="text-4xl">Beneficios para ti</h1>
    </div>
    <div id="first-steps">
      <h1 class="text-4xl">Pasos para comenzar</h1>
    </div>
    <div id="security">
      <h1 class="text-4xl">Seguridad y privacidad</h1>
    </div>
    <div id="faqs" class="mb-36">
      <h1 class="text-4xl">Preguntas frecuentes</h1>
    </div>
    <div id="download" class="flex space-x-3 mb-36">
      <div class="w-1/2">
        <h1 class="text-4xl text-right">Descarga la App</h1>
        <p class="text-right">
          Simplemente visita la tienda de aplicaciones de tu dispositivo móvil,
          busca nuestra aplicación y haz clic en el botón de descarga. En pocos
          minutos, podrás experimentar la libertad de llevar dinero donde no hay
          limites.
        </p>
        <div class="flex justify-end">
          <img
            class="w-[150px]"
            src="../../assets/google-play-badge.png"
            alt="Image Description"
          />
          <img
            class="w-[132px]"
            src="../../assets/app-store-badge.png"
            alt="Image Description"
          />
        </div>
      </div>
      <div class="w-1/2 flex space-x-2 justify-end">
        <div
          class="w-[150px] p-1.5 bg-slate-700 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)]"
        >
          <img
            class="w-[170px] max-w-full h-auto rounded-[1.25rem]"
            src="../../assets/register.jpg"
            alt="Image Description"
          />
        </div>
        <div
          class="w-[150px] p-1.5 bg-slate-700 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)]"
        >
          <img
            class="w-[170px] max-w-full h-auto rounded-[1.25rem]"
            src="../../assets/register.jpg"
            alt="Image Description"
          />
        </div>
        <div
          class="w-[150px] p-1.5 bg-slate-700 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)]"
        >
          <img
            class="w-[170px] max-w-full h-auto rounded-[1.25rem]"
            src="../../assets/register.jpg"
            alt="Image Description"
          />
        </div>
      </div>
    </div>
    <div id="contact mb-16">
      <h1 class="text-4xl">Información de contacto</h1>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: [],
  setup() {
    return {};
  },
});
</script>

<style scoped>
.hero {
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
