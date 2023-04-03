<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
      label-position="top"
    >
      <el-form-item label="Username" prop="username">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="ruleForm.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Acceder
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const formSize = ref("default");
const ruleFormRef = ref();
const ruleForm = reactive({
  username: "",
  password: "",
});

const rules = reactive({
  username: [
    { required: true, message: "Please input username", trigger: "blur" },
    { min: 3, message: "Length should be 3", trigger: "blur" },
  ],
  password: [
    {
      required: true,
      message: "Please input password",
      trigger: ['blur', 'change'],
    },
  ],
});

const submitForm = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>
