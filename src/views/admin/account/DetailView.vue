<template>
  <n-card
    :segmented="{
      content: true,
    }"
  >
    <template #header v-if="error">
      <n-alert title="Se ha producido un error" type="error" closable>
        {{ error }}
      </n-alert>
    </template>
    <n-spin :show="loading">
      <div v-if="account" class="flex">
        <n-card class="box-card w-1/4 text-left shadow-none">
          <div class="mb-2">
            <b>Nombre:</b> {{ account.account_holder.name }}
          </div>
          <div class="mb-2">
            <b>Email:</b> {{ account.account_holder.email }}
          </div>
          <div class="mb-2">
            <b>Teléfono:</b> {{ account.account_holder.phone }}
          </div>
          <div class="mb-2">
            <b>País:</b> {{ account.account_holder.country }}
          </div>
          <div>
            <b>Estado de la cuenta:</b>
            <el-text class="mx-1" :type="statusAccount[0]">{{
              statusAccount[1]
            }}</el-text
            >{{ account.account_holder.confirmed }}
          </div>
        </n-card>
        <n-card>
          <template #header>
            <div class="text-left">Transacciones</div>
          </template>
          <template v-if="!transactions.length" #default>
            <n-empty description="You can't find anything" />
          </template>
        </n-card>
      </div>
    </n-spin>
  </n-card>
</template>

<script>
import { defineComponent, ref, onBeforeMount, computed } from "vue";
import { useRoute } from "vue-router";
import AccountService from "@/services/account.service";

export default defineComponent({
  props: [],
  setup() {
    const route = useRoute();
    const loading = ref(true);
    const account = ref(null);
    const transactions = ref([]);
    const error = ref(null);
    const statusAccount = computed(() => {
      if (account.value && account.value.confirmed) {
        return ["primary", "Confirmada"];
      }
      return ["warning", "No confirmada"];
    });

    const queryAccount = async function () {
      const res = await AccountService.getAccount(route.params.id);
      if (res.isOk) {
        account.value = res.data;
      } else {
        error.value = res.message;
      }
    };

    const queryTransactions = async function () {
      const res = await AccountService.getTransactionsByAccount(
        route.params.id
      );
      if (res.isOk) {
        transactions.value = res.data;
      } else {
        error.value = res.message;
      }
    };

    const handleInit = async () => {
      loading.value = true;
      await queryAccount();
      await queryTransactions();
      loading.value = false;
    };

    onBeforeMount(() => {
      handleInit();
    });
    return {
      statusAccount,
      account,
      transactions,
      error,
      loading,
    };
  },
});
</script>
