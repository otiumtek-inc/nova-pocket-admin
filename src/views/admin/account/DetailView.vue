<template>
  <div v-loading="loading" v-if="account" class="flex">
    <el-card class="box-card w-1/4 text-left shadow-none">
      <div class="mb-2"><b>Nombre:</b> {{ account.account_holder.name }}</div>
      <div class="mb-2"><b>Email:</b> {{ account.account_holder.email }}</div>
      <div class="mb-2">
        <b>Teléfono:</b> {{ account.account_holder.phone }}
      </div>
      <div class="mb-2"><b>País:</b> {{ account.account_holder.country }}</div>
      <div>
        <b>Estado de la cuenta:</b>
        <el-text class="mx-1" :type="statusAccount[0]">{{
          statusAccount[1]
        }}</el-text
        >{{ account.account_holder.confirmed }}
      </div>
    </el-card>
    <el-card class="box-card w-3/4 text-left shadow-none">
      <h2 class="mt-0">Transacciones</h2>
    </el-card>
  </div>
</template>

<script>
import AccountService from "@/services/account.service";

export default {
  name: "AccountDetailView",
  data() {
    return {
      loading: true,
      account: null,
      error: null,
    };
  },
  async created() {
    await this.handleInit();
  },
  computed: {
    statusAccount() {
      if (this.account && this.account.confirmed) {
        return ["primary", "Confirmada"];
      }
      return ["warning", "No confirmada"];
    },
  },
  methods: {
    handleInit: async function () {
      this.loading = true;
      await this.queryAccount();
      await this.queryTransactions();
      this.loading = false;
    },
    queryAccount: async function () {
      const res = await AccountService.getAccount(
        this.$route.params.id
      );
      if (res.isOk) {
        this.account = res.data;
      } else {
        this.error = res.message;
      }
    },
    queryTransactions: async function () {
      const res = await AccountService.getTransactionsByAccount(this.$route.params.id);
      if (res.isOk) {
        this.account = res.data;
      } else {
        this.error = res.message;
      }
    },
  },
};
</script>
