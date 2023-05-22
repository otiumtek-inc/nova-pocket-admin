<template>
  <div id="faqs" class="w-full mb-10 md:mb-20">
    <h1 class="text-4xl mb-10">Preguntas frecuentes</h1>
    <n-collapse class="w-full md:w-3/5 mx-auto">
      <n-collapse-item name="1">
        <template #arrow><div></div></template>
        <template #header="props">
          <div class="flex flex-col items-center w-full">
            <div
              class="text-base text-center w-full"
              :class="{ 'font-bold': !props.collapsed }"
            >
              ¿Qué es una wallet digital?
            </div>
            <n-icon class="text-lg">
              <chevron-down v-if="props.collapsed" />
              <chevron-up v-else />
            </n-icon>
          </div>
        </template>
        <div class="text-justify text-base">
          Una wallet digital es una aplicación o servicio que te permite
          almacenar, gestionar y realizar transacciones con activos digitales
          como criptomonedas. Funciona de manera similar a una billetera física,
          pero en lugar de monedas y billetes, almacena claves criptográficas
          para acceder y administrar tus activos digitales.
        </div>
      </n-collapse-item>
      <n-collapse-item name="2">
        <template #arrow><div></div></template>
        <template #header="props">
          <div class="flex flex-col items-center w-full">
            <div
              class="text-base text-center w-full"
              :class="{ 'font-bold': !props.collapsed }"
            >
              ¿Cuál es la diferencia entre una wallet digital y una cuenta
              bancaria tradicional?
            </div>
            <n-icon class="text-lg">
              <chevron-down />
            </n-icon>
          </div>
        </template>
        <div class="text-justify text-base">
          Una wallet digital se utiliza específicamente para activos digitales,
          como criptomonedas, mientras que una cuenta bancaria tradicional está
          diseñada para manejar moneda fiduciaria. Las wallets digitales ofrecen
          mayor control sobre tus activos y la posibilidad de realizar
          transacciones globales de manera rápida y económica.
        </div>
      </n-collapse-item>
      <n-collapse-item name="3">
        <template #arrow><div></div></template>
        <template #header="props">
          <div class="flex flex-col items-center w-full">
            <div
              class="text-base text-center w-full"
              :class="{ 'font-bold': !props.collapsed }"
            >
              ¿Cómo funciona una wallet digital?
            </div>
            <n-icon class="text-lg">
              <chevron-down />
            </n-icon>
          </div>
        </template>
        <div class="text-left text-base">
          Una wallet digital almacena las claves privadas necesarias para
          acceder y gestionar tus activos digitales. Estas claves criptográficas
          te permiten firmar transacciones y demostrar la propiedad de los
          activos. Las wallets digitales se conectan a la red blockchain
          correspondiente para realizar transacciones y recibir actualizaciones
          de saldos.
        </div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ChevronDown, ChevronUp } from "@vicons/carbon";

export default defineComponent({
  props: {},
  components: {
    ChevronDown,
    ChevronUp
  },
  setup() {
    return {};
  },
});
</script>
