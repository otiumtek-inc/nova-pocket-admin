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
import { CheckmarkFilled } from "@vicons/carbon";

import useToolkit from "@/composables/useToolkit";
import AccountService from "@/services/account.service";

export default defineComponent({
  props: [],
  setup() {
    // Service

    // Composable
    const { tkNavigate, tkOpenStellarExplorer } = useToolkit();

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
          minWidth: 50,
        },
        {
          title: "Nombre del propietario",
          key: "account_holder.name",
          minWidth: 200,
        },
        {
          title: "Correo del propietario",
          key: "account_holder.email",
          minWidth: 200,
        },
        {
          title: "Confirmada",
          key: "confirmed",
          minWidth: 200,
          render: (row) =>
            row.confirmed &&
            h(
              <div class="text-center">
                <n-icon class="mr-2">
                  <CheckmarkFilled class="w-5 text-green-600" />
                </n-icon>
              </div>
            ),
        },
        {
          title: "Identificador de cuenta",
          key: "account",
          minWidth: 200,
          render: (row) =>
            h(
              NButton,
              {
                quaternary: true,
                type: "warning",
                onClick: () =>
                  tkNavigate("account-detail", { id: row.account }),
              },
              { default: () => row.account }
            ),
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
                  onClick: () => tkOpenStellarExplorer(row.account),
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
      const res = await AccountService.getAccounts();
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
