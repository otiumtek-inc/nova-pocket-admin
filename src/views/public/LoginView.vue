<template>
  <div class="h-screen flex justify-center items-center bg-gray-50">
    <div class="w-1/4 bg-white border border-gray-100 border-solid rounded-lg">
      <el-form
        v-loading="loading"
        ref="formRef"
        :model="form"
        :rules="rules"
        class="p-5"
        size="large"
        status-icon
        label-position="top"
      >
        <img alt="Vue logo" class="w-20 mb-3" src="../../assets/logo.png" />
        <h2 class="mt-0 mb-5">Nova Pocket Admin</h2>
        <el-form-item label="Username" prop="username">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input v-model="form.password" />
        </el-form-item>
        <el-button
          class="mt-3 bg-red-600 border-2 border-red-600 hover:bg-red-400 hover:border-red-400 w-full"
          type="primary"
          @click="submitForm()"
        >
          Acceder
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";

export default {
  name: "LoginView",
  data() {
    return {
      form: {
        username: "novapocket-dev",
        password: "27f25598-3dd1-4891-a45c-89bc8801fa2b",
      },
      loading: false,
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
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/admin");
    }
  },
  methods: {
    submitForm: async function () {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store.dispatch("auth/login", this.form).then(
            () => {
              this.loading = false;
              this.$router.push("/admin");
            },
            (error) => {
              this.loading = false;
              const message =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
              ElMessage.error(message);
            }
          );
        } else {
          return false;
        }
      });
    },
  },
};
</script>
