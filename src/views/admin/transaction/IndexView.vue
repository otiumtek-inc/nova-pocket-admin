<template>
  <n-alert v-if="error" title="Oppsss!!" type="error" closable>
    {{ error }}
  </n-alert>
  <n-data-table
    class="mt-5"
    :bordered="true"
    :single-line="false"
    :columns="columns"
    :data="data"
    :pagination="pagination"
  />
</template>

<script>
import { h, defineComponent, onMounted, ref } from "vue";
import { NButton } from "naive-ui";

import useToolkit from "@/composables/useToolkit";
import TransactionService from "@/services/transaction.service";

export default defineComponent({
  props: [],
  setup() {
    // Service

    // Composable
    const { tkOpenStellarExplorer } = useToolkit();

    // Data
    const data = ref([]);
    const pagination = ref({
      page: 1,
      pageSize: 3
    });
    const loading = ref(true);
    const error = ref(null);

    // Draw
    const drawCreateColumns = () => {
      return [
        {
          title: "Id",
          key: "id",
        },
        {
          title: "Cantidad",
          key: "",
          render: (row) => `${row.amount} ${row.asset_code}`
        },
        {
          title: "Tipo",
          key: "",
          render: (row) => `${row.kind}` 
        },
        {
          title: "Fecha",
          key: "date",
          render: (row) => `${row.date}` 
        },
        {
          title: "Action",
          key: "actions",
          render(row) {
            return h("div", {}, [
              h(
                NButton,
                {
                  ghost: true,
                  type: "warning",
                  onClick: () => tkOpenStellarExplorer(row.id),
                },
                { default: () => "Detalles" }
              ),
            ]);
          },
        },
      ];
    };

    // Queries
    const queryAccounts = async () => {
      loading.value = true;
      const res = await TransactionService.getTransactions();
      console.log(res)
      if (res.isOk) {
        data.value = res.data.data;
        pagination.value = {pageSize: res.data.items_per_page, page: res.data.page }
      } else {
        error.value = res.message;
      }
      loading.value = false;
    };

    // Lifecycle
    onMounted(() => {
      queryAccounts();
    });

    return {
      data,
      pagination,
      loading,
      error,
      columns: drawCreateColumns(),
    };
  },
});
</script>
