<template>
  <div class="h-screen flex justify-center items-center bg-gray-50">
    <div class="w-1/4 bg-white border border-gray-100 border-solid rounded-lg">
      <n-spin :show="loading" stroke="#334155">
        <n-form
          class="p-5"
          ref="formRef"
          :model="form"
          :rules="rules"
        >
          <img alt="Vue logo" class="w-20 mb-3" src="../../assets/logo.png" />
          <h2 class="mt-0 mb-5">Nova Pocket Admin</h2>
          <n-form-item label="Username" path="username">
            <n-input v-model:value="form.username" placeholder="Input Name" />
          </n-form-item>
          <n-form-item label="Password" path="password">
            <n-input v-model:value="form.password" placeholder="Input Password" />
          </n-form-item>
          <n-form-item>
            <n-button type="warning" ghost size="large" class="w-full" @click="submitForm">
              Login
            </n-button>
          </n-form-item>
        </n-form>
      </n-spin>
    </div>
  </div>
</template>

<script>
  import { defineComponent, ref, computed, onBeforeMount } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  import { useMessage } from 'naive-ui'

  export default defineComponent({
    setup () {
      const formRef = ref(null)
      const message = useMessage()
      const store = useStore()
      const router = useRouter()
      const loggedIn = computed(
        () => store.state.auth.loggedIn
      )
      const loading = ref(false)
      const form = ref({
        username: "novapocket-dev",
        password: "27f25598-3dd1-4891-a45c-89bc8801fa2b",
      })

      onBeforeMount(() => {
        if (loggedIn.value) {
          router.push("/admin");
        }
      })

      return {
        formRef,
        loading,
        form,
        rules: {
          username: [
            { required: true, message: "Please input username", trigger: "blur" },
            { min: 3, message: "Length should be 3", trigger: "blur" },
          ],
          password: [
            {
              required: true,
              message: "Please input password",
              trigger: ["blur", "change"],
            },
          ],
        },
        submitForm: (e) => {
          e.preventDefault()
          formRef.value?.validate((errors) => {
            if (!errors) {
              loading.value = true
              store.dispatch("auth/login", form.value).then(
                () => {
                  loading.value = false;
                  router.push("/admin");
                },
                (error) => {
                  loading.value = false;
                  const text = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                  message.error(text);
                })
            }
          })
        }
      }
    }
  })
</script>