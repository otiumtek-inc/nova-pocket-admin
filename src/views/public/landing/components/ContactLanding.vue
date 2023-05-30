<template>
  <div id="contact-us" class="w-full px-4 md:px-0 lg:w-1/2 flex flex-col">
    <n-spin :show="loading">
      <h1 class="text-4xl">{{ t('contact.title') }}</h1>
      <n-form class="w-full" ref="formRef" :model="model" :rules="rules">
        <n-form-item path="name" :label="t('contact.name')">
          <n-input
            class=""
            v-model:value="model.name"
            @keydown.enter.prevent
            :placeholder="t('contact.name')"
          />
        </n-form-item>
        <div class="flex lg:space-x-5">
          <n-form-item class="w-full lg:w-1/2" path="phone" :label="t('contact.phone')">
            <n-input
              v-model:value="model.phone"
              @keydown.enter.prevent
              :placeholder="t('contact.phone')"
            />
          </n-form-item>
          <n-form-item
            first
            class="w-full lg:w-1/2"
            path="email"
            :label="t('contact.email')"
          >
            <n-input
              v-model:value="model.email"
              @keydown.enter.prevent
              :placeholder="t('contact.email')"
            />
          </n-form-item>
        </div>
        <n-form-item path="message" :label="t('contact.message')">
          <n-input
            v-model:value="model.message"
            :placeholder="t('contact.message')"
            type="textarea"
          />
        </n-form-item>
        <div>
          <n-button strong secondary @click="handleSubmit">{{ t('contact.send') }}</n-button>
        </div>
      </n-form>
    </n-spin>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useMessage } from "naive-ui";
import { useI18n } from "vue-i18n"

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const loading = ref(false);
    const formRef = ref(null);
    const message = useMessage();
    const modelRef = ref({
      name: null,
      email: null,
      phone: null,
      message: null,
    });

    const rules = {
      name: {
        required: true,
        message: t('contact.require_name'),
        trigger: ["blur"]
      },
      email: [
        {
          required: true,
          message: t('contact.require_email'),
          trigger: ["blur"]
        },
        {
          validator(rule, value) {
            const validRegex =
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(value && value.match(validRegex)) {
              return true;
            }
            return false;
          },
          message: t('contact.require_valid_email'),
          trigger: ["blur"]
        },
      ],
      phone: {
        required: true,
        message: t('contact.require_phone'),
        trigger: ["blur"]
      },
      message: {
        required: true,
        message: t('contact.require_message'),
        trigger: ["blur"]
      },
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      formRef.value?.validate((errors) => {
        if (!errors) {
          loading.value = true;
          setTimeout(() => {
            loading.value = false;
            message.success(
              "Gracias por enviarnos un mensaje. Lo contactaremos a la brevedad"
            );
            modelRef.value = {
              name: null,
              email: null,
              phone: null,
              message: null,
            };
          }, 3000);
        }
      });
    };

    return {
      t,
      loading,
      formRef,
      model: modelRef,
      rules,
      handleSubmit,
    };
  },
});
</script>
