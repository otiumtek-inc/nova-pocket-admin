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
    <div class="overflow-auto">
      <n-data-table
        class="mt-5"
        :bordered="true"
        :single-line="false"
        :columns="columns"
        :data="data"
        :pagination="pagination"
      />
    </div>
  </n-card>
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
      pageSize: 3,
    });
    const loading = ref(true);
    const error = ref(null);

    // Draw
    const drawCreateColumns = () => {
      return [
        {
          title: "Id",
          key: "id",
          minWidth: 200
        },
        {
          title: "Cantidad",
          key: "",
          minWidth: 200,
          render: (row) => `${row.amount} ${row.asset_code}`,
        },
        {
          title: "Tipo",
          key: "",
          minWidth: 200,
          render: (row) => `${row.kind}`,
        },
        {
          title: "Fecha",
          key: "date",
          minWidth: 200,
          render: (row) => `${row.date}`,
        },
        {
          title: "Acción",
          key: "actions",
          minWidth: 200,
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
      if (res.isOk) {
        data.value = res.data.data;
        pagination.value = {
          pageSize: res.data.items_per_page,
          page: res.data.page,
        };
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
