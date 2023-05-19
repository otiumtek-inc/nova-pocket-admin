<template>
  <div class="w-full">
    <div
      class="hero h-[40rem] flex flex-col justify-center relative"
    >
      <div class="header"></div>
      <div class="flex flex-col items-center justify-center mb-10">
        <div class="text-6xl text-white w-1/3 mb-3">
          NovaPocket e-Wallet
        </div>
        <div class="text-xl text-white w-1/3">
          La wallet que lleva tus finanzas al siguiente nivel
        </div>
      </div>
      <div class="application relative">
        <div class="application absolute top-0 right-0 bottom-0 left-0 m-auto">
          <div class="flex justify-center space-x-3 items-center">
            <div
              class="w-[150px] p-1.5 bg-slate-700 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)]"
            >
              <img
                class="w-[170px] max-w-full h-auto rounded-[1.25rem]"
                src="../../assets/login-phone.jpg"
                alt="Image Description"
              />
            </div>
            <div
              class="w-[170px] p-1.5 bg-slate-700 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)]"
            >
              <img
                class="w-[170px] max-w-full h-auto rounded-[1.25rem]"
                src="../../assets/login-phone.jpg"
                alt="Image Description"
              />
            </div>
            <div
              class="w-[150px] p-1.5 bg-slate-700 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)]"
            >
              <img
                class="w-[170px] max-w-full h-auto rounded-[1.25rem]"
                src="../../assets/login-phone.jpg"
                alt="Image Description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  async mounted() {},
};
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
</style>
