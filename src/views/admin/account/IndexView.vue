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
        },
        {
          title: "Nombre del propietario",
          key: "account_holder.name",
        },
        {
          title: "Correo del propietario",
          key: "account_holder.email",
        },
        {
          title: "Confirmada",
          key: "confirmed",
          render: (row) =>
            row.confirmed &&
            h(
              <div class="text-center">
                <Icon class="mr-2">
                  <CheckmarkFilled class="w-5 text-green-600" />
                </Icon>
              </div>
            ),
        },
        {
          title: "Identificador de cuenta",
          key: "account",
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
          title: "Action",
          key: "actions",
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
