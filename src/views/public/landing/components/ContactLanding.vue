<template>
  <div id="contact-us" class="w-full px-4 md:px-0 lg:w-1/2 flex flex-col">
    <h1 class="text-4xl">Contáctanos</h1>
    <n-form class="w-full" ref="formRef" :model="model" :rules="rules">
      <n-form-item path="name" label="Nombre">
        <n-input
          class=""
          v-model:value="model.name"
          @keydown.enter.prevent
          placeholder="Nombre"
        />
      </n-form-item>
      <div class="flex lg:space-x-5">
        <n-form-item class="w-full lg:w-1/2" path="phone" label="Teléfono">
          <n-input
            v-model:value="model.phone"
            @keydown.enter.prevent
            placeholder="Teléfono"
          />
        </n-form-item>
        <n-form-item
          class="w-full lg:w-1/2"
          path="email"
          label="Correo electrónico"
        >
          <n-input
            v-model:value="model.email"
            @keydown.enter.prevent
            placeholder="Correo electrónico"
          />
        </n-form-item>
      </div>
      <n-form-item path="message" label="Mensaje">
        <n-input
          v-model:value="model.message"
          placeholder="Mensaje"
          type="textarea"
        />
      </n-form-item>
    </n-form>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useMessage } from "naive-ui";

export default defineComponent({
  setup() {
    const formRef = ref(null);
    const message = useMessage();
    const modelRef = ref({
      name: null,
      email: null,
      phone: null,
      message: null,
    });
    const rules = {};
    return {
      formRef,
      model: modelRef,
      rules,
      handleValidateButtonClick(e) {
        e.preventDefault();
        formRef.value?.validate((errors) => {
          if (!errors) {
            message.success("Valid");
          } else {
            console.log(errors);
            message.error("Invalid");
          }
        });
      },
    };
  },
});
</script>
